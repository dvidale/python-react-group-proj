import '../RestaurantPage/restaurant_page.css'


function RestaurantInfoBox({restaurant, city, state}){

    return(
        <>
        <div className="restaurant-info">
            <div>${restaurant.delivery_fee} delivery fee {" "}
                {restaurant.delivery_time} min
            </div>
            <div>
                {restaurant.address}
                <br/>
                {city}, {state}
            </div>
            <div>
            Sun - Sat<br/>
                Open:  {restaurant.open_time}
                <br/>
                Close: {restaurant.close_time}
            </div>
            
            </div>
        </>
    )
}

export default RestaurantInfoBox