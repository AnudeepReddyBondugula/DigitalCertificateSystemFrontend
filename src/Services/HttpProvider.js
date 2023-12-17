const constants = import.meta.env;

export const sendRequest = async (path, method, body, headerOptions) => {
    const request = {
        method,
        body 
    }
    if (headerOptions){{
        request.headers = headerOptions;
    }}
    const url = constants.VITE_BACKEND_URL + path;
    const response = await fetch(url, request);
    const responseBody = await response.json();
    const status = response.status;
    return {status, responseBody}
};