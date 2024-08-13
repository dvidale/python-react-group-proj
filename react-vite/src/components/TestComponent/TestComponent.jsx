import './test_component.css'
import { useDispatch, useSelector } from 'react-redux'
import * as restaurantsActions from '../../redux/restaurants'


function TestComponent(){

    const dispatch = useDispatch()


    // async()=>{
    //     dispatch(restaurantsActions.getCategories)
    // }

    const categories = useSelector(state => state.restaurants.allCategories)
    console.log(categories)

    return(
        <>
        <div id='test-div'>
        Hello from Test
        {categories.map( category =>{
            return(
            <div key={category.id}>
                {category.categ_name}
            </div>
            )
        })}
        </div>
        </>
    )
}

export default TestComponent