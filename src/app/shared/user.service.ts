import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private routes: Router) {

  }

  getLoggedInUser() {
    // @ts-ignore
    let user = JSON.parse(localStorage.getItem("user"));
    return user;
  }

  async getUsers() {
    let users = await this.http.get("http://localhost:8081/users/getAll").toPromise();
    return users;
  }

  async banUser(id: number) {
    let users = await this.http.put("http://localhost:8081/users/ban?userid=" + id,"").toPromise();
    return users;
  }
}
