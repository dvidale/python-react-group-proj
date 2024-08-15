import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import ShoppingCartButton from '../ShoppingCartModal/ShoppingCartButton';

function Navigation() {
	return (
		<nav className='navbar'>
			<NavLink
				className='logo'
				to='/'
			>
				DashDine
			</NavLink>
			<div className='nav-btn-holder'>
				<ProfileButton />
				<ShoppingCartButton />
			</div>
		</nav>
	);
}

export default Navigation;
