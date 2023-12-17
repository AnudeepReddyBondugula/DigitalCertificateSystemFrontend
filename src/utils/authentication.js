const constants = import.meta.env;

const verifyToken = async () => {
    if (sessionStorage.getItem("JWToken")){
        const response = await fetch(constants.VITE_BACKEND_URL + '/dashboard', {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : sessionStorage.getItem("JWToken")
            }
        })

        const {message} = await response.json();

        return message !== "Wrong Token";
    }
}

const loginAccount = async (username, password) => {
    const response = await fetch(constants.VITE_BACKEND_URL + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    const resBody = await response.json();

    if (response.status >= 400) throw Error(response.status + " " + resBody.message);
    else{
        const { jwtoken, role } = resBody;
        sessionStorage.setItem("JWToken", "Bearer " + jwtoken);
        sessionStorage.setItem("role", role);
    }
}

const logoutAccount = (navigate) => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("JWToken");
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



export {verifyToken, createAccount, loginAccount, logoutAccount};