import {ADD_TODO} from "../action/actionTypes";

export default function(state={}, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: action.text
            };
        default:
            return state;
    }
}
