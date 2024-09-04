import { useModal } from '../../context/Modal';
import EditMenuItemForm from './EditMenuItemForm'; // Import the new edit form

const EditMenuItemButton = ({ menuItem }) => {
	const { setModalContent, setOnModalClose } = useModal();

	const openEditMenuItemModal = () => {
		setModalContent(<EditMenuItemForm menuItem={menuItem} />);
		setOnModalClose();
	};

	return <button onClick={openEditMenuItemModal}>Edit</button>;
};

export default EditMenuItemButton;
