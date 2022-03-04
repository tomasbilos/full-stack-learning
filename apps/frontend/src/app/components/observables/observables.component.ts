import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'full-stack-learning-observables',
  templateUrl: './observables.component.html',
})
export class ObservablesComponent implements OnInit {
  subject = new Subject();

  nextValue = '';
  values: string[] = ['1', '2'];

  ngOnInit(): void {
    this.subject.subscribe((x) => {
      console.log('Subject', x);
    });
  }

  pushNextValue() {
    if (this.nextValue) {
      this.values.push(this.nextValue);

      this.subject.next(this.nextValue);

      this.nextValue = '';
    }
  }
}
