import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';

import { BlogService } from 'src/app/services/blog.service';
import { blogObject } from 'src/app/shared/blog/blog-object.interface';
import { blog } from 'src/app/shared/blog/blog.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public isEdit : boolean = false;
  @Input('blog') blog : blogObject;
  @Input('index') index : number;
  @Input('allRights') allRights : boolean;
  @Output() changeEvent  = new EventEmitter();
  constructor( private blogService : BlogService) { }



  ngOnInit(): void {
  }

  edit():void {
    this.isEdit = true;
  }
  save(data : blog): void {
     const updateBlog : blogObject = {data};
    this.blogService.updateBlog(updateBlog, this.index);
    this.changeEvent.emit();
    this.isEdit = false;
  }
  remove() : void {
    this.blogService.removeBlog(this.index);
    this.changeEvent.emit();
    this.isEdit = false;

  }

}
