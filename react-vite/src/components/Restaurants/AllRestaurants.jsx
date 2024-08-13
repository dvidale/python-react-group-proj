import { useSelector, useDispatch, } from "react-redux";
import { useEffect } from "react";
import * as restaurantsActions from "../../redux/restaurants";
import { Link} from "react-router-dom";
import './all_restaurants.css'

function AllRestaurants() {
  const dispatch = useDispatch();

  
const all_restaurants = useSelector(state => state.restaurants.AllRestaurants) 

  useEffect(() => {
    dispatch(restaurantsActions.getRestaurants());
  }, [dispatch]);
 

  return ( 
    <>
    <h1>Restaurants</h1>
   
        {all_restaurants.map((restaurant) => 
       (
        
             <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>  
             <div className="restaurant-tile">
               <div>{restaurant.banner_img}   </div> 
                <div> {restaurant.name}  </div>
               <div> {restaurant.avg_rating}  </div> 
                <div>{restaurant.categories.map(category =>{
                  return(
                    <span key={restaurant.categories.indexOf(category)}>{category}</span>

                  )
                })} </div>
                <div>{restaurant.description}   </div> 
               <div> {restaurant.address} City, State   </div>
             
             </div>
             </Link>
        )
      )}
          
    </>
  );
}

export default AllRestaurants;
