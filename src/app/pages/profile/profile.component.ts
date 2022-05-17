import {Component, Input, OnInit} from "@angular/core";
import {UserService} from "../../shared/user.service";

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  @Input() user:any;
    constructor(private userService:UserService) {
    }

    ngOnInit() {
      this.user=this.userService.getLoggedInUser();
    }
}
