import { serverRoutes } from "../const";

export const SignUpAPI = (email, password, lastname, firstname) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "email": email,
        "password": password,
        "lastname": lastname,
        "firstname": firstname
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.SignUp, requestOptions)
}



export const UpdatePasswordAPI = (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "email": email,
        "password": password,

    });
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.UpdateUserPassword, requestOptions)
}