import {Component} from "@angular/core";
import {AuthenticationService} from "../../shared/authentication.service";
import {Router} from "@angular/router";


@Component({
    selector: 'admin-nav',
    templateUrl: './adminnav.component.html',
    styleUrls: ['./adminnav.component.css']
})

export class AdminNavComponent {

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
