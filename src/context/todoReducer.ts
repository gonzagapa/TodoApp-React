import type { Todo } from "../data";

type ActionType = "[TODO] add" | "[TODO] edit" | "[TODO] delete";

export interface Action {type:ActionType, payload?:Todo}

export const todoReducer = (state:Todo[], action:Action) : Todo[] =>{

    switch (action.type) {
        case "[TODO] add":
            return [...state, action.payload!]
        
        case "[TODO] edit":
            const todoEditId = action.payload?.id;

            return state.map(todo =>{
                if(todo.id === todoEditId) {
                    return action.payload!
                }
                return todo;
            });

        case "[TODO] delete":
            const todoDeletedId = action.payload?.id;
            return state.filter( todo => todo.id !== todoDeletedId );


        default:
            return state;
    }
}