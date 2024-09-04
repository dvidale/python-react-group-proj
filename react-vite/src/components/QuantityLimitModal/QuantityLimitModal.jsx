import { useModal } from '../../context/Modal';
import './QuantityLimitModal.css';

const QuantityLimitModal = () => {
	const { closeModal } = useModal();

	return (
		<div className='quantity-limit-modal'>
			<h2>Limit Reached</h2>
			<p>Each item has a limit of 5 per order.</p>
			<button
				className='limit-modal-btn'
				onClick={closeModal}
			>
				OK
			</button>
		</div>
	);
};

export default QuantityLimitModal;
