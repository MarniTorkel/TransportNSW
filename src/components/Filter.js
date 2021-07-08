import { useState } from "react";

const Filter = ({current, onFilter}) => {    
    const [priority,setPriority] = useState("");

    // If submit push the priority value to parent
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(priority)
        onFilter({ priority })  
    }

    // If value change, set the priority accordingly
    const onChangeValue = (e) => {
        console.log(e)
        setPriority(e.target.value)
    }

    // Extract unique priority
    const items = [...new Set(current.map(c => c.priority))];
    
    return (
        <>
        <h5>Filters</h5>
        <b>Priority:</b>
        <form onSubmit={onSubmit}>
            {items.map((item, key) => (
                <label className="label">
                    {item} 
                    <input key={key} value={item} type="checkbox" name="priority" onChange={onChangeValue} />
                </label>
             ))}
             <input type="submit" value="submit" />
        </form>
        
        </>
    )
}

export default Filter