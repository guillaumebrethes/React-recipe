// == Import
import { BrowserRouter, Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import Pages from '../pages/Pages';
import Category from '../components/Category';
import Search from '../components/Search';

// == Composant
const App = () => (
  <div className="app">
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to="/"> Deliciousss </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  </div>
);

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'lobster Two', cursive;
`;

const Nav = styled.div`
padding: 4rem 0rem;
display:flex;
justify-content: flex-start;
align-items: center 

svg {
  font-size: 2rem;
}
`;

// == Export
export default App;
