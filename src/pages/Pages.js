//  === Import  ===;
import { Route, Routes } from 'react-router-dom';
//  === Import : local  ===;
import Home from './Home';
import Cuisine from './Cuisine';

//  === Component ===;
const Pages = () => {
  console.log('Composant Pages => ', Pages);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
};

export default Pages;
