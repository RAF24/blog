import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string = "";
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  datePost : Date;

  constructor() { 
    this.datePost = new Date();
  }


  getDatePost(){
    return this.datePost;
  }

  ngOnInit() {
  }

  onLoveIt(){
    return this.loveIts++;
  }

  onDontLoveIt(){
    return this.loveIts--;
  }


  getColor(){
    if(this.loveIts < 0){
      return 'red';
    }else if(this.loveIts > 0){
      return 'green';
    }else {
      return 'black';
    } 
    
  }

}
