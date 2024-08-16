import { useDispatch } from "react-redux"
import * as restaurantsActions from '../../redux/restaurants'
import { useModal } from "../../context/Modal"



function DeleteRestaurantModal(restaurantId){

// TODO : Add dynamic code to populate restaurant name in warning heading.
const {closeModal} = useModal();

const dispatch = useDispatch()


    const deleteHandler = () =>{

        dispatch(restaurantsActions.deleteRestaurant(restaurantId)).then(()=>{ alert("Delete Successful")  }).then(closeModal)

    }

    return (

        <>

        <div>
       
            <h2>Are you sure you want to delete this restaurant?</h2>
            <button onClick={deleteHandler}>Yes (Delete Restaurant)</button>
            <button>No (Cancel Delete)</button>
        </div>
        
        </>
    )
}


export default DeleteRestaurantModal