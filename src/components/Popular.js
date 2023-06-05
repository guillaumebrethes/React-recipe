//  === Import  ===;

import { useEffect, useState } from 'react';

//  === Import : local  ===;

//  === Component ===;
const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json();
    setPopular(data.recipes);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      {
        popular.map((recipe) => (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Popular;
