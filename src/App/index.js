// == Import
import { BrowserRouter } from 'react-router-dom';
import Pages from '../pages/Pages';
import Category from '../components/Category';

// == Composant
const App = () => (
  <div className="app">
    <BrowserRouter>
      <Category />
      <Pages />
    </BrowserRouter>
  </div>
);

// == Export
export default App;
