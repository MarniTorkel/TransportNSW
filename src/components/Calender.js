import { useState } from "react";
import moment from "moment"
import generateCalender from "./generateCalender";
import { getMonthYear, weekdayshort } from "./moment-util"

const Calender = () => {   
    // Get today's date and save it to selectedDate  
    const [selectedDate, setSelectedDate] = useState(moment().toDate());
    const weekdayshortname = weekdayshort.map((day, key) => {
        return (
            <th key={key}>{day}</th>
        )      
    })

    const rows = generateCalender(selectedDate);
    console.log(rows);
    const calenderRows = rows.map((day, key) => {
            return (
                <tr key={key}>{day}</tr>
            )      
    })

    return (
        <>
            <h3>{getMonthYear(selectedDate)}</h3>
           
            <table className="calender-day">
                <thead>
                    <tr>{weekdayshortname}</tr>
                </thead>
                <tbody>
                    {calenderRows}  
                </tbody>     
            </table>            
        </>
    )
}

export default Calender
