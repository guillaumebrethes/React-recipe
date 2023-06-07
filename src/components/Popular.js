//  === Import  ===;
import { useEffect, useState, useMemo } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
//  === Import : local  ===;
import '../styles/popular.scss';
//  === Component ===;
const Popular = () => {
  const popularFromLocalStorage = useMemo(() => {
    const check = localStorage.getItem('popular');
    return check ? JSON.parse(check) : [];
  }, []);

  const [popular, setPopular] = useState(popularFromLocalStorage);

  const fetchPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`,
    );
    const data = await api.json();
    localStorage.setItem('popular', JSON.stringify(data.recipes));
    setPopular(data.recipes);
  };

  useEffect(() => {
    if (popular.length === 0) {
      fetchPopular();
    }
  }, []);

  // useEffect(() => {
  //   getPopular();
  // }, []);

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
