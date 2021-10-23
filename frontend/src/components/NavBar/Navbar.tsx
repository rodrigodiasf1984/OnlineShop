import { close, profile, search } from '../../assets';
import Burger from './Burguer';
import { Nav } from './styles';

const Navbar = () => (
  <Nav>
    <section className="icons">
      <img src={close} alt="close" />
      <div className="content">
        <div>
          <img src={profile} alt="close" />
        </div>
        <div>
          <img src={search} alt="close" />
        </div>
      </div>
    </section>
    <Burger />
  </Nav>
);

export default Navbar;
