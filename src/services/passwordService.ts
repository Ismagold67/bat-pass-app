export default function generatePass(passLen: number){
    let password: string = ''
    let characters: string = 'Aa@$#123456789abcdefghiABCDEFGHIJ!'
    let passwordLength = passLen
    for (let index = 0; index < passwordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}