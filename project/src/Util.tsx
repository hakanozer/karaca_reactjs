import CryptoJS from 'crypto-js'
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