import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../redux/menuItems';

const MenuItemsList = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const menuItems = useSelector((state) => state.menuItems);
	console.log(menuItems);

	useEffect(() => {
		dispatch(fetchMenuItems(id));
	}, [dispatch, id]);

	return (
		<div>
			<h2>Menu Items</h2>
			<ul>
				{menuItems.itemArr.map((item) => (
					<li key={item.id}>
						<h3>{item.name}</h3>
						<p>{item.description}</p>
						<p>Price: ${item.price}</p>
						<p>Rating: {item.like_percentage}%</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MenuItemsList;
