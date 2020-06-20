import {Role} from "./role";

export class User {
  public  id: number;
  public email : string;
  public password : string;
  public isEnable : boolean = true;
  public roles: Array<Role> = new Array<Role>();
}
