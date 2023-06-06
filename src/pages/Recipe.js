//  === Import  ===;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

//  === Import : local  ===;

//  === Component ===;
const Recipe = () => {
  console.log('Composant Recipe => ');
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const params = useParams();

  const fetchRecipeDetails = async () => {
    // params.name vient des routes Pages
    const recipes = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const recipesDetails = await recipes.json();
    setDetails(recipesDetails);
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }} />
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }} />
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIgredients.map((ingredient) => (
              <li key={ingredient.id} />
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
margin-top : 10rem;
margin-bottom: 5rem;
display: flex;
.active {
  backgound: linear-gradient(35deg, #494949, #313131);
}
h2{
  margin-bottom: 2rem;
}

li{
  font-size: 1.2rem;
  line-height: 2.5rem;
}
ul{
  margin-top: 2rem;
}
`;

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem; 
font-size: 600;
`;

const Info = styled.div`
margin-left: 10rem
`;

export default Recipe;
