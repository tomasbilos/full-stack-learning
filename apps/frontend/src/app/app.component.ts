import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'full-stack-learning-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {}

  navigate(commands: any[]) {
    this.router.navigate(commands);
  }
}
