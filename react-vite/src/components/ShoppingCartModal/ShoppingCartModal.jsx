import { useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ShoppingCartModal.css';

const ShoppingCartModal = () => {
	const { closeModal } = useModal();
	const shoppingCart = useSelector((state) => state.shoppingCart);

	return (
		<div className='shopping-cart-modal'>
			<h2>Your Shopping Cart</h2>
			{shoppingCart && shoppingCart.items.length > 0 ? (
				<ul>
					{shoppingCart.items.map((item) => (
						<li key={item.id}>
							<img
								src={item.menu_item.image_url}
								alt={item.menu_item.name}
							/>
							<h3>{item.menu_item.name}</h3>
							<p>{item.menu_item.description}</p>
							<p>Price: ${item.menu_item.price}</p>
						</li>
					))}
				</ul>
			) : (
				<p>Your cart is empty.</p>
			)}
			<button onClick={closeModal}>Close</button>
		</div>
	);
};

export default ShoppingCartModal;
