import {IAnswer} from "./iAnswer";
import {ITag} from "./iTag";
import {IUser} from "./iUser";

export interface IQuestion {
  id?:Number;
  title:String;
  body:String;
  created:Date;
  votes:Number;
  user: IUser;
  answerSet:IAnswer[];
  tags:ITag[];
}
