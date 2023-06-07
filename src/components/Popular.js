//  === Import  ===;
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
//  === Import : local  ===;
import '../styles/popular.scss';
//  === Component ===;
const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');

    if (check) {
      setPopular(JSON.parse(check));
    }
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <div className="popular">
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: true,
            drag: 'free',
          }}
        >
          {
            popular.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <div className="popular__card">
                  <Link to={`/recipe/${recipe.id}`}>
                    <p className="popular__p">{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} className="popular__img" />
                  </Link>
                  {/* <Gradient /> */}
                </div>
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </div>
  );
};

export default Popular;
