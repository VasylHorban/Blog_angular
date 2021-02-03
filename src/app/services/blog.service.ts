import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { blogObject } from '../shared/blog/blog-object.interface';
import { blog } from '../shared/blog/blog.interface';
import { LocalhostService } from './localhost.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs : blogObject[];

  constructor(private localStorage: LocalhostService) { 

   }

   getBlogs() : blogObject[] {
    return this.blogs;

   }

   refresh() : void {
    this.localStorage.refresh('blogs', JSON.stringify(this.blogs))
   }

   setBlogs() :void {
    this.blogs = JSON.parse(this.localStorage.get('blogs'))
   }

   setDateFormat(date : Date) : string {
    return formatDate(date , 'HH:mm dd/MM/yyyy', 'en-US')
   }
   updateBlog(data : blogObject, index : number ) : void {
    this.blogs[index] = data;
    this.refresh();
   }

   removeBlog(index : number)  : void{
     this.blogs.splice(index, 1);
     this.refresh();

   }

   deleteAll() : void {
     this.blogs = [] as blogObject[];
     this.refresh();
   }

   add(data : blog) : void {
    let dateNow : string = this.setDateFormat(new Date());

    let newBlog : blogObject = {
      data : {
        name : data.name,
        text : data.text,
        date : dateNow
      }
    }
    
    this.blogs.unshift(newBlog)
    this.refresh();

    
   }

}
