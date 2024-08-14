import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../redux/menuItems';
import { useParams } from 'react-router-dom';
import AddMenuItemButton from '../AddMenuItemForm/AddMenuItemButton';
import '../MenuItemsList/MenuItemsList.css';
import { fetchAddCartItem } from '../../redux/shoppingCart';
import { FaThumbsUp } from 'react-icons/fa';

const MenuItemsList = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const menuItems = useSelector((state) => state.menuItems.itemArr);

	useEffect(() => {
		dispatch(fetchMenuItems(id));
	}, [dispatch, id]);

	const handleAddToCart = (menuItemId) => {
		dispatch(fetchAddCartItem(menuItemId));
	};

	return (
		<div className='menu-holder'>
			<h2>The Menu</h2>
			<AddMenuItemButton />
			<div className='menu-items-wrapper'>
				{menuItems.map((item) => (
					<div
						key={item.id}
						className='menu-item-structure'
					>
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
