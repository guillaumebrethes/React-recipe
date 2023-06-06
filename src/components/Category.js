//  === Import  ===;
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
// import { Navlink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

//  === Import : local  ===;
import '../styles/category.scss';
//  === Component ===;
const Category = () => (
  <div className="category">
    <NavLink
      className="category__link"
      to="/cuisine/Italian"
    >
      <FaPizzaSlice className="category__logo" />
      <h4 className="category__h4">Pizza</h4>
    </NavLink>

    <NavLink
      className="category__link"
      to="/cuisine/American"
    >
      <FaHamburger className="category__logo" />
      <h4 className="category__h4">American</h4>
    </NavLink>

    <NavLink
      className="category__link"
      to="/cuisine/Thai"
    >
      <GiNoodles className="category__logo" />
      <h4 className="category__h4">Thai</h4>
    </NavLink>

    <NavLink
      className="category__link"
      to="/cuisine/Japanese"
    >
      <GiChopsticks className="category__logo" />
      <h4 className="category__h4">Japanese</h4>
    </NavLink>
  </div>
);

// const List = styled.div`
// display: flex;
// justify-content: center;
// margin: 2rem 0rem;
// `;
// const SLink = styled(NavLink)`
// display : flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// border-radius: 50%;
// margi-right: 2rem
// text-decoration: none;
// background: linear-gradient(35deg, #494949, #313131);
// width: 6rem;
// haight: 6rem;
// cursor: pointer;
// transform: scale (0.8)

// h4{
//   color : white;
//   font-size: 0,8rem
// }

// svg{
//   color: white;
//   font-size: 1.5rem;

// }
// &.active {
//   backgound: linear-gradient (to right, #f27121, #e94057)
//   svg {
//     color: white;
//   }
//   h4 {
//     color: white;
//   }
// }
// `;

export default Category;
