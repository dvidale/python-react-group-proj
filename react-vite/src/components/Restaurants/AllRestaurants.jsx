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
      {restaurant_Ids.map((idx) => {
        return(
             <div key={idx}>{all_restaurants[idx].name}</div>
        )
      })}
    </>
  );
}

export default AllRestaurants;
