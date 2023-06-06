//  === Import  ===;
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//  === Import : local  ===;

//  === Component ===;
const Searched = () => {
  console.log('Composant Searched => ');

  const [searchRecipes, setSearchRecipes] = useState([]);
  const params = useParams();

  const getSearched = async (searchValue) => {
    const dataSearched = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchValue}`);
    const recipesSearched = await dataSearched.json();
    setSearchRecipes(recipesSearched.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {
        searchRecipes.map((item) => (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        ))
      }
    </Grid>
  );
};

const Grid = styled.div`
display: grid
grid-template-columns: repeat(auto-fit, minmax(20rem,1fr))
grid-grap:3rem
`;

const Card = styled.div`
img{
  width:100%
  border-radius:2rem
}
a{
  text-decoration: none;
}
h4{
  text-align: center
  padding:1rem
}
`;

export default Searched;
