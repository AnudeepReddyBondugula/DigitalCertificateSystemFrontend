import { sendRequest } from "./src/Services/HttpProvider.js";

async function main(){
    const {status, responseBody} = await sendRequest("/login", "POST", JSON.stringify({
        username : "anudeepreddybondugula@gmail.com",
        password : 123
    }))

    console.log(status)
    console.log(responseBody)
}

main();