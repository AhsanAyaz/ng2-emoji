import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  listOfMessages = [
      'Hello :smile:',
      'How r u? :bowtie:'
  ];
  constructor() { }
  addMessage(message: string) {
    this.listOfMessages.push(message);
  }
  getMessages() {
    return this.listOfMessages;
  }

}
