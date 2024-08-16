import { useSelector, useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ShoppingCartModal.css';
import { useEffect } from 'react';
import {
	fetchCartItems,
	fetchRemoveCartItem,
	fetchAddCartItem,
	clearCartItems,
	resetCartItems,
} from '../../redux/shoppingCart';
import CreateReview from '../Reviews/CreateReview';

const ShoppingCartModal = () => {
	const dispatch = useDispatch();
	const { closeModal, setModalContent } = useModal();
	const shoppingCart = useSelector((state) => state.shoppingCart.items);
	const sessionUser = useSelector((state) => state.session.user);

	useEffect(() => {
		if (!sessionUser) {
			dispatch(clearCartItems());
		}
		dispatch(fetchCartItems());
	}, [dispatch, sessionUser]);

	const handleAddToCart = (menuItemId) => {
		dispatch(fetchAddCartItem(menuItemId)).then(() => {
			dispatch(fetchCartItems());
		});
	};

	const handleRemoveItem = (itemId) => {
		dispatch(fetchRemoveCartItem(itemId)).then(() => {
			dispatch(fetchCartItems());
		});
	};

	const handlePurchase = () => {
		if (shoppingCart.length === 0) {
			dispatch(resetCartItems());
			alert(
				'Your cart is empty. Please add items to your cart before purchasing.'
			);
		} else {
			alert('Purchase feature in development');
			// Open the review modal
			setModalContent(<CreateReview id={1} />);
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
										<button onClick={() => handleAddToCart(item.menu_item_id)}>
											+
										</button>
										<button onClick={() => handleRemoveItem(item.id)}>-</button>
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
