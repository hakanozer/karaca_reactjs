import { createContext } from "react";

export interface IData {
    name:string,
    age:number
}
export const item:IData = {
    name: "Erkan",
    age: 40
}

export const objContext = {
    itemVal: item,
    setItem: ( itm: IData ) => { objContext.itemVal = itm }
}


export const DataContext = createContext(objContext)