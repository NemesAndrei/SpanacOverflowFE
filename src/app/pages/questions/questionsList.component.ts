import {Component, OnInit} from "@angular/core";
import {IQuestion} from "../../models/iQuestion";
import {QuestionsService} from "../../shared/questions.service";

@Component({
    selector: 'questions-list',
    templateUrl: './questionsList.component.html',
    styleUrls: ['./questionsList.component.css']
})

export class QuestionsListComponent implements OnInit {
    questions:any;

    constructor(private questionsService:QuestionsService) {
    }

    ngOnInit() {
      this.questionsService.getQuestions().then(q => this.questions = q);
    }
}
