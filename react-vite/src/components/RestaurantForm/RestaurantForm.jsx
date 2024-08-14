import { useState } from 'react'
import './restaurant_form.css'
import { useDispatch } from 'react-redux'
import * as restaurantsActions from '../../redux/restaurants'


function RestaurantForm(){

    const [name, setName] = useState("")

    const dispatch = useDispatch()

const submitHandler = (e) =>{
    e.preventDefault()
  
    const formData = {
        name
    }

    dispatch(restaurantsActions.newRestaurant(JSON.stringify(formData)))

    setName("")
}

    return(
        <>
        <div id="form-container">
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>
            <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
            <button type="submit">Submit</button>
            </label>
           
        </form>
        </div>
        
        </>
    )
}

export default RestaurantForm