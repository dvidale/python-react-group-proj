import { useModal } from '../../context/Modal';
import '../RestaurantPage/restaurant_page.css'

function OpenModalButton({
	modalComponent,
	buttonText,
	onButtonClick,
	onModalClose,
	className,
}) {
	const { setModalContent, setOnModalClose } = useModal();

	const onClick = () => {
		if (onModalClose) setOnModalClose(onModalClose);
		setModalContent(modalComponent);
		if (typeof onButtonClick === 'function') onButtonClick();
	};

	return (
		<button
			onClick={onClick}
			className={className}
		>
			{buttonText}
		</button>
	);
}

export default OpenModalButton;
