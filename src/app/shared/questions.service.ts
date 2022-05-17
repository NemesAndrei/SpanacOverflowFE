import {Injectable} from "@angular/core";
import {IQuestion} from "../models/iQuestion";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";

@Injectable()
export class QuestionsService {
  private httpOptions: {};

  constructor(private http:HttpClient, private routes: Router) {
    this.httpOptions = {
      responseType: 'text',
      headers: new HttpHeaders({
      })
    };
  }

  async getQuestions(): Promise<any>{
    let questions = await this.http.get("http://localhost:8081/questions/getAll").toPromise();
    console.log(questions);
    return questions;
  }

  async getQuestionsByUser(userId: number): Promise<any>{
    let questions = await this.http.get("http://localhost:8081/questions/getForUser?userid="+userId).toPromise();
    console.log(questions);
    return questions;
  }

  async getQuestion(id: number): Promise<any>{
    let question = await this.http.get("http://localhost:8081/questions/getById?questionid="+id).toPromise();
    console.log(question);
    return question;
  }

  async getByTag(tag: string): Promise<any>{
    let questions = await this.http.get("http://localhost:8081/questions/filterTag?tag="+tag).toPromise();
    console.log(questions);
    return questions;
  }

  async getByTitle(title: string): Promise<any>{
    let questions = await this.http.get("http://localhost:8081/questions/filterTitle?title="+title).toPromise();
    console.log(questions);
    return questions;
  }

  async addAnswer(answer: any, questionId:number): Promise<any>{
    // @ts-ignore
    let user = JSON.parse(localStorage.getItem("user"));
    return await this.http.put<any>("http://localhost:8081/answers/save?questionid="+questionId+"&userid="+user.id,{body: answer.body}).toPromise().then(respose => {
      console.log(respose);
      window.location.reload()
    });
  }

  async addQuestion(question: any): Promise<any>{
    // @ts-ignore
    let user = JSON.parse(localStorage.getItem("user"));
    return await this.http.put<any>("http://localhost:8081/questions/save?tags="+question.tags+"&userid="+user.id,{title: question.title, body: question.body}).toPromise().then(respose => {
      console.log(respose);
      this.routes.navigate(['/questions']);
    });
  }

  async deleteQuestion(questionId: number): Promise<any>{
    return await this.http.delete("http://localhost:8081/questions/delete?questionid="+questionId,this.httpOptions).toPromise();
  }

  async updateQuestion(question:any,questionId:number): Promise<any>{
    return await this.http.put("http://localhost:8081/questions/update?questionid="+questionId,question).toPromise();
  }

  async vote(questionId: any, vote: number): Promise<any> {
    // @ts-ignore
    let user = JSON.parse(localStorage.getItem("user"));
    return await this.http.get("http://localhost:8081/questions/vote?questionid=" + questionId + "&userid=" + user.id + "&vote=" + vote, this.httpOptions).toPromise()
  }
  }
