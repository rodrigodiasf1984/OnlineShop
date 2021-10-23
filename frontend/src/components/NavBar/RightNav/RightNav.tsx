import { NavboxProps } from '../interface';
import { Ul } from './styles';

const RightNav = ({ open }: NavboxProps) => (
  <Ul open={open}>
    <li>Admin</li>
  </Ul>
);

export default RightNav;
