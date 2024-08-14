import { useEffect, useState } from 'react'
import './restaurant_form.css'
import { useDispatch, useSelector } from 'react-redux'
import * as restaurantsActions from '../../redux/restaurants'
import { useParams } from 'react-router-dom'

function RestaurantForm(){

    //if an id is not provided, present this form blank for creating a new restaurant
    //if an id IS provided, load the data for that restaurant in each field and present as an update form for that restaurant 

    const {id} = useParams()

    const restaurant = useSelector(state => state.restaurants.AllRestaurants[id])

    const method = restaurant ? "PUT": "POST"

    const [name, setName] = useState(restaurant ? restaurant.name : "")
    const [address, setAddress] = useState(restaurant ? restaurant.address : "")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [phone_number, setPhoneNumber] = useState(restaurant ? restaurant.phone_number : "")
    const [description, setDescription] = useState(restaurant ? restaurant.description : "")
    const [categories, setCategories] = useState(restaurant ? restaurant.categories : "")
    const [open_time, setOpenTime] = useState(restaurant ? restaurant.open_time : "")
    const [close_time, setCloseTime] = useState(restaurant ? restaurant.close_time : "")
    const [delivery_time, setDeliveryTime] = useState(restaurant ? restaurant.delivery_time : "")
    const [delivery_fee, setDeliveryFee] = useState(restaurant ? restaurant.delivery_fee : "")
    const [banner_img, setBannerImg] = useState(restaurant ? restaurant.banner_img : "")

    const [error, setError] = useState({})
   

    
    const dispatch = useDispatch()

useEffect(()=>{

    const err = {}

    name.length < 2 ? err[name] = "Name must have at least two characters" : ""

    setError(err)

},[name])

// Load current categories for multi-select options

useEffect(()=>{

dispatch(restaurantsActions.getCategories())

},[dispatch])

// create categories list

const category_list = useSelector(state => state.restaurants.allCategories)




const submitHandler = (e) =>{
    e.preventDefault()

    
  
    const formData = {
        name,
        address,
        phone_number,
        description,
        categories,
        open_time,
        close_time,
        delivery_time,
        delivery_fee,
        banner_img
    }

    dispatch(restaurantsActions.newRestaurant(JSON.stringify(formData)))

    setName("")
}
// TODO: Refactor these form fields as a form field component, passing in the specifics as props
    return(
        <>
        <div id="form-container">
            <h1>{restaurant ? "Update" : "Submit"} A {!restaurant && "New"} Restaurant</h1>
        <form onSubmit={submitHandler} method={method} >
            <div>
            <label htmlFor='name'> Name
            <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
       
            <div>
            <label htmlFor='address'> Address
            <input type='text' id='address' name='address' value={address} onChange={e => setAddress(e.target.value)}></input>
            </label>
            </div>

            {!restaurant && 
            <div>
            <label htmlFor='city'> City
            <input type='text' id='city' name='city' value={city} onChange={e => setCity(e.target.value)}></input>
            </label>
            </div>
            }

            <div>
            <label htmlFor='state'> State
            <input type='text' id='state' name='state' value={state} onChange={e => setState(e.target.value)}></input>
            </label>
            </div>
            <div>
            <label htmlFor='zip'> Zip
            <input type='text' id='zip' name='zip' value={zip} onChange={e => setZip(e.target.value)}></input>
            </label>
            </div>
            
            <div>
            <label htmlFor='phone'> Phone
            <input type='text' id='phone_number' name='phone_number' value={phone_number} onChange={e => setPhoneNumber(e.target.value)}></input>
            </label>
            </div>

            <div>
            <label htmlFor='description'> Description
            <input type='text' id='description' name='description' value={description} onChange={e => setDescription(e.target.value)}></input>
            </label>
            </div>
            <div>
            <label htmlFor='categories'> Categories (choose all that apply)
            <input type='text' id='categories' name='categories' value={categories} onChange={e => setCategories(e.target.value)}></input>
            </label>

            {category_list.map( category =>
                (
                    <input key={category.id}type='checkbox' id={category.categ_name} name={category.categ_name} value={category.categ_name} ></input>
                )
            )

}
            </div>
            <div>Open and Closing Hours</div>
            <div>
            <label htmlFor='open_time'> Monday
            <input type='time' min='00:00' max='24:00' id='open_time' name='open_time' value={open_time} onChange={e => setOpenTime(e.target.value)}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='00:00' max='24:00' id='close_time' name='close_time' value={close_time} onChange={e => setCloseTime(e.target.value)}></input>
            </label>
            </div>

        
            <div>
            <label htmlFor='open_time'> Tuesday
            <input type='time' min='00:00' max='24:00' id='open_time' name='open_time' value={open_time}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='00:00' max='24:00' id='close_time' name='close_time' value={close_time}></input>
            </label>
            </div>
            <div>
            <label htmlFor='open_time'> Wednesday
            <input type='time' min='00:00' max='24:00' id='open_time' name='open_time' value={open_time}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='00:00' max='24:00' id='close_time' name='close_time' value={close_time}></input>
            </label>
            </div>
            <div>
            <label htmlFor='open_time'> Thursday
            <input type='time' min='00:00' max='24:00' id='open_time' name='open_time' value={open_time}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='00:00' max='24:00' id='close_time' name='close_time' value={close_time}></input>
            </label>
            </div>
            <div>
            <label htmlFor='open_time'> Friday
            <input type='time' min='00:00' max='24:00' id='open_time' name='open_time' value={open_time}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='00:00' max='24:00' id='close_time' name='close_time' value={close_time}></input>
            </label>
            </div>
            <div>
            <label htmlFor='open_time'> Saturday
            <input type='time' min='00:00' max='24:00' id='open_time' name='open_time' value={open_time}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='00:00' max='24:00' id='close_time' name='close_time' value={close_time}></input>
            </label>
            </div>
            <div>
            <label htmlFor='open_time'> Sunday
            <input type='time' min='00:00' max='24:00' id='open_time' name='open_time' value={open_time}></input>
            </label>
            
            <label htmlFor='close_time'>
            <input type='time' min='00:00' max='24:00' id='close_time' name='close_time' value={close_time}></input>
            </label>
            </div>

            <div>
            <label htmlFor='delivery_time'> Delivery Time
            <input type='text' id='delivery_time' name='delivery_time' placeholder='ex. 35-50' value={delivery_time} onChange={e => setDeliveryTime(e.target.value)}></input> min
            </label>
            </div>
            <div>
            <label htmlFor='delivery_fee'> Delivery Fee $</label>
            <select name='delivery_fee' id='delivery_fee' value={delivery_fee} onChange={e => setDeliveryFee(e.target.value)}>
                <option value={0.00} >None</option>
                <option value={0.99}>0.99</option>
                <option value={1.99}>1.99</option>
                <option value={2.99}>2.99</option>
                <option value={3.99}>3.99</option>
                <option value={4.99}>4.99</option>
            </select>
            
            </div>
            <div>
            <label htmlFor='banner_img'> Banner Image URL
            <input type='url' id='banner_img' name='banner_img' value={banner_img} onChange={e => setBannerImg(e.target.value)}></input>
            </label>
            </div>
           
            <button type="submit" disabled={Object.keys(error).length > 0}>Submit</button>
            
           
        </form>
        </div>
        
        </>
    )
}

export default RestaurantForm