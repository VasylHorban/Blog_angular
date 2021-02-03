import { Injectable } from '@angular/core';
import { blogs } from '../mock/blogs';
import { users } from '../mock/users-mock';


@Injectable({
  providedIn: 'root'
})
export class LocalhostService {

  constructor() { }

  setData() : void {
    if(!this.check('users')){
      localStorage.setItem('users' , JSON.stringify(users))

    }
    if(!this.check('blogs')) {
      localStorage.setItem('blogs' , JSON.stringify(blogs))
    }
    
  } 

  refresh(key : string, data : string) : void {
    localStorage.removeItem(key);
    localStorage.setItem(key , data);
  }



  get(key : string) : string {
      return localStorage.getItem(key);
    
  }

  check(key : string) : boolean {
    if (localStorage.getItem(key) !== null) {
      return true
    }
    return false
  }


}
