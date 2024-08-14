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
            <div>
            <label htmlFor='name'> Name
            <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
            <div>
            <label htmlFor='address'> Address
            <input type='text' id='address' name='address' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
            <div>
            <label htmlFor='name'> Phone
            <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
            <div>
            <label htmlFor='name'> Description
            <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
            <div>
            <label htmlFor='name'> Opening Time
            <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
            <div>
            <label htmlFor='name'> Closing Time
            <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
            <div>
            <label htmlFor='name'> Delivery Time
            <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
            <div>
            <label htmlFor='name'> Delivery Fee
            <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
            <div>
            <label htmlFor='name'> Banner Image URL
            <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
           
            <button type="submit">Submit</button>
            
           
        </form>
        </div>
        
        </>
    )
}

export default RestaurantForm