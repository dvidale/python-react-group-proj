import { useState } from 'react';
import { useModal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { fetchUpdateMenuItem } from '../../redux/menuItems';

const EditMenuItemForm = ({ menuItem }) => {
	const dispatch = useDispatch();
	const { closeModal } = useModal();
	const [name, setName] = useState(menuItem.name);
	const [description, setDescription] = useState(menuItem.description);
	const [price, setPrice] = useState(menuItem.price);
	const [imageUrl, setImageUrl] = useState(menuItem.image_url);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const updatedMenuItemData = {
			name,
			description,
			price,
			image_url: imageUrl,
		};

		await dispatch(fetchUpdateMenuItem(menuItem.id, updatedMenuItemData)).then(
			() => {
				closeModal();
			}
		);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='add-menu-item-form'
		>
			<h2>Edit Menu Item</h2>
			<label>
				Name
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</label>
			<label>
				Description
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
			</label>
			<label>
				Price
				<input
					type='number'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					required
				/>
			</label>
			<label>
				Image URL
				<input
					type='text'
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
					required
				/>
			</label>
			<button type='submit'>Update Menu Item</button>
		</form>
	);
};

export default EditMenuItemForm;
