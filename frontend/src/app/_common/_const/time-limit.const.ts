import { time } from '../util';

export const TIME_LIMIT = {
    morning: {
        start: time("09:00"),
        end: time("12:00")
    },
    evening: {
        start: time("17:00"),
        end: time("21:00")
    }
}