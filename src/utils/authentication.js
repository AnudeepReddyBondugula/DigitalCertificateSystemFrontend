const constants = import.meta.env;
import { sendRequest } from "../Services/HttpProvider";

const verifyToken = async (token) => {
    const {status, responseBody} = await sendRequest("/dashboard", "GET", undefined, {"Authorization" : token});
    if ((status >= 400)){
        sessionStorage.removeItem("jwToken");
        sessionStorage.removeItem("role");
        return false;
    }
    else{
        sessionStorage.setItem("role", responseBody.role);
        return true;
    }
}

const verifyAndRedirect = async (navigate, redirectSuccessPath, redirectFailedPath) => {
    if (sessionStorage.getItem("jwToken") && await verifyToken(sessionStorage.getItem("jwToken"))){
        if (redirectSuccessPath) navigate(redirectSuccessPath);
    } else{
        if (redirectFailedPath) navigate(redirectFailedPath);
    }
    
}

const loginAccount = async (username, password) => {
    const {status, responseBody} = await sendRequest("/login", "POST", JSON.stringify({username, password}));

    if (status >= 400){
        return {
            returnValue : false,
            error : status + " " + responseBody.error
        }
    }
    else{
        const { jwtoken, role } = responseBody;
        sessionStorage.setItem("jwToken", jwtoken);
        sessionStorage.setItem("role", role);
        return {
            returnValue : true,
            message : status + " " + responseBody.message
        }
    }
}

const logoutAccount = (navigate) => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("jwToken");
    navigate("/");
}

const createAccount = async ({
    username,
    password,
    retypePassword,
    role,
    aadharNumber,
    organizationName,
    fullName
}) => {
    if (password !== retypePassword){
        throw Error("Passwords Don't Match!");
    }
    let body = {
        username,
        password,
        fullName,
        role
    }
    if (role == 'user'){
        body.aadharNumber = aadharNumber;
    }
    else if (role == 'organization'){
        body.organizationName = organizationName;
    }
    else throw Error("Unknown Role Specified!");

    const response = await fetch(constants.VITE_BACKEND_URL + "/signup", {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(body)
    });
    const resBody = await response.json();

    if (response.status >= 400) throw Error(resBody.message);

}



export {verifyToken, createAccount, loginAccount, logoutAccount, verifyAndRedirect};