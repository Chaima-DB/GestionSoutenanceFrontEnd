import {Role} from "./role";

export class User {
  public  id: number;
  public email : string;
  public password : string;
  public isEnable : boolean ;
  public roles= new Array<Role>();
}

  // {id: 1, titre :"ROLE_SUPER_ADMIN"},
  // {id: 2, titre :"ROLE_ADMIN"},
  // {id: 3, titre :"ROLE_USER"},
  // {id: 4, titre :"ROLE_PROF"},
