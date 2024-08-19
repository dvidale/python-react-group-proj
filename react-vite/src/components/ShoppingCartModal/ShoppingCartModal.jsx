import { useSelector, useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ShoppingCartModal.css';
import {
	removeCartItem,
	addCartItem,
	clearCartItems,
} from '../../redux/shoppingCart';
import ThankYouModal from '../ThankYouModal/ThankYouModal';

const ShoppingCartModal = () => {
	const dispatch = useDispatch();
	const { closeModal, setModalContent } = useModal();
	const shoppingCart = useSelector((state) => state.shoppingCart.items);
	const sessionUser = useSelector((state) => state.session.user);

	const handleAddToCart = (menuItemId) => {
		dispatch(addCartItem(menuItemId))
	};

	const handleRemoveItem = (itemId) => {
		dispatch(removeCartItem(itemId));
	};

	const handlePurchase = () => {
		if (shoppingCart.length === 0) {
			alert(
				'Your cart is empty. Please add items to your cart before purchasing.'
			);
		} else {
			// Show the "Thank You" modal after the purchase
			setModalContent(<ThankYouModal />);
			dispatch(clearCartItems()); // Clear the cart after purchase
		}
	};

	return (
		<div className='shopping-cart-modal'>
			<div>
				<h2>Your Shopping Cart</h2>
				<button onClick={closeModal}>Close</button>
			</div>
			{shoppingCart.length > 0 ? (
				<>
					<div>
						{shoppingCart.map((item) => (
							<div
								key={item.id}
								className='cart-item'
							>
								<div className='cart-img-holder'>
									<img
										src={item.image_url}
										alt={item.name}
									/>
									<div>
										<h3>{item.name}</h3>
										<p>{item.description}</p>
										<p>Price: ${item.price}</p>
									</div>
								</div>
								<div className='cart-quantity'>
									<p className='quantity'>{item.item_quantity}</p>{' '}
									<div className='quantity-btns'>
										<button onClick={() => handleAddToCart(item)}>+</button>
										<button onClick={() => handleRemoveItem(item.id)}>
											Delete
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</>
			) : (
				<p>Your cart is empty.</p>
			)}
			{sessionUser && <button onClick={handlePurchase}>Purchase</button>}
		</div>
	);
};

export default ShoppingCartModal;
