import './restaurant_header.css'


function RestaurantHeader({restaurant}){

    
    return(

        <>
        <div id="header-container">
            <img alt={restaurant.name} src={restaurant.banner_img}/>
        <h1>{restaurant.name}</h1>

        </div>
      
        </>
    )
}

export default RestaurantHeader