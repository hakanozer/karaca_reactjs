import { resolve } from "path";

const fnc1 = () => {
    return new Promise( (resolve, reject) =>
        setTimeout(() => {
            console.log( "fnc1 Call" )
            resolve(true)
        }, 2000)
    )
}

const fnc2 = () => {
    return new Promise( (resolve, reject) =>
        setTimeout(() => {
            console.log( "fnc2 Call" )
            resolve(true)
        }, 3000)
    )
}

const fnc3 = () => {
    return new Promise( (resolve, reject) =>
        setTimeout(() => {
            console.log( "fnc3 Call" )
            resolve(true)
        }, 1000)
    )
}

export const allFnc = () => {
    fnc1().then( res1 => {
        fnc2().then( res2 => {
            fnc3().then( re3 => {
                console.log( "All Fnc Call" )
            })
        })
    })
}