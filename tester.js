import { useNavigate } from "react-router-dom";

function myError(msg = "") {
    // this.name = "MyError"
    // this.message = msg;
}

myError.prototype = Error.prototype;


function main() {
    try{
        const navigate = useNavigate();
        throw myError("Hello WOrld!");
    } catch (err){
        if (err instanceof myError){
            console.log("This is my Error");
            console.log(err)
        } else{
            console.log("Not my Error")
        }
    }
}

main();