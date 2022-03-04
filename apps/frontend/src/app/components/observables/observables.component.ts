import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

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

    const button = document.getElementById('ObservableButton');
    if (button) {
      console.log('Got button');
      const observable = fromEvent(button, 'click');
      observable.subscribe(() => console.log('Observable buton'));
    }
  }

  pushNextValue() {
    if (this.nextValue) {
      this.values.push(this.nextValue);

      this.subject.next(this.nextValue);

      this.nextValue = '';
    }
  }

  subscribeToButton() {
    return;
  }
}
