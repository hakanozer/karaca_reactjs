import axios from "axios"
import { IUser } from "./models/IUser"

const baseURL = 'https://www.jsonbulut.com/json/'
const ref = '74430d47fa16b4c53c0fe59510752c70'

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