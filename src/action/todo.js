import { ADD_TODO } from './actionTypes';

export const addTodo=(text) => {
    return {
        type: ADD_TODO,
         // payload: text
        text
    }
};