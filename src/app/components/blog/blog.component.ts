import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { blogObject } from 'src/app/shared/blog/blog-object.interface';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public isEmpty : boolean = false;
  public blogs :  blogObject[] =  []

  @Input ('allRights') allRights : boolean;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs() : void {
    let result = this.blogService.getBlogs();
    if(result.length > 0) {
      this.blogs = result;
      this.isEmpty = false;
    }else {
      this.blogs = [] as blogObject[];
      this.isEmpty = true;
    }
  }



}
