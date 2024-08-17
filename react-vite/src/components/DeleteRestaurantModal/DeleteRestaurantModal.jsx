import { useDispatch } from "react-redux"
import * as restaurantsActions from '../../redux/restaurants'
import { useModal } from "../../context/Modal"
import './delete-restaurant.css'
import { fetchReviews } from "../../redux/reviews"

function DeleteRestaurantModal({restaurantId}){

// TODO : Add dynamic code to populate restaurant name in warning heading.
const {closeModal} = useModal();

const dispatch = useDispatch()


    const deleteHandler = () =>{

        dispatch(restaurantsActions.deleteRestaurant(restaurantId))
        .then((data)=>{ alert(data.message)})
        .then(closeModal)
        .then(()=> dispatch(restaurantsActions.getRestaurants()))
        .then( (restaurantsArr)=> dispatch(fetchReviews(restaurantsArr[0].id))) // fetches the reviews for whatever restaurant is now the first one to satisfy need for id
        
    }




    return (

        <>

        <div className="delete-restaurant-modal">
       
            <h2>Are you sure you want to delete this restaurant?</h2>
            <button onClick={deleteHandler}>Yes (Delete Restaurant)</button>
            <button onClick={closeModal}>No (Cancel Delete)</button>
        </div>
        
        </>
    )
}


export default DeleteRestaurantModal