import { combineReducers, createStore } from "redux";
import { noteReducer } from "./NoteReducer";

const combine = combineReducers({
    noteReducer
})


export type StateType = ReturnType<typeof combine >

export const store = createStore(combine)

