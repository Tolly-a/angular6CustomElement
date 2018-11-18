import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div>This is an alert. {{ message }}
    <button (click)="showAlert()">Show Alert</button></div>
  `,

  styles: [
    `
      div {
        border: 1px solid black;
        background: salmon;
        padding: 10px;
        font-family: sans-serif;
        color: white;
      }
    `
  ]
})
export class AlertComponent {
  @Input() message: string;

  showAlert() {
    alert('waw');
  }
}
