import { useModal } from '../../context/Modal';
import './ThankYouModal.css';

const ThankYouModal = () => {
	const { closeModal } = useModal();

	return (
		<div className='thank-you-modal'>
			<h2>Thank You for Your Purchase!</h2>
			<p>We appreciate your business.</p>
			<button onClick={closeModal}>Close</button>
		</div>
	);
};

export default ThankYouModal;
