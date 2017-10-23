import { Component, OnInit } from '@angular/core';
import {Ng2EmojiService} from 'ng2-emoji';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myMessageString: String = '';
  emojis: Array<string>;
  constructor() {
    this.emojis = Ng2EmojiService.emojis;
  }
  ngOnInit() {
    this.myMessageString = 'Hello, how are you? :smile: It was fun at the bowling game the other day :joy:';
  }

}
