import { useSelector } from "react-redux"
import AllRestaurants from "../Restaurants/AllRestaurants"


function RestaurantManagement(){


    

    
    const ownerFilter = (toggle) =>{
        return toggle

    }    

    ownerFilter(true)

    return(
        <>
        <h1>Restaurant Management</h1>
        <AllRestaurants ownerFilter={ownerFilter} />
        </>
    )
}


export default RestaurantManagement