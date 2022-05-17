import {IUser} from "./iUser";

export interface IAnswer {
  id?: Number;
  body: String;
  created: Date;
  votes: Number;
  user: IUser;
}
