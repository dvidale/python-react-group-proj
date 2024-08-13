import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuItemsList from '../MenuItemsList/MenuItemsList';
import AddMenuItemButton from '../AddMenuItemForm/AddMenuItemButton';
// ! DON'T REMOVE BELOW COMMENTS
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

export const RestaurantPage = () => {
	// const dispatch = useDispatch();
	const { id } = useParams();
	const sessionUser = useSelector((state) => state.session.user);

	// useEffect(() => {

	// }, [dispatch, id]);

	const isOwner =
		sessionUser && restaurant && sessionUser.id === restaurant.ownerId;

	return (
		<>
			<h1>RESTAURANT PAGE</h1>
			{/* <h1>{restaurant.name}</h1> */}
			{isOwner && <AddMenuItemButton />}
			<MenuItemsList id={id} />
		</>
	);
};
