import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent {
  title: any;
    constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
    }

  onSubmit() {
      //title has value from form
      console.log(this.title);
      this.router.navigate(["/questions/title/"+this.title]);

  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
