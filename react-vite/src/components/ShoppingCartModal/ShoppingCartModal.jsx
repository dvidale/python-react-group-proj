import { useSelector, useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ShoppingCartModal.css';
import {
	removeCartItem,
	addCartItem,
	clearCartItems,
	subtractCartItem,
} from '../../redux/shoppingCart';
import ThankYouModal from '../ThankYouModal/ThankYouModal';
import QuantityLimitModal from '../QuantityLimitModal/QuantityLimitModal';

const ShoppingCartModal = () => {
	const dispatch = useDispatch();
	const { closeModal, setModalContent } = useModal();
	const shoppingCart = useSelector((state) => state.shoppingCart.items);
	const sessionUser = useSelector((state) => state.session.user);

	const totalPrice = shoppingCart.reduce((total, item) => {
		return total + item.price * item.item_quantity;
	}, 0);

	const handleAddToCart = (menuItem) => {
		if (menuItem.item_quantity >= 5) {
			setModalContent(<QuantityLimitModal />);
		} else {
			dispatch(addCartItem(menuItem));
		}
	};

	const handleSubtractFromCart = (menuItem) => {
		dispatch(subtractCartItem(menuItem.menu_item_id));
	};

	const handleRemoveItem = (itemId) => {
		dispatch(removeCartItem(itemId));
	};

	const handlePurchase = () => {
		setModalContent(<ThankYouModal />);
		dispatch(clearCartItems());
	};

	return (
		<div className='shopping-cart-modal'>
			<div className='shop-header'>
				<h2>Your Shopping Cart</h2>
				<button
					className='close-shop-btn'
					onClick={closeModal}
				>
					x
				</button>
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
										<p className='shop-desc'>{item.description}</p>
										<p className='shop-price'>${item.price}</p>
									</div>
								</div>
								<div className='cart-quantity'>
									<p className='quantity'>Qty: {item.item_quantity}</p>{' '}
									<div className='quantity-btns'>
										<button
											className='shop-add-btn'
											onClick={() => handleAddToCart(item)}
										>
											+
										</button>
										<button
											className='shop-minus-btn'
											onClick={() => handleSubtractFromCart(item)}
										>
											-
										</button>
										<button
											className='shop-delete-btn'
											onClick={() => handleRemoveItem(item.id)}
										>
											Delete
										</button>
									</div>
								</div>
							</div>
						))}
						<hr />
					</div>
					<div className='total-price'>
						<h3>Total: ${totalPrice.toFixed(2)}</h3>
						{sessionUser && shoppingCart.length > 0 && (
							<button
								className='shop-purchase-btn'
								onClick={handlePurchase}
							>
								Purchase
							</button>
						)}
					</div>
				</>
			) : (
				<p>Your cart is empty.</p>
			)}
		</div>
	);
};

export default ShoppingCartModal;
