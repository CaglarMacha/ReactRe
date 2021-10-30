import * as actionTypes from "../actions/actionsTypes"
import initialState from "./initialState"
export default function  changeCategoryReducer (state=initialState.currentCategory, action) {

    switch (action.type) {
        case action.currentCategory:           
            return action.payload;
        default:
             return state;
    }
    
}