// import '../RestaurantPage/restaurant_page.css';
import './RestaurantHeader.css';

function RestaurantHeader({ restaurant }) {
	const bannerImgStyle = {
		width: '100%',
		height: '340px',
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
