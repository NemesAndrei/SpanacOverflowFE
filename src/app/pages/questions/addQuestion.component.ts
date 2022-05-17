import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionsService} from "../../shared/questions.service";

@Component({
    selector: "add-question",
    templateUrl: "./addQuestion.component.html",
    styleUrls: ["./addQuestion.component.css"]
})

export class AddQuestionComponent implements OnInit {
  title:any;
  body:any;
  tags:any;
    constructor(private route: ActivatedRoute, private router: Router, private questionService: QuestionsService) {
    }

    ngOnInit() {

    }

    addQuestion(formValues: any) {
      let question = {
        title: formValues.title,
        body: formValues.body,
        tags: formValues.tags,
      }
      this.questionService.addQuestion(question);
    }

}
