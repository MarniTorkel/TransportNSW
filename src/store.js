import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { 
    transportListReducer 
} from "./reducers/transportReducers"

const reducer = combineReducers({
    transportList: transportListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store