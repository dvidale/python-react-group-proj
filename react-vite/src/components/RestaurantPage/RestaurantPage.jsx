import { useParams, useNavigate } from 'react-router-dom';
import MenuItemsList from '../MenuItemsList/MenuItemsList';
import RestaurantHeader from '../RestaurantHeader';
import MainReview from '../Reviews/MainReview';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsList from '../Reviews/ReviewsList';
import { useEffect, useRef } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
import RestaurantInfoBox from '../RestaurantInfoBox/RestaurantInfoBox';
import RestaurantInfoText from '../RestaurantInfoText/RestaurantInfoText';
import { reviewSummary } from '../../redux/reviews';
import { useModal } from '../../context/Modal';
import './restaurant_page.css';
import ServerMessageModal from '../ServerErrorModal/ServerMessageModal';

export const RestaurantPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const reviewsSectionRef = useRef(null);
	const { setModalContent } = useModal()

	const sessionUser = useSelector((state) => state.session.user);
	const savedLocation = useSelector((state) => state.location);

	const restaurant = useSelector(
		(state) => state.restaurants.AllRestaurants[id]
	);

	const city = sessionUser?.city || savedLocation.city;
	const state = sessionUser?.state || savedLocation.state;

	useEffect(() => {
		dispatch(restaurantsActions.fetchARestaurant(id)).then((serverError)=>{
			if(serverError){
				setModalContent(< ServerMessageModal message={serverError.error} />)
				navigate('/')
			}
		})
		.then(dispatch(restaurantsActions.getRestaurants()))
		.then(dispatch(reviewSummary(id)))
			
	}, [dispatch, id, setModalContent, navigate]);

	// Function to scroll to the reviews section
	const scrollToReviews = () => {
		if (reviewsSectionRef.current) {
			reviewsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
		}
	};

	return (
		<>
			{restaurant ? (
				<div className='res-page-structure'>
					{sessionUser && sessionUser.id === restaurant.owner_id && (
						<div className='res-management-button-container'>
							<button
								id='res-page-delete-button'
								className='res-page-man-btn'
								onClick={() => navigate(`/restaurants/current/${id}`)}
							>
								Update Restaurant Details
							</button>
						</div>
					)}
					<RestaurantHeader restaurant={restaurant} />
					<div className='res-page-info-structure'>
						<div className='rest-info-box'>
							<RestaurantInfoText
								restaurant={restaurant}
								city={city}
								state={state}
							/>
						</div>
						<div className='rest-review-box'>
							<div>
								<MainReview id={id} />
							</div>
							<div className='button-container'>
								<button onClick={scrollToReviews} className='scroll-button'>
									More Reviews
								</button>
							</div>
						</div>

						<div className='rest-delivery-box'>
							<RestaurantInfoBox
								restaurant={restaurant}
								city={city}
								state={state}
							/>
						</div>
					</div>
					<MenuItemsList />
					<ReviewsList restaurant={restaurant} ref={reviewsSectionRef}/>
				</div>
			) : (
				<p>Loading...</p> // Loading state or message while the restaurant data is being fetched
			)}
		</>
	);
};

export default RestaurantPage;
