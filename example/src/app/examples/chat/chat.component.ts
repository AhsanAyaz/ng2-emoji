import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  myMessageString: string = ':smile:';
  messages: Array<string>;
  constructor(private chat: ChatService) { }
  ngOnInit() {
    this.messages = this.chat.getMessages();
  }

  sendMessage(f: NgForm) {
    const value = f.value;
    console.log(value.message);
    this.messages.push(value.message);
    f.reset();
  }

}
