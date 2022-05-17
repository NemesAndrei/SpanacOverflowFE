import {Component, OnInit} from "@angular/core";
import {TagsService} from "../../shared/tags.service";

@Component({
  selector: 'tags-list',
  templateUrl: './tagList.component.html',
  styleUrls: ['./tagList.component.css']
})

export class TagListComponent implements OnInit {
  tags:any;

  constructor(private tagService:TagsService) {
  }

  ngOnInit() {
    this.tagService.getTags().then(t => this.tags = t);
  }
}
