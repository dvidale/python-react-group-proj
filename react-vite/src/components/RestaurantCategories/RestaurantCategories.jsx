import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as restaurantsActions from '../../redux/restaurants';
import './RestaurantCategory.css';

function RestaurantCategories({ selectedCategory, setSelectedCategory }) {
	const dispatch = useDispatch();

	const categories = useSelector((state) => state.restaurants.allCategories);

	useEffect(() => {
		dispatch(restaurantsActions.getCategories());
	}, [dispatch]);

	// Log selectedCategory on change
	useEffect(() => {
		console.log('Selected Category:', selectedCategory); // Debugging: Check selectedCategory
	}, [selectedCategory]);

	const handleCategoryClick = (category) => {
		setSelectedCategory(category.categ_name); // Ensure this is the correct key for category name
	};

	const handleSetNull = () => {
		setSelectedCategory(null); // Clear the category selection
	};

	return (
		<div className='category-section'>
			<h2>Explore by Category</h2>
			{categories && categories.length > 0 && (
				<div className='category-wrapper'>
					{categories.map((category) => (
						<div
							key={category.id}
							className={`category-structure ${
								selectedCategory === category.categ_name ? 'selected' : ''
							}`}
							onClick={() => handleCategoryClick(category)}
						>
							<img
								alt={category.categ_name}
								src={category.img_url}
							/>
							<p>{category.categ_name}</p>
						</div>
					))}
					<div
						className='category-structure'
						onClick={handleSetNull}
					>
						<p>all categories</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default RestaurantCategories;
