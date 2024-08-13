
import { useParams } from 'react-router-dom';
import MenuItemsList from '../MenuItemsList/MenuItemsList';
import RestaurantHeader from '../RestaurantHeader';
import { useSelector } from 'react-redux';


export const RestaurantPage = () => {
	
	const {id} = useParams()

	const restaurant = useSelector(state => state.restaurants.AllRestaurants[id])

	return (
		<>
		<RestaurantHeader restaurant={restaurant}/>
			<MenuItemsList id={restaurant.id} />
		</>
	);
};

export default RestaurantPage;