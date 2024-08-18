import { useModal } from '../../context/Modal';
import './DeleteConfirmationModal.css';

const DeleteConfirmationModal = ({ onConfirm }) => {
	const { closeModal } = useModal();

	// Function to handle clicking outside the modal to close it
	const handleBackgroundClick = (e) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	return (
		<div
			className='delete-confirmation-modal'
			onClick={handleBackgroundClick}
		>
			<div className='delete-confirmation-modal-content'>
				<div className='delete-confirmation-modal-header'>
					<h2>Confirm Deletion</h2>
					<button
						className='close-btn'
						onClick={closeModal}
					>
						&times;
					</button>
				</div>
				<div className='delete-confirmation-modal-body'>
					<p>Are you sure you want to delete this item?</p>
				</div>
				<div className='delete-confirmation-modal-footer'>
					<button
						className='cancel-btn'
						onClick={closeModal}
					>
						Cancel
					</button>
					<button
						className='confirm-btn'
						onClick={onConfirm}
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirmationModal;
