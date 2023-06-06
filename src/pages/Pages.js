//  === Import  ===;
import { Route, Routes } from 'react-router-dom';
//  === Import : local  ===;
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';

//  === Component ===;
const Pages = () => {
  console.log('Composant Pages => ');
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
};

export default Pages;
