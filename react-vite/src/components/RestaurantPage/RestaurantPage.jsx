import { useParams } from 'react-router-dom';
import MenuItemsList from '../MenuItemsList/MenuItemsList';

export const RestaurantPage = () => {
	const id = useParams();

	return (
		<>
			<h1>THIS IS RESTAURANT PAGE</h1>
			<MenuItemsList id={id} />
		</>
	);
};
