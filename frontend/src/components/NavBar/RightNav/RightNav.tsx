import { Link } from 'react-router-dom';
import { settings } from '../../../assets';
import { NavboxProps } from '../interface';
import { Ul } from './styles';

const RightNav = ({ open }: NavboxProps) => (
  <Ul open={open}>
    <li>
      <Link to="/admin" className="link">
        Admin <img src={settings} alt="settings" />
      </Link>
    </li>
  </Ul>
);

export default RightNav;
