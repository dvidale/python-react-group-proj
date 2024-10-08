import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as restaurantsActions from '../../redux/restaurants';
import { setSelectedCategory } from '../../redux/restaurants';
import './RestaurantCategory.css';
import { useModal } from '../../context/Modal';
import ServerMessageModal from '../ServerErrorModal/ServerMessageModal';

function RestaurantCategories() {
	const dispatch = useDispatch();

	const { setModalContent} = useModal();

	const categories = useSelector((state) => state.restaurants.allCategories);
	const selectedCategory = useSelector(
		(state) => state.restaurants.selectedCategory
	);

	useEffect(() => {
		dispatch(restaurantsActions.getCategories())
		.then((serverError)=> {if(serverError){
			setModalContent(<ServerMessageModal message={serverError.error}  />)
		}} );
	}, [dispatch, setModalContent]);

	const handleCategoryClick = (category) => {
		if (selectedCategory === category.categ_name) {
			dispatch(setSelectedCategory(null));
		} else {
			dispatch(setSelectedCategory(category.categ_name));
		}
	};

	return (
		<div className='category-section'>
			<h2 className='category-title'>Explore by Category</h2>
			{categories && categories.length > 0 && (
				<div className='category-wrapper'>
					<div
						className={`category-structure ${
							!selectedCategory ? 'selected' : ''
						}`}
						onClick={() => dispatch(setSelectedCategory(null))}
					>
						<p className='cat-text'>All Categories</p>
					</div>
					{categories.map((category) => (
						<div
							key={category.id}
							className={`category-structure ${
								selectedCategory === category.categ_name ? 'selected' : ''
							}`}
							onClick={() => handleCategoryClick(category)}
						>
							<div className='categ-image-div'>
								<img
									className='categ-image'
									alt={category.categ_name}
									src={category.img_url}
								/>
							</div>
							<p className='cat-text'>{category.categ_name}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default RestaurantCategories;
