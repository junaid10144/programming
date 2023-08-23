import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class MyFirstService {

  messages: Array<any> = [];

  constructor() { this.init() }

  init(): void {
    this.insert({
      name: 'Ali',
      email: 'ali@mail.com',
      message: 'Hello world ALi'
    });
    this.insert({
      name: 'kamran',
      email: 'kamran@mail.com',
      message: 'Hello world Kamran'
    });
    this.insert({
      name: 'Bilal',
      email: 'bilal@mail.com',
      message: 'Hello world Bilal'
    })
  }

  insert(message: { name: string, email: string, message: string }): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1)
  }
}
