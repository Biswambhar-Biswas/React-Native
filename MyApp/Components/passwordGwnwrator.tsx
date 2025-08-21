import React, { useState } from "react";
import {
    View,
    Text
} from "react-native"

//Form Validation
import * as Yup from 'yup'

const passwordSchima = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, "Should be min of 4 charector")
        .max(16, "Should be max of 16")
        .required("Length is required")
})




export default function PasswordGenerator() {

    const [password, setPassword] = useState('')
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)
    const [lowercase, setLowercase] = useState(true)
    const [uppercase, setUppercase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setStybols] = useState(false)


    const generatePassword = (passwordLength: number) => {
        let charectorList = '';
        const upperCaseChars = 'ABCDEFGHIJKLMNIOPQRSTUVWXYZ'
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
        const specialChars = '!@#$%^&*()_+'
        const digitChars = '1234567890'

        if (uppercase) {
            charectorList += upperCaseChars
        }
        if (lowercase) {
            charectorList += lowerCaseChars
        }
        if (numbers) {
            charectorList += digitChars
        }
        if (symbols) {
            charectorList += specialChars
        }

        const passwordResult = createPassword(charectorList, passwordLength)

        setPassword(passwordResult)
        setIsPasswordGenerated(true)
    }

    const createPassword = (characters: string, passwordLength: number) => {
        let result = ''
        for (let i = 0; i < passwordLength; i++) {
            const charactorIndex = Math.round(Math.random() * characters.length)
            result += characters.charAt(charactorIndex)
        }
        return result;
    }

    const resetPasswordState = ()=>{
        setPassword('')
        setIsPasswordGenerated(false)
        setLowercase(true)
        setUppercase(false)
        setNumbers(false)
        setStybols(false)
    }



    return ({})
}