import {Component, OnInit} from "@angular/core";
import {QuestionsService} from "../../../../shared/questions.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'question-filter-tag',
  templateUrl: './questionFilterTag.component.html',
  styleUrls: ['./questionFilterTag.component.css']
})

export class QuestionFilterTagComponent implements OnInit{
  questions:any;
  ricardo:any;
  constructor(private questionService:QuestionsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.questionService.getByTag(this.route.snapshot.params['tag']).then(res => this.questions = res);
    if(this.route.snapshot.params['tag'] == "ricardo"){
      this.ricardo = true;
    }
  }
}
