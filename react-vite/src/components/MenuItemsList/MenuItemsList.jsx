import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../redux/menuItems';
import { useParams } from 'react-router-dom';
import AddMenuItemButton from '../AddMenuItemForm/AddMenuItemButton';
import '../MenuItemsList/MenuItemsList.css';

const MenuItemsList = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const menuItems = useSelector((state) => state.menuItems.itemArr);

	useEffect(() => {
		dispatch(fetchMenuItems(id));
	}, [dispatch, id]);
	return (
		<div>
			<h2>Menu Items</h2>
			<AddMenuItemButton />
			<div className='menu-items-wrapper'>
				{menuItems.map((item) => (
					<div
						key={item.id}
						className='menu-item-structure'
					>
						<h3>{item.name}</h3>
						<p>{item.description}</p>
						<p>Price: ${item.price}</p>
						<p>Rating: {item.like_percentage}%</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MenuItemsList;
