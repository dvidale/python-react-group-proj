import { useModal } from "../../context/Modal"
import '../DeleteRestaurantModal/delete-restaurant.css'

function ConfirmDeleteModal(){

    const { closeModal } = useModal();



    return (
        <>
        <div className="delete-restaurant-modal">
            <h2>Delete Successful</h2>
            <button className="cancel-delete-btn" type='button' onClick={()=> closeModal()}>Ok</button>
        </div>
        </>
    )
}

export default ConfirmDeleteModal