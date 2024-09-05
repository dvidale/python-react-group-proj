import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { fetchMenuItems, fetchDeleteMenuItem } from '../../redux/menuItems';
import { addCartItem } from '../../redux/shoppingCart';
import { fetchARestaurant } from '../../redux/restaurants';
import { useModal } from '../../context/Modal';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';
import QuantityLimitModal from '../QuantityLimitModal/QuantityLimitModal';
import AddMenuItemForm from '../AddMenuItemForm/AddMenuItemForm';
import EditMenuItemForm from '../EditMenuItem/EditMenuItemForm';
import SuccessModal from '../SuccessDeleteMenuItemModal/SuccessModal';
import OwnerCannotPurchaseModal from '../OwnerCannotPurchase/OwnerCannotPurchaseModal';
import './MenuItemsList.css';

const MenuItemsList = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { setModalContent, closeModal } = useModal();
	const [pendingCartItem, setPendingCartItem] = useState(null);

	const menuItems = useSelector((state) => state.menuItems.itemArr);
	const currentUser = useSelector((state) => state.session.user);
	const restaurant = useSelector(
		(state) => state.restaurants.selectedRestaurant
	);
	const cartItems = useSelector((state) => state.shoppingCart.items);

	useEffect(() => {
		dispatch(fetchARestaurant(id));
		dispatch(fetchMenuItems(id));
	}, [dispatch, id]);

	const isOwner = currentUser && currentUser.id === restaurant.owner_id;

	const handleAddToCart = (menuItem) => {
		if (!currentUser) {
			setPendingCartItem(menuItem); // Store the item for after login
			setModalContent(<LoginFormModal onLoginSuccess={handleLoginSuccess} />);
		} else if (isOwner) {
			setModalContent(<OwnerCannotPurchaseModal />);
		} else {
			addItemToCart(menuItem);
		}
	};

	const handleLoginSuccess = () => {
		if (pendingCartItem) {
			if (currentUser && currentUser.id === restaurant.owner_id) {
				setModalContent(<OwnerCannotPurchaseModal />);
			} else {
				addItemToCart(pendingCartItem);
			}
			setPendingCartItem(null); // Reset after adding
		}
	};

	const addItemToCart = (menuItem) => {
		const itemQuantity = getCartItemQuantity(menuItem.id, cartItems);
		if (itemQuantity >= 5) {
			setModalContent(<QuantityLimitModal />);
		} else {
			dispatch(addCartItem(menuItem));
		}
	};

	const handleEditConfirmation = (menuItem) => {
		setModalContent(<EditMenuItemForm menuItem={menuItem} />);
	};

	const handleDelete = (menuItemId) => {
		dispatch(fetchDeleteMenuItem(menuItemId)).then(() => {
			closeModal();
			setModalContent(<SuccessModal message='Item successfully deleted!' />);
		});
	};

	const handleDeleteConfirmation = (menuItemId) => {
		setModalContent(
			<DeleteConfirmationModal onConfirm={() => handleDelete(menuItemId)} />
		);
	};

	const getCartItemQuantity = (menuItemId) => {
		const cartItem = cartItems?.find(
			(cartItem) => cartItem.menu_item_id === menuItemId
		);
		return cartItem ? cartItem.item_quantity : 0;
	};

	return (
		<div className='menu-holder'>
			<h2>The Menu</h2>
			{isOwner && (
				<button
					className='add-menu-item-btn'
					onClick={() => setModalContent(<AddMenuItemForm />)}
				>
					Add Menu Item
				</button>
			)}
			<div className='menu-items-wrapper'>
				{menuItems.map((item) => (
					<div
						key={item.id}
						className='menu-item-structure'
					>
						{isOwner && (
							<div className='owner-edit-btns'>
								<button
									className='edit-menu item-btn'
									onClick={() => handleEditConfirmation(item)}
								>
									Edit
								</button>
								<button
									className='delete-menu item-btn'
									onClick={() => handleDeleteConfirmation(item.id)}
								>
									Delete
								</button>
							</div>
						)}
						<div className='menu-item-details'>
							<div>
								<h3 className='item-title'>{item.name}</h3>
								<p className='item-details'>
									<FaThumbsUp /> {item.like_percentage}%
								</p>
							</div>
							<p className='item-details description'>{item.description}</p>
							<div className='bottom-info'>
								<p className='item-details-price'>${item.price}</p>
							</div>
						</div>
						<div className='menu-item-img-holder'>
							<img
								src={item.image_url}
								alt='food-item'
								className='menu-item-img'
							/>{' '}
							{!isOwner && (
								<button
									className='add-to-cart-btn'
									onClick={() => handleAddToCart(item)}
								>
									{getCartItemQuantity(item.id) > 0
										? `${getCartItemQuantity(item.id)}`
										: '+'}
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MenuItemsList;
