import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.css']
})
export class DeleteAllComponent implements OnInit {
  public show : boolean = false;

  @Output() deleteAllEvent = new EventEmitter();

  constructor( private blogService : BlogService) { }

  ngOnInit(): void {
  }
  delete() : void {
    this.blogService.deleteAll();
    this.deleteAllEvent.emit();
    this.show = false;
  }
  cansel() : void {
    this.show = false;
  }

  showWindow() : void {
    this.show = true;
  }



}
