import { Component } from '@angular/core';
import { FormatMSPipe } from './pipes/format-ms.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-pulse';

  tasks = new Map<string, number>()
  lastTaskTime = -1;

  logTask (name, now) {
    var outputElem = document.getElementById('outputTask');
    outputElem.innerText = (new Date()).toString() + '\t ' + name + '\n' + outputElem.innerText;
  }

  updateTotals (name, duration): void {
    if (this.tasks.has(name)) {
      this.tasks.set(name, this.tasks.get(name) + duration)
    } else {
      this.tasks.set(name, duration)
    }
    console.log(this.tasks)
  }

  submitTask (name): void {
    var now = (new Date()).getTime();
    var duration = now - (this.lastTaskTime == -1 ? now : this.lastTaskTime);
    this.lastTaskTime = now;
    this.logTask(name, now);
    this.updateTotals(name, duration);
  }

  enterPressed (ev: KeyboardEvent): void {
    const inputElem = ev.srcElement as HTMLInputElement
    this.submitTask(inputElem.value);
    inputElem.value = '';
  }
}
