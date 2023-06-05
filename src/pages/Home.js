//  === Import  ===;
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';

//  === Import : local  ===;

//  === Component ===;
const Home = () => {
  console.log('Composant Home => ', Home);

  return (
    <div>
      <Veggie />
      <Popular />
    </div>
  );
};

export default Home;
