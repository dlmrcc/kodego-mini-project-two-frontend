import { serverRoutes } from "../const";

export const RecipeAPI = (requestRecipe) => {
    const url = serverRoutes.Recipe + `/` + requestRecipe;
    const requestOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(url, requestOptions);
}



// save the favorate recipe
export const SaveFaveRecipeAPI = (email, faveRecipe) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "email": email,
        "faveRecipe": faveRecipe,
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.FaveRecipe, requestOptions)
}


// retrieve the favorate recipe
export const RetrieveFaveRecipeAPI = (email) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "email": email,
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.RetrieveFaveRecipe, requestOptions)
}

// delete fave recipe
export const DeleteFaveRecipeAPI = (email, faveRecipe) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "email": email,
        "faveRecipe": faveRecipe,
    });
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.DeleteFaveRecipe, requestOptions)
}







// export const RecipeAPI = (requestRecipe) => {
//     const url = `https://api.edamam.com/search?q=${requestRecipe}&app_id=d007afe7&app_key=5701b572564cca4a0fc6f4d93f3e54a7`;
//     const requestOptions = {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json"
//         }
//     };
//     return fetch(url, requestOptions);
// }