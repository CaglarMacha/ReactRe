import * as actionTypes from "../actions/actionsTypes"
import initialState from "./initialState"
import currentCategory from "./initialState"

export default function  changeCategoryReducer (state=initialState.currentCategory, action) {

    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:           
            return action.payload;
        default:
             return state;
    }
    
}