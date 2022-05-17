import {Component, Input} from "@angular/core";
import {IQuestion} from "../../../models/iQuestion";
import {MatGridList} from "@angular/material/grid-list";
import {IAnswer} from "../../../models/iAnswer";
import {AnswerService} from "../../../shared/answer.service";
import {delay} from "rxjs";

@Component({
  selector: 'answer-card',
  templateUrl: './answerCard.component.html',
  styleUrls: ['./answerCard.component.css']
})

export class AnswerCardComponent {
  @Input() answer:any;
  alertMessage:any;
  constructor(private answerService: AnswerService) {
  }
  like(answer:any) {
    this.answerService.vote(answer.id, 1).then(r  => {
      console.log(r);
      this.alertMessage=r;
    });
  }
  dislike(answer:any) {
    this.answerService.vote(answer.id, -1).then(r  => {
      console.log(r);
      this.alertMessage=r;
      }
    )
  }
}
