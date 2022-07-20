import CryptoJS from 'crypto-js'
import { Bilgiler } from './models/IUser';
const envKey = process.env.REACT_APP_SECRET_KEY
const key = envKey ? envKey : 'app123'

export const encrypt = ( plainText:string ) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, key).toString();
    return cipherText
}

export const decrypt = (cipherText:string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, key);
    const plainText = bytes.toString(CryptoJS.enc.Utf8);
    return plainText
}

export const control = () : Bilgiler | null => {

    const stLocal = localStorage.getItem('user')
    if ( stLocal ) {
        sessionStorage.setItem('user', stLocal)
    }

    const stSession = sessionStorage.getItem("user")
    if ( stSession ) {
       try {
           const stPlain = decrypt( stSession )
           const user:Bilgiler = JSON.parse( stPlain )
           return user;
       } catch (error) {
           sessionStorage.removeItem("user")
           return null
       }
    }
    return null
  }