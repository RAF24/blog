import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/Post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  @Input() postTab : Post [];

  constructor() { }

  ngOnInit() {
  }

}