import axios from "axios"
import { IProduct } from "./models/IProduct"
import { IUser } from "./models/IUser"

const baseURL = 'https://www.jsonbulut.com/json/'
const ref = 'd1becef32825e5c8b0fc1b096230400b'

const config = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    params: { ref: ref },
    //headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIXVCJ9TJVr7E20RMHrHDcEfxjoYZgeFONFh7HgQ" }
})

// user login
export const userLogin = ( email:string, password: string ) => {
    const sendParams = {
        userEmail: email,
        userPass: password,
        face: 'no'
    }
    const url = 'userLogin.php'
    return config.get<IUser>(url, { params: sendParams } )
}


// all product
export const allProduct = () => {
    const sendParams = {
        start: 0
    }
    const url = 'product.php'
    return config.get<IProduct>(url, { params: sendParams } )
}