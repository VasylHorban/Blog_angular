import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { blog } from 'src/app/shared/blog/blog.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public valid : boolean = false;
  public newPost : blog = {
    name : '',
    text : ''
  }

  @Output() addEvent = new EventEmitter();
  constructor( private blogService : BlogService) { }

  ngOnInit(): void {
  }

  add() : void {
    this.blogService.add(this.newPost);
    this.addEvent.emit();
    this.refresh();

  }

  refresh() : void {
    this.valid = true;
    this.newPost.name = '';
    this.newPost.text = '';
  }

}
