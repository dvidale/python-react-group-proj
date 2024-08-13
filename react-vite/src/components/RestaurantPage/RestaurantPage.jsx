import { useParams } from 'react-router-dom';
import MenuItemsList from '../MenuItemsList/MenuItemsList';
import ReviewsList from '../Reviews/ReviewsList';

export const RestaurantPage = () => {
	const id = useParams();

	return (
		<>
			<h1>THIS IS RESTAURANT PAGE</h1>
			<ReviewsList id={id}/>
			<MenuItemsList id={id} />
		</>
	);
};
