//  === Import  ===;
import { motion } from 'framer-motion';
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
//  === Import : local  ===;

//  === Component ===;
const Home = () => (
  <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Veggie />
    <Popular />
  </motion.div>
);

export default Home;
