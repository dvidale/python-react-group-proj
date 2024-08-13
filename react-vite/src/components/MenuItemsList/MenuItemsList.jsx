import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../redux/menuItems';
import AddMenuItemButton from '../AddMenuItemForm/AddMenuItemButton';

const MenuItemsList = (id) => {
	const dispatch = useDispatch();
	const menuItems = useSelector((state) => state.menuItems.itemArr);

	useEffect(() => {
		dispatch(fetchMenuItems(id));
	}, [dispatch, id]);
	return (
		<div>
			<h2>Menu Items</h2>
			<div>
				<AddMenuItemButton />
				{menuItems.map((item) => (
					<div key={item.id}>
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
