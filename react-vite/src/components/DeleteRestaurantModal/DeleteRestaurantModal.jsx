import { useDispatch } from "react-redux"
import * as restaurantsActions from '../../redux/restaurants'
import { useModal } from "../../context/Modal"
import './delete-restaurant.css'
import '../OwnerRestaurants/OwnerRestaurants.css'
import { fetchReviews } from "../../redux/reviews"
import { useNavigate } from "react-router-dom"
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal"

function DeleteRestaurantModal({restaurantId}){


const {setModalContent, closeModal} = useModal();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const deleteHandler = () => {
		dispatch(restaurantsActions.deleteRestaurant(restaurantId))
			.then(closeModal)
			.then(() => navigate(`/restaurants/current`))
            .then(()=> setModalContent( <ConfirmDeleteModal/>))
			.then(() => dispatch(restaurantsActions.getRestaurants()))
			.then((restaurantsArr) => dispatch(fetchReviews(restaurantsArr[0].id))); // fetches the reviews for whatever restaurant is now the first one to satisfy need for id
	};

    return (

        <>

        <div className="delete-restaurant-modal">
       
            <h2>Are you sure you want to<br/> delete this restaurant?</h2>
            <div>
            <button className="owner-delete-btn" onClick={deleteHandler}>Yes (Delete Restaurant)</button>
            <button className="cancel-delete-btn" onClick={closeModal}>No (Cancel Delete)</button>
            </div>
        </div>
        
        </>
    )
}

export default DeleteRestaurantModal;
