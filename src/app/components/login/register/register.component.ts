import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/shared/user/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public tempPassword : string = '';
  public valid : boolean = true;
  public alreadyExist : boolean = false;
  public newUser : user = {
    name : '',
    surname : '',
    email : '',
    password : '',
    login : '',
    id : null,
    sex : 'male'


  };

  @Output() registerEvent = new EventEmitter();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }
  check(form) {
    if(form.valid === true){
      let result : boolean = this.userService.checkUniqueness(this.newUser);
      this.alreadyExist = !result;
      if(result){
        this.registerEvent.emit();
      }
    }else {
      this.valid = false;
    }
  }

}
