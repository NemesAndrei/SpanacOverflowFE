import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AnswerService {
  httpOptions: {};

  constructor(private http: HttpClient, private routes: Router) {
    this.httpOptions = {
      responseType: 'text',
      headers: new HttpHeaders({})
    };
  }

  async getAllAnswers(): Promise<any> {
    return await this.http.get("http://localhost:8081/answers/getAll").toPromise()
  }

  async vote(answerid: any, vote: number): Promise<any> {
    // @ts-ignore
    let user = JSON.parse(localStorage.getItem("user"));
    return await this.http.get("http://localhost:8081/answers/vote?answerid=" + answerid + "&userid=" + user.id + "&vote=" + vote, this.httpOptions).toPromise()
  }

  async getAnswersByUser(): Promise<any> {
    // @ts-ignore
    let user = JSON.parse(localStorage.getItem("user"));
    return await this.http.get("http://localhost:8081/answers/getForUser?userid=" + user.id).toPromise();
  }

  async updateAnswer(id: number, body: string): Promise<any> {
    return await this.http.put("http://localhost:8081/answers/update?answerid=" + id, body).toPromise()
  }

  async deleteAnswer(answerId: number): Promise<any> {
  return await this.http.delete("http://localhost:8081/answers/delete?answerid=" + answerId,this.httpOptions).toPromise()
  }
}


