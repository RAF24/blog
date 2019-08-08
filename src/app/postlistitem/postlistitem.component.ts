import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() title: string = "";
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  datePost : Date;

  constructor() { 
    this.datePost = new Date();
  }
  

  ngOnInit() {
  }


  getDatePost(){
    return this.datePost;
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
