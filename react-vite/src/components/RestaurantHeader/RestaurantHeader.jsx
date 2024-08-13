
import '../RestaurantPage/restaurant_page.css'


function RestaurantHeader({restaurant}){

    
    return(

        <>
        <div id="header-container">
            <div className='banner-img-container'>
            <img alt={restaurant.name} src={restaurant.banner_img}/>
            </div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.avg_rating} (review count) • {restaurant.categories.join(" • ")} • *$ avg price* <br/>
        {restaurant.address}
        </p>
        <p>{restaurant.description}</p>


        </div>
      
        </>
    )
}

export default RestaurantHeader