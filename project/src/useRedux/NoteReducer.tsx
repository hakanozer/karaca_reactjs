import { ENote } from "./ENote";
import { INote } from "./INote";

export interface NoteAction {
    type: ENote,
    payload: INote
}

export const noteReducer = ( state: INote[] = dummyData(), action: NoteAction ) => {
    switch (action.type) {
        case ENote.NOTE_ADD:
            let endNid = 1;
            if ( state.length > 0 ) {
                const endNote = state[ state.length - 1 ]
                endNid = endNote.nid + 1
            }
            const nowNote = action.payload
            nowNote.nid = endNid
            return [ ...state, nowNote ]
        case ENote.NOTE_DELETE:
            const index = state.findIndex( item => item.nid === action.payload.nid )
            const newArr = Object.assign([], state)
            newArr.splice( index, 1 )
            return newArr
        case ENote.NOTE_LIST:
            return state
        default:
            return state;
    }
}

const dummyData = () : INote[] => {
    const arr:INote[] = [
        { nid: 1, title: "Toplantı", detail: "Toplantı Detay" },
        { nid: 2, title: "Kahvaltı", detail: "Kahvaltı Detay" },
        { nid: 3, title: "Yemek", detail: "Yemek Detay" },
    ]
    return arr
} 
