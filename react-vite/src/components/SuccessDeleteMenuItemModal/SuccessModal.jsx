// SuccessModal.js
import { useModal } from '../../context/Modal';
import './SuccessModal.css';

const SuccessModal = ({ message }) => {
	const { closeModal } = useModal();

	return (
		<div className='success-modal'>
			<h2>{message}</h2>
			<button
				className='ok-conf-btn'
				onClick={closeModal}
			>
				Close
			</button>
		</div>
	);
};

export default SuccessModal;
