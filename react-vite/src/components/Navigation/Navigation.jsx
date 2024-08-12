import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import ShoppingCartButton from '../ShoppingCartModal/ShoppingCartButton';

function Navigation() {
	return (
		<ul>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>

			<li>
				<ProfileButton />
			</li>
			<li>
				<ShoppingCartButton />
			</li>
		</ul>
	);
}

export default Navigation;
