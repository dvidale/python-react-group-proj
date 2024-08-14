import '../RestaurantPage/restaurant_page.css'


function RestaurantInfoBox({restaurant}){

    return(
        <>
        <div className="restaurant-info">
            <div>${restaurant.delivery_fee} delivery fee {" "}
                {restaurant.delivery_time} 
            </div>
            <div>
                {restaurant.address}
                <br/>
                City, State
            </div>
            <div>
                Open: Sun - Sat {restaurant.open_time}
                <br/>
                Close: {restaurant.close_time}
            </div>
            
            </div>
        </>
    )
}

export default RestaurantInfoBox