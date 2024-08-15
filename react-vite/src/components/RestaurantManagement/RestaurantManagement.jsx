// import { useSelector } from "react-redux"
import AllRestaurants from "../Restaurants/AllRestaurants"


function RestaurantManagement(){


    // const owner = useSelector(state => state.session.user)

    return(
        <>
        <h1>Restaurant Management</h1>
        <AllRestaurants />
        </>
    )
}


export default RestaurantManagement