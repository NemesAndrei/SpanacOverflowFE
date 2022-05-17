import {Component, Input, OnInit} from "@angular/core";
import {QuestionsService} from "../../shared/questions.service";

@Component({
    selector: 'my-questions',
    templateUrl: './myQuestions.component.html',
    styleUrls: ['./myQuestions.component.css']
})

export class myQuestionsComponent implements OnInit {
  @Input() questions:any;
    constructor(private questionService:QuestionsService) {
    }

    ngOnInit() {
      // @ts-ignore
      let user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      this.questionService.getQuestionsByUser(user.id).then(q => this.questions = q);
    }
  editQuestion(question:any){
      this.questionService.updateQuestion(question,question.id).then(
        r=>{
          window.location.reload();
        });
  }
  deleteQuestion(question:any){
      console.log(question.id);
    this.questionService.deleteQuestion(question.id).then(r=>{
      if (r=="Delete success"){
        console.log("deleted");
        window.location.reload();
      }
    });
  }
}
