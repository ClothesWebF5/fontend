import { productForUser } from "./productForUser.reducer";
import { cart } from "./addCart.reducer";
import { infor } from "./infor.reducer";
import {combineReducers} from "redux";
const allReducer = combineReducers({
    infor,
    cart,
    productForUser
});

export default allReducer;