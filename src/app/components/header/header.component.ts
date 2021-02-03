import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userStatus } from 'src/app/shared/user/user-status.interface';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public greetings : string;

  @Input('user') user : userStatus;
  @Input ('loginStatus') loginStatus : boolean;

  @Output() logOuteEvent = new EventEmitter();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.setGreetingth
  }
  setGreetingth() : string {
    if(this.loginStatus) {
      return 'Hello, ' +  this.userService.getFullName();
    }else{
      return '';
    }
  }

  logout() {
    this.userService.logOut();
    this.logOuteEvent.emit();
  }

}
