import {Component, Input, OnInit} from "@angular/core";
import {UserService} from "../../../shared/user.service";

@Component({
    selector: "users-admin",
    templateUrl: "./usersAdmin.component.html",
    styleUrls: ["./usersAdmin.component.css"]
})

export class UsersAdminComponent implements OnInit {
  @Input() users: any;
    constructor(private usersService: UserService) {
    }

    ngOnInit() {
      this.usersService.getUsers().then(r => {
        this.users = r;
        console.log(this.users);
      });
    }
  banUser(user:any) {
    this.usersService.banUser(user.id).then(r => {
      window.location.reload();
    });
  }
}
