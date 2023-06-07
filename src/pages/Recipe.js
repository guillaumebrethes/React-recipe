//  === Import  ===;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

//  === Import : local  ===;
import '../styles/recipe.scss';
//  === Component ===;
const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const params = useParams();
  console.log('details => ', details);

  const fetchRecipeDetails = async () => {
    // const check = localStorage.getItem('details.extendedIngredients.name');
    // if (check) {
    // console.log('check => ', check);
    // setDetails(JSON.parse(check));
    // }
    // else {
    // params.name vient des routes Pages
    const recipes = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const recipesDetails = await recipes.json();
    // localStorage.setItem('details.extendedIngredients.name', JSON.stringify(recipesDetails));
    setDetails(recipesDetails);
    // }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [params.name]);

  return (
    <>
      <h2 className="recipe__h2">{details.title}</h2>
      <div className="recipe">
        <img className="recipe__img" src={details.image} alt={details.title} />
        <div className="recipe__buttons">
          <button
            type="button"
            className={activeTab === 'instructions' ? 'active' : ''}
            onClick={() => setActiveTab('instructions')}
          >Instructions
          </button>
          <button
            type="button"
            className={activeTab === 'ingredients' ? 'active' : ''}
            onClick={() => setActiveTab('ingredients')}
          >Ingredients
          </button>
          {activeTab === 'instructions' && (
            <div className="recipe__h3">
              <h3
                dangerouslySetInnerHTML={{ __html: details.summary }}
                className="recipe__h3-sum"
              />
              <h3
                dangerouslySetInnerHTML={{ __html: details.instructions }}
                className="recipe__h3-ins"
              />
            </div>
          )}
          {activeTab === 'ingredients' && (
            <div>
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}> {ingredient.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// const DetailWrapper = styled.div`
// margin-top : 10rem;
// margin-bottom: 5rem;
// display: flex;
// .active {
//   backgound: linear-gradient(35deg, #494949, #313131);
// }
// h2{
//   margin-bottom: 2rem;
// }

// li{
//   font-size: 1.2rem;
//   line-height: 2.5rem;
// }
// ul{
//   margin-top: 2rem;
// }
// `;

// const Button = styled.button`
// padding: 1rem 2rem;
// color: #313131;
// background: white;
// border: 2px solid black;
// margin-right: 2rem;
// font-size: 600;
// `;

// const Info = styled.div`
// margin-left: 10rem
// `;

export default Recipe;
