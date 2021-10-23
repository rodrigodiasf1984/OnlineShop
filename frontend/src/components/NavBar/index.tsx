import { Link } from 'react-router-dom';
import bagImg from 'assets/bag.svg';
import { Nav, Section } from './navBarStyles';

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <h2>OnlineShop</h2>
      </Link>
      <Link to="/cart">
        <Section>
          <img src={bagImg} alt="Cart Bag" />
          <div className="bag-quantity">
            <span>3</span>
          </div>
        </Section>
      </Link>
    </Nav>
  );
};

export default NavBar;
