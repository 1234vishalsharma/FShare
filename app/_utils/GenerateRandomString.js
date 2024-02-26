
export const GenerateRandomString=()=>{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let res = ""
    for(let i=0;i<6;i++){
        res += characters.charAt(Math.floor(Math.random()*characters.length)); 
    }
    return res;
}