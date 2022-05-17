import {Component, Input} from "@angular/core";
import {IQuestion} from "../../../models/iQuestion";
import {MatGridList} from "@angular/material/grid-list";

@Component({
    selector: 'question-card',
    templateUrl: './questionCard.component.html',
    styleUrls: ['./questionCard.component.css']
})

export class QuestionCardComponent {
  @Input() question:any;
  author:any;
  constructor() {
  }
}
