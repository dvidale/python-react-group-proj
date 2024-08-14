import { useParams } from 'react-router-dom';
import MenuItemsList from '../MenuItemsList/MenuItemsList';
import RestaurantHeader from '../RestaurantHeader';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsList from '../Reviews/ReviewsList';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';

export const RestaurantPage = () => {
	const { id } = useParams();

	const dispatch = useDispatch()

	const restaurant = useSelector(
		(state) => state.restaurants.AllRestaurants[id]
	);


	useEffect(() =>{
		
		dispatch(restaurantsActions.getRestaurants())
	}, [dispatch])

	return (
		<>
			<RestaurantHeader restaurant={restaurant} />
			
			<MenuItemsList id={id} />
			<ReviewsList id={id}/>
		</>
	);
};

export default RestaurantPage;
