import { useModal } from '../../context/Modal';
import EditMenuItemForm from './EditMenuItemForm'; // Import the new edit form

const EditMenuItemButton = ({ menuItem }) => {
	const { setModalContent, setOnModalClose } = useModal();

	const openEditMenuItemModal = () => {
		setModalContent(<EditMenuItemForm menuItem={menuItem} />); // Pass menuItem data
		setOnModalClose(() => () => console.log('Edit Menu Item Modal Closed'));
	};

	return <button onClick={openEditMenuItemModal}>Edit</button>;
};

export default EditMenuItemButton;
