import {Component, Input, OnInit} from "@angular/core";
import {AnswerService} from "../../shared/answer.service";

@Component({
    selector: 'my-answers',
    templateUrl: './myAnswers.component.html',
    styleUrls: ['./myAnswers.component.css']
})

export class myAnswersComponent implements OnInit{
  @Input() answers:any;
    constructor(private answerService:AnswerService) {
    }

    ngOnInit() {
      // @ts-ignore
      this.answerService.getAnswersByUser().then(a => this.answers = a)
    }

  editAnswer(answer:any){
      this.answerService.updateAnswer(answer.id,answer.body).then(
        r=>{
          window.location.reload();
        }
      );
  }
  deleteAnswer(answer:any){
      console.log(answer.id);
    this.answerService.deleteAnswer(answer.id).then(r=>{
      if (r=="Delete success"){
        console.log("deleted");
        window.location.reload();
      }
    });

  }
}
