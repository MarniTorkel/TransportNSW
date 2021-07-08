import React from 'react'
import { firstDay, daysInMonth, dayofMonth } from './moment-util';

const generateCalender = ({date}) => {
    let slots = [];
    // Set empty slots before the first day
    for (let i = 0; i < firstDay(date); i++) {
        slots.push(<td key={daysInMonth(date)+ i + 2} className="calender-day empty">{""}</td>);
    }
    // Set all the dates on the slot
    for (let d = 1; d <= daysInMonth(date); d++) {
        let currDay = d === dayofMonth(date) ? "today": "";
        slots.push(<td key={d} className={`calender-day ${currDay}`}>{d}</td>);
    }
    let rows = [];
    let cells = [];
    console.log(slots);
    slots.forEach((row,i) => {
        if (i % 7 !== 0) {  // If index not equal 7, ie the same week
            cells.push(row);
        } else {
            ;
            if (i !== 0) rows.push(cells); // If reach next week
            cells = [];
            cells.push(row);
        }
        if (i === slots.length -1) { // Last cell
            rows.push(cells);
        }
    })
    return rows;
}

export default generateCalender
