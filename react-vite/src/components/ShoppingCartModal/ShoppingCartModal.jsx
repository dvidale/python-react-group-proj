import { useSelector, useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ShoppingCartModal.css';
import { useEffect } from 'react';
import {
	fetchCartItems,
	fetchRemoveCartItem,
	fetchAddCartItem,
} from '../../redux/shoppingCart';

const ShoppingCartModal = () => {
	const dispatch = useDispatch();
	const { closeModal } = useModal();
	const shoppingCart = useSelector((state) => state.shoppingCart.items);

	useEffect(() => {
		dispatch(fetchCartItems());
	}, [dispatch]);

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

	return (
		<div className='shopping-cart-modal'>
			<h2>Your Shopping Cart</h2>
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
			<button onClick={closeModal}>Close</button>
		</div>
	);
};

export default ShoppingCartModal;