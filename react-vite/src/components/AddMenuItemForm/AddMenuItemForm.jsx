import { useDispatch } from 'react-redux';
import { fetchAddMenuItem } from '../../redux/menuItems';
import { useModal } from '../../context/Modal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddMenuItem.css'; // Import the CSS file

const AddMenuItemForm = () => {
	const { id } = useParams();
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
			like_percentage: 0,
			price: parseFloat(price),
			image_url: imageUrl,
			description,
			quantity: parseInt(quantity),
		};

		dispatch(fetchAddMenuItem(id, menuItemData)).then(() => {
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
					placeholder='Double Cheese Burger, Pepperoni pizza...'
				/>
			</label>
			<label>
				Price:
				<input
					type='number'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					required
					placeholder='10'
				/>
			</label>
			<label>
				Description:
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
					placeholder='Describe your dish or item'
				/>
			</label>
			<label>
				Image URL:
				<input
					type='text'
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
					required
					placeholder='https://exampleurl.com'
				/>
			</label>
			<label>
				Quantity:
				<input
					type='number'
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
					required
					placeholder='10'
				/>
			</label>
			<button type='submit'>Add Menu Item</button>
		</form>
	);
};

export default AddMenuItemForm;
