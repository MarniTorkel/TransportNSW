import moment from "moment"

const Item = ({item, onFilter}) => {
    return (
        <div>   
            <p>Priority: <b>{item.priority}</b></p>
            <p>{item.subtitle}</p> 
            <p>{moment(item.timestamps.availability.from).utc().format("DD-MMM-YYYY")} to {moment(item.timestamps.availability.to).utc().format("DD-MMM-YYYY")}</p>

        </div>
    )
}

export default Item
