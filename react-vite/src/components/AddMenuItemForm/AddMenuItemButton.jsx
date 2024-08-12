import { useModal } from '../../context/Modal';
import AddMenuItemForm from './AddMenuItemForm';

const AddMenuItemButton = ({ restaurantId }) => {
	const { setModalContent, setOnModalClose } = useModal();

	const openAddMenuItemModal = () => {
		setModalContent(<AddMenuItemForm restaurantId={restaurantId} />);
		setOnModalClose(() => () => console.log('Add Menu Item Modal Closed'));
	};

	return <button onClick={openAddMenuItemModal}>Add Menu Item</button>;
};

export default AddMenuItemButton;
