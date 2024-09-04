import { useModal } from '../../context/Modal';
import ShoppingCartModal from './ShoppingCartModal';
import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCartButton = ({ cartItemCount }) => {
	const { setModalContent, setOnModalClose } = useModal();

	const openShoppingCartModal = () => {
		setModalContent(<ShoppingCartModal />);
		setOnModalClose();
	};

	return (
		<button onClick={openShoppingCartModal}>
			<FaShoppingCart />
			{cartItemCount > 0 && <span className='cart-count'>{cartItemCount}</span>}
		</button>
	);
};

export default ShoppingCartButton;
