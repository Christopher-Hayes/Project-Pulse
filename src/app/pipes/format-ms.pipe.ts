import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMS'
})
export class FormatMSPipe implements PipeTransform {

  transform(ms: number): string {
    let sec = Math.floor(ms / 1000);
    let mins = Math.floor(sec / 60);
    let hrs = Math.floor(mins / 60);
    sec %= 60;
    mins %= 60;
    hrs %= 24;

    return `${hrs} hrs ${mins} min ${sec} sec`
  }

}
