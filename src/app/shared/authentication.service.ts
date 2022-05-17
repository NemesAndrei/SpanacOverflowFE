import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router, Routes} from "@angular/router";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, private route:Router) {

  }

  async login(username: string, password: string): Promise<string> {
    let users = await this.http.get("http://localhost:8081/users/getAll").toPromise();
    // @ts-ignore
    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
      if(user.isBanned == true){
        console.log('nu bine');
        return "User is banned";
        throw new Error("User is banned");
      } else {
        localStorage.setItem("user", JSON.stringify(user));
        if(user.role=="USER"){
          this.route.navigate(['/home']);
        }
        if(user.role=="ADMIN"){
          this.route.navigate(['/admin']);
        }
        return user.role;
      }
    }
    return "Invalid username or password";
  }

  async logout(): Promise<any> {
    localStorage.removeItem("user");
  }

  async register(username: string, password: string, name:string): Promise<string> {
    let users = await this.http.get("http://localhost:8081/users/getAll").toPromise();
    // @ts-ignore
    let user = users.find(user => user.username === username);
    if (user) {
      return "Username already exists";
    }
    let newUser = {
      name: name,
      username: username,
      password: password,
      role: "USER",
      isBanned: false,
      score: 0
    };
    await this.http.post("http://localhost:8081/users/save", newUser).toPromise();
    return "Registration successful";
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("user") !== null;
  }

  isUser(): boolean {
    if(localStorage.getItem("user") !== null){
      // @ts-ignore
      let user = JSON.parse(localStorage.getItem("user"));
      if(user.role=="USER"){
        return true;
      }
    }
    return false;
  }
  isAdmin(): boolean {
    if(localStorage.getItem("user") !== null){
      // @ts-ignore
      let user = JSON.parse(localStorage.getItem("user"));
      if(user.role=="ADMIN"){
        return true;
      }
    }
    return false;
  }
}
