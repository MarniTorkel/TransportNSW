import axios from "axios"
import { 
    TRANSPORT_LIST_REQUEST,
    TRANSPORT_LIST_SUCCESS,
    TRANSPORT_LIST_FAIL
    
} from "../constants/transportConstants"

export const listTransport = () => async (dispatch) => {
    try {
        dispatch({type: TRANSPORT_LIST_REQUEST})

        const {data} = await axios.get('http://localhost:5000/api/')

        dispatch({
            type: TRANSPORT_LIST_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRANSPORT_LIST_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
}
