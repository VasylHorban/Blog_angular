import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public dbFailed : boolean = false;
  public openRegister : boolean = false;
  public userData : {login:string,password: string } = {
    login : '',
    password : ''
  }

  @Output() successEvent = new EventEmitter();

  constructor( private userService : UserService) { }

  ngOnInit(): void {
  }

  checkUser() : void{
    let result = this.userService.check(this.userData);
    if(result===true){
      this.successEvent.emit();
    }else if(result === false) {
      this.dbFailed = true;
    }

  }
}
