import { useDispatch } from 'react-redux';
import { createMenuItem } from '../../redux/menuItems';
import { useModal } from '../../context/Modal';
import { useState } from 'react';

const AddMenuItemForm = ({ restaurantId }) => {
	const dispatch = useDispatch();
	const { closeModal } = useModal();
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [likePercentage, setLikePercentage] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const menuItemData = {
			name,
			price: parseFloat(price),
			description,
			like_percentage: parseInt(likePercentage, 10),
			image_url: imageUrl,
		};

		dispatch(createMenuItem(restaurantId, menuItemData)).then(() => {
			closeModal();
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add Menu Item</h2>
			<label>
				Name:
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</label>
			<label>
				Price:
				<input
					type='number'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					required
				/>
			</label>
			<label>
				Description:
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
			</label>
			<label>
				Like Percentage:
				<input
					type='number'
					value={likePercentage}
					onChange={(e) => setLikePercentage(e.target.value)}
					required
				/>
			</label>
			<label>
				Image URL:
				<input
					type='text'
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
					required
				/>
			</label>
			<button type='submit'>Add Menu Item</button>
		</form>
	);
};

export default AddMenuItemForm;
