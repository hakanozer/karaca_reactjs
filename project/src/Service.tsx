import axios from "axios"
import { IOrders } from "./models/IOrders"
import { IProduct } from "./models/IProduct"
import { IUser } from "./models/IUser"
import { IUserUpdate } from "./models/IUserUpdate"

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


export const profileUpdate = ( 
    name:string, 
    surname: string, 
    email: string, 
    phone: string, 
    password: string, 
    userid: string ) => {

    const url = "userSettings.php"
    const sendParams = {
        userName: name,
        userSurname: surname,
        userMail: email,
        userPhone: phone,
        userPass: password,
        userId: userid
    }
    return config.get<IUserUpdate>(url, { params: sendParams });
} 


// all Orders
export const allOrders = ( musterilerID: string ) => {
    const sendParams = {
        musterilerID: musterilerID
    }
    const url = 'orderList.php'
    return config.get<IOrders>(url, { params: sendParams } )
}

// add basket
export const addBasketOrder = ( customerId: string, productId: string ) => {
    const sendParams = {
        customerId: customerId,
        productId: productId,
        html: productId
    }
    const url = 'orderForm.php'
    return config.get(url, { params: sendParams } )
}