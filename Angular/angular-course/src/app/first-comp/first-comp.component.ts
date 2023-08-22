import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;

  messages: Array<any> = []

  onSubmit(): void {
    this.isSubmitted = true
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.message
    })

    console.log(this.messages)
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1)
  }

}
