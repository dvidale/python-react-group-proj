import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MenuItemsList = () => {
	const { id } = useParams();
	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		const fetchMenuItems = async () => {
			const response = await fetch(
				`http://localhost:8000/api/restaurants/${id}/menu-items`
			);
			const data = await response.json();
			setMenuItems(data);
		};
		fetchMenuItems();
	}, [id]); // Re-run effect if the id changes

	return (
		<div>
			<h2>Menu Items</h2>
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
