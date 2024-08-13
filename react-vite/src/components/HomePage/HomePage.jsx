import './home_page.css'
import RestaurantCategories from '../RestaurantCategories'
import AllRestaurants from '../Restaurants/AllRestaurants'

function HomePage(){



    return(
// needs to render a logged-out / no address version vs logged-out w/ address version vs logged-in version
<>
        <RestaurantCategories/>
        <hr/>
        <AllRestaurants/>
        </>
    )
}


export default HomePage