import {
  Injectable
} from '@angular/core';
import { User } from '../shared/user/user';
import { userStatus } from '../shared/user/user-status.interface';
import { user } from '../shared/user/user.interface';
import { LocalhostService } from './localhost.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users : userStatus[];
  private activeUser : userStatus;
  constructor(private localStorage : LocalhostService) {}

  getUser() : void {
   this.users =  JSON.parse(this.localStorage.get('users'))
  }

  refresh() : void {
    this.localStorage.refresh('users', JSON.stringify(this.users));
  }

  getActiveUser() {
    return this.activeUser;
  }
  getFullName() : string {
   return this.activeUser.data.name + ' ' + this.activeUser.data.surname;
    
  }
  private register (newUser : user) {
    newUser.id = this.getActualCode();
    this.users.push(new User(newUser));
    this.refresh()
    
  }

 

  private getActualCode() : number {
    return this.users.length
  }

  logOut () : void {
    this.activeUser = {} as userStatus;
  }

  checkUniqueness ( newUser : user ) : boolean {
    let isUnique : boolean = true;
    this.users.forEach(user => {
      if(user.data.login === newUser.login) isUnique = false;
    })
    if(isUnique){ 
      this.register(newUser)
      return true
    }else{
      return false
      } 
    }

  check(data: {
    password: string,
    login: string
  }): boolean {
    let result = false;
    this.users.forEach(user => {
      if (user.data.login === data.login && user.data.password === data.password) {
        this.activeUser = user;
        result = true;
      }
    })
    return result
  }



}
