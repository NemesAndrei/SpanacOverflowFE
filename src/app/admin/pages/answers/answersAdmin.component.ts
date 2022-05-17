import {Component, Input, OnInit} from "@angular/core";
import {AnswerService} from "../../../shared/answer.service";

@Component({
    selector: 'admin-answers',
    templateUrl: './answersAdmin.component.html',
    styleUrls: ['./answersAdmin.component.css']
})

export class AnswersAdminComponent implements OnInit{
  @Input() answers:any;
    constructor(private answersService: AnswerService) {
    }

    ngOnInit() {
      this.answersService.getAllAnswers().then(a => this.answers = a)
    }
  editAnswer(answer:any){
    this.answersService.updateAnswer(answer.id,answer.body).then(
      r=>{
        window.location.reload();
      }
    );
  }
  deleteAnswer(answer:any){
    console.log(answer.id);
    this.answersService.deleteAnswer(answer.id).then(r=>{
      if (r=="Delete success"){
        console.log("deleted");
        window.location.reload();
      }
    });

  }

}
