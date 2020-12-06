export interface TimeSlots {
    date: String,
    startAt: String,
    endAt: String,
    shift: "morning" | "evening"
    status: "available" | "booked"
}