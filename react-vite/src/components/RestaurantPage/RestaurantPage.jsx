import { useParams, useNavigate } from 'react-router-dom';
import MenuItemsList from '../MenuItemsList/MenuItemsList';
import RestaurantHeader from '../RestaurantHeader';
import MainReview from '../Reviews/MainReview';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsList from '../Reviews/ReviewsList';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
import RestaurantInfoBox from '../RestaurantInfoBox/RestaurantInfoBox';

export const RestaurantPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	let restaurant = useSelector((state) => state.restaurants.AllRestaurants[id]);

	const sessionUser = useSelector((state) => state.session.user);
	const savedLocation = useSelector((state) => state.location);

	const city = sessionUser?.city || savedLocation.city;
	const state = sessionUser?.state || savedLocation.state;

	useEffect(() => {
		dispatch(restaurantsActions.getRestaurants());
	}, [dispatch]);

	useEffect(() => {
		if (!sessionUser) {
			navigate('/'); // Redirect to the homepage
		}
	}, [sessionUser, navigate]);

	return (
		<>
			{restaurant ? (
				<>
					<RestaurantHeader restaurant={restaurant} />

					<MainReview restaurantId={id} />
					<RestaurantInfoBox
						restaurant={restaurant}
						city={city}
						state={state}
					/>
					<MenuItemsList id={id} />
					<ReviewsList
						restaurant={restaurant}
						id={id}
					/>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default RestaurantPage;
