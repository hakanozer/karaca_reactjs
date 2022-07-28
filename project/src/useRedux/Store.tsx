import { combineReducers, createStore } from "redux";
import { noteReducer } from "./NoteReducer";
import { orderReducer } from './OrderReducer'

const combine = combineReducers({
    noteReducer, orderReducer
})


export type StateType = ReturnType<typeof combine >

export const store = createStore(combine)

