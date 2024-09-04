import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddMenuItem } from '../../redux/menuItems';
import { useModal } from '../../context/Modal';
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
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};
		if (!name) newErrors.name = 'Name is required';
		if (!price || price <= 0 || isNaN(Number(price))) {
			newErrors.price = 'Price must be a positive number';
		}
		if (!description) newErrors.description = 'Description is required';
		if (!imageUrl) newErrors.imageUrl = 'Image URL is required';
		if (!quantity || quantity <= 0 || !Number.isInteger(Number(quantity)))
			newErrors.quantity = 'Quantity must be a positive integer';
		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate the form and get errors
		const validationErrors = validateForm();

		if (Object.keys(validationErrors).length === 0) {
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
		} else {
			setErrors(validationErrors);
		}
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
					placeholder='Double Cheese Burger, Pepperoni pizza...'
				/>
				{errors.name && <p className='error'>{errors.name}</p>}
			</label>
			<label>
				Price:
				<input
					type='number'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					placeholder='10'
				/>
				{errors.price && <p className='error'>{errors.price}</p>}
			</label>
			<label>
				Description:
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder='Describe your dish or item'
				/>
				{errors.description && <p className='error'>{errors.description}</p>}
			</label>
			<label>
				<p>Images are best at 150px by 150px.</p>
				Image URL:
				<input
					type='text'
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
					placeholder='https://exampleurl.com'
				/>
				{errors.imageUrl && <p className='error'>{errors.imageUrl}</p>}
			</label>
			<label>
				Quantity:
				<input
					type='number'
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
					placeholder='10'
				/>
				{errors.quantity && <p className='error'>{errors.quantity}</p>}
			</label>
			<button type='submit'>Add Menu Item</button>
		</form>
	);
};

export default AddMenuItemForm;
