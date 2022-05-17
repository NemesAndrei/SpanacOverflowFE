import {Component, OnInit} from "@angular/core";
import {QuestionsService} from "../../../../shared/questions.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-question-filter-title",
    templateUrl: "./questionFilterTitle.component.html",
    styleUrls: ["./questionFilterTitle.component.css"]
})

export class QuestionFilterTitleComponent implements OnInit{
  questions: any;
  constructor(private questionService: QuestionsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.questionService.getByTitle(this.route.snapshot.params['title']).then(res => this.questions = res);
  }
}
