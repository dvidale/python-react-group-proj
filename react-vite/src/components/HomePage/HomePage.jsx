import "./home_page.css";
import RestaurantCategories from "../RestaurantCategories";
import AllRestaurants from "../Restaurants/AllRestaurants";
import HomeDeliveryHeader from "../HomeDeliveryHeader/HomeDeliveryHeader";

function HomePage() {

  const location = true;

  return (
    // needs to render a logged-out / no address version vs logged-out w/ address version vs logged-in version
    <>
      {location ? (
        <>
          <HomeDeliveryHeader />
          <RestaurantCategories />
          <hr />
          <AllRestaurants />
        </>
      ) : (
        <>
          <h1>Order delivery near you</h1>
          <form method="POST">
            <label htmlFor="address">
        <input type='text'placeholder="Enter delivery address"></input>
        </label>
        <button type="submit">Submit</button>
          </form>
        </>
      )}
    </>
  );
}

export default HomePage;
