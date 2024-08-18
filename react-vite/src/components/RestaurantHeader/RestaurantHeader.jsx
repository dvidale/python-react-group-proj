// import '../RestaurantPage/restaurant_page.css';
import './RestaurantHeader.css';
import { useSelector } from 'react-redux';
import RestaurantInfoBox from '../RestaurantInfoBox/RestaurantInfoBox';

function RestaurantHeader({ restaurant }) {
	// Get the session user and saved location from Redux store
	const sessionUser = useSelector((state) => state.session.user);
	const savedLocation = useSelector((state) => state.location);

	// Determine the city and state to be displayed
	const city = sessionUser?.city || savedLocation.city;
	const state = sessionUser?.state || savedLocation.state;

	const bannerImgStyle = {
		width: '100%',
		height: '400px',
		backgroundImage: `url(${restaurant.banner_img})`,
	};

	return (
		<>
			<div id='header-container'>
				<div
					className='banner-img-container'
					style={bannerImgStyle}
				>
					<h1 className='restaurant-title'>{restaurant.name}</h1>
				</div>
			</div>
		</>
	);
}

export default RestaurantHeader;
