import {Component, Input, OnInit} from "@angular/core";
import {QuestionsService} from "../../../shared/questions.service";

@Component({
    selector: "admin-questions",
    templateUrl: "./questionsAdmin.component.html",
    styleUrls: ["./questionsAdmin.component.css"]
})

export class QuestionsAdminComponent implements OnInit{
  @Input() questions:any;
    constructor(private questionsService: QuestionsService) {
    }

    ngOnInit() {
      this.questionsService.getQuestions().then(q => this.questions = q);
    }
  editQuestion(question:any){
    this.questionsService.updateQuestion(question,question.id).then(
      r=>{
        window.location.reload();
      });

  }
  deleteQuestion(question:any) {
    console.log(question.id);
    this.questionsService.deleteQuestion(question.id).then(r => {
      if (r == "Delete success") {
        console.log("deleted");
        window.location.reload();
      }
    });
  }
}
