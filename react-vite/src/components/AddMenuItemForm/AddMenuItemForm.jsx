import { useDispatch } from 'react-redux';
import { fetchAddMenuItem } from '../../redux/menuItems';
import { useModal } from '../../context/Modal';
import { useState } from 'react';
import './AddMenuItem.css'; // Import the CSS file

const AddMenuItemForm = ({ restaurantId }) => {
	const dispatch = useDispatch();
	const { closeModal } = useModal();
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [quantity, setQuantity] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const menuItemData = {
			name,
			price: parseFloat(price),
			description,
			image_url: imageUrl,
			quantity: parseInt(quantity),
		};

		dispatch(fetchAddMenuItem(restaurantId, menuItemData)).then(() => {
			closeModal();
		});
	};

	return (
		<form
			className='add-menu-item-form'
			onSubmit={handleSubmit}
		>
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
				Image URL:
				<input
					type='text'
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
					required
				/>
			</label>
			<label>
				Quantity:
				<input
					type='number'
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
					required
				/>
			</label>
			<button type='submit'>Add Menu Item</button>
		</form>
	);
};

export default AddMenuItemForm;
