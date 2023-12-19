const constants = import.meta.env;

export const sendRequest = async (path, method, body, headerOptions) => {
    const defaultHeaderOptions = {
        "Content-Type" : "application/json",
        "Authorization" : sessionStorage.getItem("jwToken")
    }
    const request = {
        method,
        body 
    }
    for(var key in headerOptions) {
        defaultHeaderOptions[key] = headerOptions[key]
    }
    request.headers = defaultHeaderOptions;
    const url = constants.VITE_BACKEND_URL + path;
    const response = await fetch(url, request);
    const responseBody = await response.json();
    const status = response.status;
    return {status, responseBody}
};

export const sendFormDataRequest = async (path, method, formData, headerOptions={}) => {
    const request = {
        method,
        body : formData,
        headers : {...headerOptions, "Authorization" : sessionStorage.getItem("jwToken")}
    }
    const url = constants.VITE_BACKEND_URL + path;
    const response = await fetch(url, request);
    const responseBody = await response.json();
    const status = response.status;
    return {status, responseBody};
}