import { useModal } from '../../context/Modal';
import ShoppingCartModal from './ShoppingCartModal';
import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCartButton = () => {
	const { setModalContent, setOnModalClose } = useModal();

	const openShoppingCartModal = () => {
		setModalContent(<ShoppingCartModal />);
		setOnModalClose(() => () => console.log('Shopping Cart Modal Closed'));
	};

	return (
		<button onClick={openShoppingCartModal}>
			<FaShoppingCart />
		</button>
	);
};

export default ShoppingCartButton;
