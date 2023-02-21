import React, { useState, useEffect } from 'react';
import { RecipeAPI } from '../utils/fetch/recipeFetch';
import ViewRecipe from './ViewRecipe'

function FaveRecipeComponent({ searchValue }) {

    const [results, setResults] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        let url = new URL(window.location.href);
       let searchValue = url.searchParams.get("search");
       console.log(searchValue)
        if (searchValue !== '')
         {
            RecipeAPI(searchValue)
            .then(response => response.json())
                .then(data => {
                 
                    setResults(data.hits);
                })
                .catch(error => console.error(error));

        }
    }, []);

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
    }

 

    return (
        <div>
            {selectedRecipe && <ViewRecipe recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
            
            <p style={{ textAlign: 'center' }} >{results.length} result(s) {searchValue}</p>
            <div className="row row-cols-1 row-cols-md-4 g-4 font-style m-4">
                {results.map((result, index) => (
                    <div className="col main-card" key={index} onClick={() => handleRecipeClick(result.recipe)}>
                        <div className="card h-100 bg-dark">
                            <img src={result.recipe.image} className="card-img-top" alt={result.recipe.label} />
                            <div className="card-body">
                                <h6 className="card-title text-white">{result.recipe.label}</h6>
                                 <p className="card-text text-white"><i>{result.recipe.ingredients.length}</i> Ingredients</p>
                            </div>
                            <div className="card-footer-sm bg-warning">
                                <p className="card-text text-white"><i>{result.recipe.uri}</i> Ingredients</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaveRecipeComponent;
