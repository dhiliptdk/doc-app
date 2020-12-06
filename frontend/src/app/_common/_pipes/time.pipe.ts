import { Pipe, PipeTransform } from '@angular/core';
import { Moment } from 'moment';
import { time } from '../util';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Moment): unknown {
    if(typeof value=="string") value=time(value)
    if (!value) return ''
    if (value.minutes() == 0) {
      return value.format("H[Hrs]")
    }
    else {
      return value.format("H:mm[Hrs]")
    }
  }
}
