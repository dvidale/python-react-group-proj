import { useParams } from 'react-router-dom';
import MenuItemsList from '../MenuItemsList/MenuItemsList';
import RestaurantHeader from '../RestaurantHeader';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsList from '../Reviews/ReviewsList';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
import RestaurantInfoBox from '../RestaurantInfoBox/RestaurantInfoBox';
import LocationForm from '../LocationForm/LocationForm';

//  !BUG: This page crashes if it is manually refreshed

export const RestaurantPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const restaurant = useSelector(
		(state) => state.restaurants.AllRestaurants[id]
	);

	const sessionUser = useSelector((state) => state.session.user);
	const savedLocation = useSelector((state) => state.location);

	const city = sessionUser?.city || savedLocation.city;
	const state = sessionUser?.state || savedLocation.state;

	useEffect(() => {
		dispatch(restaurantsActions.getRestaurants());
	}, [dispatch]);

	return (
		<>
			<RestaurantHeader restaurant={restaurant} />
			{!city || !state ? <LocationForm /> : null}
			<RestaurantInfoBox restaurant={restaurant} />
			<MenuItemsList id={id} />
			<ReviewsList id={id} />
		</>
	);
};

export default RestaurantPage;
