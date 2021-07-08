import moment from "moment";

// Format month and year
export const getMonthYear = (date) => moment(date).format("MMM YYYY");
// Get short versions days in a week
export const weekdayshort = moment.weekdaysShort();
//Get selectedDate weekday 
export const firstDay = (date) => moment(date).startOf("month").format("d");
// Get numerical day of the month
export const dayofMonth = (date) => moment(date).date();
// Get the number of days in a month for selectedDate
export const daysInMonth = (date) => moment(date).daysInMonth();
