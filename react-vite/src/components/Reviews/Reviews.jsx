import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../redux/menuItems';

const MenuItemsList = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const menuItems = useSelector((state) => state.menuItems.itemArr);
	console.log(menuItems);

	useEffect(() => {
		dispatch(fetchMenuItems(id));
	}, [dispatch, id]);

	return (
		<div>
			<h2>Reviews</h2>
			<div>
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
