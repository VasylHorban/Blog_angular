import { Component, OnInit } from '@angular/core';

import { userStatus} from './shared/user/user-status.interface';
import { UserService } from './services/user.service'
import { LocalhostService } from './services/localhost.service';
import { BlogService } from './services/blog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public user : userStatus;
  public loginStatus : boolean = false;
  public allRights : boolean;


  constructor(private userService : UserService, private localStorage : LocalhostService, private blogsService : BlogService) {}

  ngOnInit() : void {
    this.localStorage.setData();
    this.userService.getUser();
    this.blogsService.setBlogs();
  }
  getUser() : void {
    this.user = this.userService.getActiveUser();
    this.loginStatus = true;
    this.allRights = this.user.allRights;
  }

  logOuteUser() : void {
    this.user = {} as userStatus;
    this.loginStatus = false;
  }


}
