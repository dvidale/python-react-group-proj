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

	const handleCategoryClick = (category) => {
		if (selectedCategory === category.categ_name) {
			setSelectedCategory(null);
		} else {
			setSelectedCategory(category.categ_name);
		}
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
				</div>
			)}
		</div>
	);
}

export default RestaurantCategories;
