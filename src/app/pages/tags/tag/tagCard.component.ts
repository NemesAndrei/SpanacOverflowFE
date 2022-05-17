import {Component, Input} from "@angular/core";
import {ITag} from "../../../models/iTag";

@Component({
  selector: 'tag-card',
  templateUrl: './tagCard.component.html',
  styleUrls: ['./tagCard.component.css']
})

export class TagCardComponent {
  @Input() tag!:ITag

  constructor() {

  }
}
