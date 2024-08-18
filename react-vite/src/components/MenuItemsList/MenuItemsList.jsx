import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import AddMenuItemButton from '../AddMenuItemForm/AddMenuItemButton';
import { fetchMenuItems, fetchDeleteMenuItem } from '../../redux/menuItems';
import { fetchAddCartItem } from '../../redux/shoppingCart';
import { fetchARestaurant } from '../../redux/restaurants';
import { useModal } from '../../context/Modal'; // Import the useModal hook
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal'; // Ensure the path is correct
import './MenuItemsList.css';

const MenuItemsList = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { setModalContent } = useModal(); // Destructure the setModalContent from the context

	const menuItems = useSelector((state) => state.menuItems.itemArr);
	const currentUser = useSelector((state) => state.session.user);
	const restaurant = useSelector(
		(state) => state.restaurants.selectedRestaurant
	);

	useEffect(() => {
		dispatch(fetchARestaurant(id));
		dispatch(fetchMenuItems(id));
	}, [dispatch, id]);

	const isOwner = currentUser && currentUser.id === restaurant.owner_id;

	const handleAddToCart = (menuItemId) => {
		if (!currentUser) {
			setModalContent(<LoginFormModal />);
		} else {
			dispatch(fetchAddCartItem(menuItemId))
				.then(() => {
					console.log('Item added to cart');
				})
				.catch((error) => {
					console.error('Failed to add item to cart:', error);
				});
		}
	};

	const handleDelete = (menuItemId) => {
		dispatch(fetchDeleteMenuItem(menuItemId));
	};

	const handleDeleteConfirmation = (menuItemId) => {
		setModalContent(
			<DeleteConfirmationModal
				onConfirm={() => handleDelete(menuItemId)}
				onCancel={() => console.log('Delete canceled')}
			/>
		);
	};

	return (
		<div className='menu-holder'>
			<h2>The Menu</h2>
			{isOwner && <AddMenuItemButton />}
			<div className='menu-items-wrapper'>
				{menuItems.map((item) => (
					<div
						key={item.id}
						className='menu-item-structure'
					>
						{isOwner && (
							<button
								className='delete-btn'
								onClick={() => handleDeleteConfirmation(item.id)}
							>
								Delete
							</button>
						)}
						<div className='menu-item-details'>
							<div>
								<h3 className='item-title'>{item.name}</h3>
								<p className='item-details'>
									<FaThumbsUp /> {item.like_percentage}%
								</p>
							</div>
							<div>
								<p className='item-details'>{item.description}</p>
								<p className='item-details'>Price: ${item.price}</p>
							</div>
						</div>
						<div className='menu-item-img-holder'>
							<img
								src={item.image_url}
								alt='food-item'
								className='menu-item-img'
							/>
							<button
								className='add-to-cart-btn'
								onClick={() => handleAddToCart(item.id)}
							>
								+
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MenuItemsList;
