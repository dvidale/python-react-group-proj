import { useParams } from 'react-router-dom';
import MenuItemsList from '../MenuItemsList/MenuItemsList';
import RestaurantHeader from '../RestaurantHeader';
import MainReview from '../Reviews/MainReview';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsList from '../Reviews/ReviewsList';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
import RestaurantInfoBox from '../RestaurantInfoBox/RestaurantInfoBox';
import RestaurantInfoText from '../RestaurantInfoText/RestaurantInfoText';
import './restaurant_page.css';

export const RestaurantPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const sessionUser = useSelector((state) => state.session.user);
	const savedLocation = useSelector((state) => state.location);

	const restaurant = useSelector(
		(state) => state.restaurants.AllRestaurants[id]
	);

	const city = sessionUser?.city || savedLocation.city;
	const state = sessionUser?.state || savedLocation.state;

	useEffect(() => {
		dispatch(restaurantsActions.getRestaurants());
	}, [dispatch]);

	return (
		<>
			{restaurant ? (
				<div className='res-page-structure'>
					<RestaurantHeader restaurant={restaurant} />
					<div className='res-page-info-structure'>
						<div>
							<RestaurantInfoText
								restaurant={restaurant}
								city={city}
								state={state}
							/>

							<MainReview restaurantId={id} />
						</div>
						<RestaurantInfoBox
							restaurant={restaurant}
							city={city}
							state={state}
						/>
					</div>
					<MenuItemsList id={id} />
					<ReviewsList restaurant={restaurant} />
				</div>
			) : (
				<p>Loading...</p> // Loading state or message while the restaurant data is being fetched
			)}
		</>
	);
};

export default RestaurantPage;
