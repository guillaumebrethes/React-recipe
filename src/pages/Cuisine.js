//  === Import  ===;
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
//  === Import : local  ===;
import '../styles/cuisine.scss';
//  === Component ===;
const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    // const check = localStorage.getItem('cuisine');
    // if (check) {
    //   setCuisine(JSON.parse(check));
    // }
    // else {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    // localStorage.setItem('cuisine', JSON.stringify(recipes.results));
    setCuisine(recipes.results);
    // }
  };

  useEffect(() => {
    // type correspond a params dynamique dans les paths de route dans Pages
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="cuisine">
      {
        cuisine.map((item) => (
          <div
            key={item.id}
            className="cuisine__div"
          >
            <Link to={`/recipe/${item.id}`} className="cuisine__link">
              <h4 className="cuisine__h4">{item.title}</h4>
              <img src={item.image} alt={item.title} className="cuisine__img" />
            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default Cuisine;
