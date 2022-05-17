import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../shared/authentication.service";

@Component({
    selector: "register-page",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

  name:any;
  username:any;
  password:any;
  message:any;

    constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
    }


    ngOnInit() {
    }

  register(formValues: any) {
        this.authenticationService.register(formValues.username, formValues.password, formValues.name).then(r => {
            if (r === "Registration successful") {
                this.router.navigate(["/login"]);
            } else {
                this.message = r;
            }
        });
    }
}
