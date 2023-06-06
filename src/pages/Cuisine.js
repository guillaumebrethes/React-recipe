//  === Import  ===;
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
//  === Import : local  ===;

//  === Component ===;
const Cuisine = () => {
  console.log('Composant Cuisine => ', Cuisine);

  const getCuisine = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
  };

  return (
    <div>
      Comoposant Cuisine
    </div>
  );
};

export default Cuisine;
