// == Import
import { BrowserRouter } from 'react-router-dom';
import Pages from '../pages/Pages';
import Category from '../components/Category';
import Search from '../components/Search';

// == Composant
const App = () => (
  <div className="app">
    <BrowserRouter>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  </div>
);

// == Export
export default App;
