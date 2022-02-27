import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import { getAllPizzaReducer,addPizzaReducer,getPizzaByIdReducer,updatePizzaByIdReducer } from "./reducers/pizzaReducer"
import { cartReducer } from "./reducers/cartReducer"
import {registerUserReducer,loginUserReducer,getAllUserReducer} from "./reducers/userReducer"
import { placeOrderReducer,getUserOrdersReducer,allUserOrdersReducer } from "./reducers/orderReducer";

const currentUser = localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem('currentUser')):null
const rootReducers  = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addPizzaReducer:addPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    updatePizzaByIdReducer:updatePizzaByIdReducer,
    allUserOrdersReducer:allUserOrdersReducer,
    getAllUserReducer:getAllUserReducer,
}) 
const cartItems = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[]
const intialState={
    cartReducer:{
        cartItems:cartItems
    },
    loginUserReducer:{
        currentUser:currentUser,
    }
}
const middleware = [thunk];
const store = createStore(
    rootReducers,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))

);
export default store;
