import './home_page.css';
import RestaurantCategories from '../RestaurantCategories';
import AllRestaurants from '../Restaurants/AllRestaurants';
import HomeDeliveryHeader from '../HomeDeliveryHeader/HomeDeliveryHeader';
import LocationForm from '../LocationForm/LocationForm';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function HomePage() {
	const sessionUser = useSelector((state) => state.session.user);
	const savedLocation = useSelector((state) => state.location);

	const ownerFilter = (toggle) =>{
        return toggle

    }    

	ownerFilter(false)
	// Determine the city and state to be used
	const city = sessionUser?.city || savedLocation.city;
	const state = sessionUser?.state || savedLocation.state;

	const [selectedCategory, setSelectedCategory] = useState(null);

	return (
		<div className='home-page'>
			{city && state ? (
				<>
					<HomeDeliveryHeader />
					<RestaurantCategories setSelectedCategory={setSelectedCategory} />
					<hr />
					<AllRestaurants
						city={city}
						state={state}
						selectedCategory={selectedCategory}
						ownerFilter={ownerFilter}
					/>
				</>
			) : (
				<>
					<LocationForm />
					<RestaurantCategories setSelectedCategory={setSelectedCategory} />
					<hr />
					<AllRestaurants />
				</>
			)}
		</div>
	);
}

export default HomePage;
