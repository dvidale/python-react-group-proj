import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import ShoppingCartButton from '../ShoppingCartModal/ShoppingCartButton';
import { useSelector } from 'react-redux';

function Navigation() {
	const cartItems = useSelector((state) => state.shoppingCart.items);
	const cartItemCount = cartItems ? cartItems.length : 0;

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
				<ShoppingCartButton cartItemCount={cartItemCount} />
			</div>
		</nav>
	);
}

export default Navigation;
