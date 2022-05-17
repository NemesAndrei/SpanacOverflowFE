import {Component, Input, OnInit} from "@angular/core";
import {IQuestion} from "../../models/iQuestion";
import {QuestionsService} from "../../shared/questions.service";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'question-details',
  templateUrl: './questionDetails.component.html',
  styleUrls: ['./questionDetails.component.css'],
})

export class QuestionDetailsComponent implements OnInit {
  @Input() question: any;
  author:any;
  body: any;
  alertMessage: any;

  constructor(private questionService: QuestionsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.questionService.getQuestion(+this.route.snapshot.params['id']).then(res => this.question = res).then(
      () => {
        console.log(this.question.answerSet);
        this.author=this.question.user;
        this.question.answerSet.sort((a: { votes: number; }, b: { votes: number; }) => {
          return b.votes - a.votes;
        });
      }
    );




  }

  submitAnswer() {
    let answer = {
      body: this.body,
    }
    this.questionService.addAnswer(answer,this.question.id).then(res => this.question.answers.push(res));
  }
  like(question:any){
    this.questionService.vote(question.id,1).then(r=>{
      this.alertMessage=r;
    });
  }
  dislike(question:any){
    this.questionService.vote(question.id,-1).then(r=>{
      this.alertMessage=r;
    });
  }
}

