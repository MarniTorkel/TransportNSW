import Item from "./Item"
import moment from "moment"

const Details = ({current, onFilter, priority}) => {
    // Get current month and year
    const currentMonth = moment(moment().toDate()).format("MM-YYYY")
    // Filter current data to current month and year
    let filterCurrData = current.filter(c => 
        moment(c.timestamps.availability.from).utc().format("MM-YYYY") === currentMonth);

    // If the priority is set, filter based on the priority
    if (priority) {
        filterCurrData = filterCurrData.filter(d => d.priority === Object.values(priority).toString()) 
    }
    
    return (
        <>
            <h5>Details</h5>
            {filterCurrData.map((item, key) => (
                 <Item key={key} item={item} onFilter={onFilter} />
             ))}
        </>
    )
}

export default Details
