import { FaPizzaSlice, FaHamburgeur } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { Navlink } from 'react-router-dom';

//  === Import  ===;

//  === Import : local  ===;

//  === Component ===;
const Category = () => {
  console.log('Composant Category => ', Category);

  return (
    <List>
      <Navlink to="/cuisine/Italian">
        <FaPizzaSlice />
        <h4>Pizza</h4>
      </Navlink>
      <Navlink to="/cuisine/American">
        <FaHamburgeur />
        <h4>American</h4>
      </Navlink>
      <Navlink to="/cuisine/Thai">
        <GiNoodles />
        <h4>Thai</h4>
      </Navlink>
      <Navlink to="/cuisine/Japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </Navlink>
    </List>
  );
};

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

export default Category;
