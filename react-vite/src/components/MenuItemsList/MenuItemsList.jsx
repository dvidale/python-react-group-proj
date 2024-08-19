import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { fetchMenuItems, fetchDeleteMenuItem } from '../../redux/menuItems';
import { addCartItem } from '../../redux/shoppingCart';
import { fetchARestaurant } from '../../redux/restaurants';
import { useModal } from '../../context/Modal';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';
import AddMenuItemForm from '../AddMenuItemForm/AddMenuItemForm'; // Import the form directly
import './MenuItemsList.css';

const MenuItemsList = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { setModalContent, closeModal } = useModal();

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

	const handleAddToCart = (menuItem) => {
		if (!currentUser) {
			setModalContent(<LoginFormModal />);
		} else {
			dispatch(addCartItem(menuItem));
		}
	};

	const handleDelete = (menuItemId) => {
		dispatch(fetchDeleteMenuItem(menuItemId));
		closeModal();
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
			{isOwner && (
				<button
					className='add-menu-item-btn'
					onClick={() => setModalContent(<AddMenuItemForm />)} // Set the form as modal content
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
							<button
								className='delete-menu-item-btn'
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
							<div className='bottom-info'>
								<p className='item-details description'>{item.description}</p>
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
								onClick={() => handleAddToCart(item)}
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
