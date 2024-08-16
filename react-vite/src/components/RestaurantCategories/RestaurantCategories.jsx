import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as restaurantsActions from '../../redux/restaurants';

function RestaurantCategories({ setSelectedCategory }) {
	const dispatch = useDispatch();

	const categories = useSelector((state) => state.restaurants.allCategories);

	useEffect(() => {
		dispatch(restaurantsActions.getCategories());
	}, [dispatch]);

	const handleCategoryClick = (category) => {
		setSelectedCategory(category.categ_name);
	};

	return (
		<div className=''>
			{categories && categories.length > 0 && (
				<div className='categories'>
					<h2>Explore by Category</h2>
					{categories.map((category) => (
						<div
							key={category.id}
							className='category-structure'
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
