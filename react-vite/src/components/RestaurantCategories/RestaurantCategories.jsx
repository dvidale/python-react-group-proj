import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as restaurantsActions from '../../redux/restaurants'


function RestaurantCategories(){

    const dispatch = useDispatch()

    const categories = useSelector(state => state.restaurants.allCategories)

    useEffect( () =>{

        dispatch(restaurantsActions.getCategories())


    },[dispatch])

    return(
    <>{!categories ? (
        <></>
    ):(
        <>
    <h2>
      Explore by category
    </h2>
    {categories.map( category =>{
            return(
            <div key={category.id} >
                {category.categ_name}
                <img alt={category.categ_name} src={category.img_url}/>
            </div>
            )
        })}

    </>
    )}
     </>
    )
}


export default RestaurantCategories
