import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { DeleteFaveRecipeAPI, SaveFaveRecipeAPI } from '../utils/fetch/recipeFetch';

function ViewRecipe({ recipe, onClose }) {
    const [faveButton, setFaveButton] = useState("Add as Favorite");
    const [existingData, setExistingData] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user.email;

    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem('FaveRecipe')) || [];
        setExistingData(existingData);
        const recipeExists = existingData.some((FaveRecipe) => FaveRecipe.faveRecipe === recipe.uri);
        setFaveButton(recipeExists ? "Remove as Favorite" : "Add as Favorite");
    }, [recipe.uri]);
    
    
    const handleSaveRecipe = () => {
        const addNew = {faveRecipe: recipe.uri};
        const newData = [...existingData, addNew];
        localStorage.setItem('FaveRecipe', JSON.stringify(newData));
        setExistingData(newData);
        setFaveButton("Remove as Favorite");
          
    SaveFaveRecipeAPI(email, recipe.uri)
    .then((result)=>{
        return result.json()
    })
    .then((result)=>{
     
    //  localStorage.setItem('FaveRecipe', newFaveRecipe);
     console.log('result: ', recipe.uri)
     
        })
        .catch(error=>{
            console.log('error: ', error)
        })
    }

    const handleRemoveRecipe = () => {
 //remove to local storage
const removeOld = recipe.uri;

console.log("exisiting recipe" ,existingData)
let index = existingData.findIndex(item => item.faveRecipe === removeOld);
console.log("index ",index)
if (index !== -1) {
    existingData.splice(index, 1);
    console.log(existingData)
}
localStorage.setItem('FaveRecipe', JSON.stringify(existingData));
console.log(localStorage)

DeleteFaveRecipeAPI(email,recipe.uri)
.then((result)=>{
    return result.json()
})
.then((result)=>{
 
//  localStorage.setItem('FaveRecipe', newFaveRecipe);
 console.log('Result : ', email, +" "+recipe.uri)
 
    })
    .catch(error=>{
        console.log('error: ', error)
    })
        setFaveButton("Add as Favorite");
    }


    return (
        <Modal show={true} onHide={onClose} size="lg" centered>
            <Modal.Header closeButton className="bg-light">
                <Modal.Title className="text-dark fw-bold">{recipe.label}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img src={recipe.image} alt={recipe.label} className="w-100 mb-3 border border-dark" />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h3>Ingredients:</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="bg-dark">
                <Button id="addFavorate" className="btn btn-warning bg-gradient btn-sm btn-block border-radius"  variant="warning" onClick={faveButton==="Add as Favorite" ? handleSaveRecipe : handleRemoveRecipe}>{faveButton}</Button>
                <Button className="btn btn-warning bg-gradient btn-sm btn-block border-radius" variant="primary" onClick={() => window.open(recipe.url)}>Go to recipe</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ViewRecipe;
