import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/Post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() post: Post;
 

  datePost : Date;

  constructor() { 
   this.datePost = new Date();
  }
  

  ngOnInit() {
  }


  getDatePost(){
    return this.post.created_at = this.datePost;
  }


  onLoveIt(){
    return this.post.loveIts++;
  }

  onDontLoveIt(){
    return this.post.loveIts--;
  }


  getColor(){
    if(this.post.loveIts < 0){
      return 'red';
    }else if(this.post.loveIts > 0){
      return 'green';
    }else {
      return 'black';
    } 
    
  }



  

}
