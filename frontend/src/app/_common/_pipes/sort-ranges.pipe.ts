import { Pipe, PipeTransform } from '@angular/core';
import { time } from '../util';
import { TimeSlots } from '../_interfaces/timeslot.interface';

@Pipe({
  name: 'sortRanges'
})
export class SortRangesPipe implements PipeTransform {
  transform(slots: TimeSlots[]): TimeSlots[] {
    if (!(!!slots)) return []
    return slots.sort((a, b) => {
      return time(a.startAt).diff(time(b.startAt))
    })
  }
}
