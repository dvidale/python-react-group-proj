import { useSelector, useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ShoppingCartModal.css';
import { useEffect } from 'react';
import { fetchCartItems, fetchRemoveCartItem } from '../../redux/shoppingCart';

const ShoppingCartModal = () => {
	const dispatch = useDispatch();
	const { closeModal } = useModal();
	const shoppingCart = useSelector((state) => state.shoppingCart.items);

	useEffect(() => {
		dispatch(fetchCartItems());
	}, [dispatch]);

	const handleRemoveItem = (itemId) => {
		dispatch(fetchRemoveCartItem(itemId));
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
								<img
									src={item.image_url}
									alt={item.name}
								/>
								<h3>{item.name}</h3>
								<p>{item.description}</p>
								<p>Price: ${item.price}</p>
								<button onClick={() => handleRemoveItem(item.id)}>
									Remove
								</button>
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
