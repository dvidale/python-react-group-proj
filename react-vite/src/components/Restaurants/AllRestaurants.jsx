import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as restaurantsActions from "../../redux/restaurants";

function AllRestaurants() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantsActions.getRestaurants());
  }, [dispatch]);

  const restaurants_state = useSelector((state) => state.restaurants);

  const restaurant_Ids = restaurants_state.Restaurant_Ids;
  
const all_restaurants = restaurants_state.AllRestaurants;

  return (
    <>
    <h1>Restaurants</h1>
    {!restaurants_state ? (
        <></>
    ):(
<>

      {restaurant_Ids.map((idx) => {
        return(
             <div key={idx}>
               <div>{all_restaurants[idx].banner_img}   </div> 
                <div> {all_restaurants[idx].name}  </div>
               <div> {all_restaurants[idx].avg_rating}  </div> 
                <div>{all_restaurants[idx].categories.map(category =>{
                  return(
                    <span key={all_restaurants[idx].categories.indexOf(category)}>{category}</span>

                  )
                })} </div>
                <div>{all_restaurants[idx].description}   </div> 
               <div> {all_restaurants[idx].address} City, State   </div>
              
             </div>
        )
      })}

</>
    )}

   
    </>
  );
}

export default AllRestaurants;
