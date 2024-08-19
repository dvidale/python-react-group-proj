import './RestaurantHeader.css';

function RestaurantHeader({ restaurant }) {
	const bannerImgStyle = {
		width: '100%',
		backgroundImage: `url(${restaurant.banner_img})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		position: 'relative', // Ensure the overlay is positioned correctly
	};

	return (
		<div id='header-container'>
			<div
				className='banner-img-container'
				style={bannerImgStyle}
			>
				<div className='dark-overlay'></div> {/* Overlay for darkening */}
			</div>
		</div>
	);
}

export default RestaurantHeader;
