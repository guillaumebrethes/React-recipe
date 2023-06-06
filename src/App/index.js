// == Import
import { BrowserRouter, Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import Pages from '../pages/Pages';
import Category from '../components/Category';
import Search from '../components/Search';

import '../styles/app.scss';
// == Composant
const App = () => (
  <div className="app">
    <BrowserRouter>
      <div className="app__nav">
        <GiKnifeFork className="giknifefork" />
        <Link
          className="app__logo"
          to="/"
        > Deliciousss
        </Link>
      </div>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  </div>
);

export default App;
