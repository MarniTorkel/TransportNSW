import { 
    TRANSPORT_LIST_REQUEST,
    TRANSPORT_LIST_SUCCESS,
    TRANSPORT_LIST_FAIL
} from "../constants/transportConstants"


export const transportListReducer = (state={ transport: []}, action) => {
    switch (action.type) {
        case TRANSPORT_LIST_REQUEST:
            return { loading: true, transport: [] }
        case TRANSPORT_LIST_SUCCESS:
            return { loading: false, transport: action.payload} 
        case TRANSPORT_LIST_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state    
    }
}

