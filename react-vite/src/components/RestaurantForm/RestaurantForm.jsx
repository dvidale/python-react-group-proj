import { useEffect, useState } from 'react'
import './restaurant_form.css'
import { useDispatch, useSelector } from 'react-redux'
import * as restaurantsActions from '../../redux/restaurants'
import { useParams, useNavigate } from 'react-router-dom'

function RestaurantForm(){

    //if an id is not provided, present this form blank for creating a new restaurant
    //if an id IS provided, load the data for that restaurant in each field and present as an update form for that restaurant 

    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const restaurant = useSelector(state => state.restaurants.AllRestaurants[id])

//set method for api route for update or new restaurant
    const method = restaurant ? `PUT` : `POST`

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [description, setDescription] = useState("")
    const [categories, setCategories] = useState([])
    const [open_time, setOpenTime] = useState("10:00")
    const [close_time, setCloseTime] = useState("22:00")
    const [delivery_time, setDeliveryTime] = useState("")
    const [delivery_fee, setDeliveryFee] = useState("")
    const [banner_img, setBannerImg] = useState("https://")
     


    const [error, setError] = useState({})

    //load restaurant data in the form for updates
    useEffect(()=>{

        if(restaurant){
            setName(restaurant.name)
            setAddress(restaurant.address)
            setPhoneNumber(restaurant.phone_number)
            setDescription(restaurant.description)
            setCategories(restaurant.categories)
            setOpenTime(restaurant.open_time)
            setCloseTime(restaurant.close_time)
            setDeliveryTime(restaurant.delivery_time)
            setDeliveryFee(restaurant.delivery_fee)
            setBannerImg(restaurant.banner_img)
        }

    },[restaurant])
    
 



// Fetch current categories for multi-select options
// Fetch restaurant data

useEffect(()=>{

dispatch(restaurantsActions.getCategories())
dispatch(restaurantsActions.getRestaurants())

},[dispatch])

// create categories list
const category_list = useSelector(state => state.restaurants.allCategories)

const user = useSelector(state => state.session.user)





const submitHandler = (e) =>{
    e.preventDefault()

    // * VALIDATIONS    
    const err = {}

    name.length < 2 ? err[name] = "Name must have at least two characters" : ""
    if (address.length < 1) err[address] = "Address required"
    if (phone_number.length < 10) err[phone_number]= "Phone number must be 10 characters"
    if (description.length < 20) err[description] = "Description must be at least 20 characters"

    setError(err)

  
    const formData = {
        owner_id: user.id,
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

    
    if(restaurant){
    // update the restaurant

        // add the restaurant id to request

        const id = restaurant.id

        dispatch(restaurantsActions.updateRestaurant(id, method, JSON.stringify(formData)))

        // redirect to updated restaurant page

        navigate(`/restaurants/${restaurant.id}`)
    }else{
    // create a new restaurant
        dispatch(restaurantsActions.newRestaurant(method, JSON.stringify( formData)))

    // redirect to restaurant management portal
  
        navigate('/restaurants/current')
    }
    
    

   
}
// TODO: Refactor these form fields as a form field component, passing in the specifics as props
    return(
        <>
        <div id="form-container">
            <div> <button id="back-to-res-portal-btn" className='res-page-man-btn' onClick={()=> navigate(`/restaurants/current`)}> Back to Management Portal </button> </div>
            <h1>{restaurant ? "Update a Restaurant" : "Submit a New Restaurant"}</h1>
        <form onSubmit={submitHandler} method={method} >
            <div>
            <label htmlFor='name'>
            <input className='text-field' type='text' id='name' 
            name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            </div>
       
            <div>
            <label htmlFor='address'>
            <input className='text-field' type='text' id='address' name='address' placeholder='Address' value={address} onChange={e => setAddress(e.target.value)}></input>
            </label>
            </div>

            {!restaurant && 
            <div>
            <label htmlFor='city'> 
            <input className='half-size-text-field' type='text' id='city' name='city' value={city} placeholder='City' onChange={e => setCity(e.target.value)}></input>
            </label>
                           
            <label htmlFor='state'> 
            <input className='quarter-size-text-field' type='text' id='state' name='state' value={state.toUpperCase()} placeholder='State' maxLength={2} onChange={e => setState(e.target.value)}></input> {`ex. CA`}
            </label>
            </div> }

            {!restaurant && 
            <div>
            <label htmlFor='zip'> 
            <input className='half-size-text-field' type='text' inputMode='numeric' id='zip' name='zip' value={zip} placeholder='Zip' onChange={e => setZip(e.target.value)}></input>
            </label>
            </div>
            }
            
            <div>
            <label htmlFor='phone'> 
            <input className='half-size-text-field' type='text'  inputMode="numeric" id='phone_number' name='phone_number' value={phone_number} placeholder='Phone' maxLength={12} onChange={e => setPhoneNumber(e.target.value)}></input>Ex. 123-456-7890
            </label> 
            </div>

            <div>
            <label htmlFor='description'> 
            <textarea id='description'name='description' value={description} placeholder='Description' onChange={e => setDescription(e.target.value)} ></textarea>
            </label>
            </div>
            <div>
                <label htmlFor='categories'>
                    <div>
<h2>Categories  </h2> <h3>( ⊞/⌘ + Click  to select multiple) </h3>

                    </div>
               
              
            <select name="categories" value={categories} multiple={true}
             onChange={e => {
                const options = [...e.target.selectedOptions];
                const values = options.map(option => option.value);
                setCategories(values)}}
            >
            {category_list.map( category =>
                (
                    <>
                    <option key={category.id} 
                    id={category.categ_name} 
                    name={category.categ_name} 
                    value={category.categ_name}
                    > 
                    {category.categ_name}
                    </option>
                    </>
                )
            )

}            
                </select>   
                </label>   
            
            </div>
            <div><h2 className='hours-heading'>Open and Closing Hours  </h2></div>
            <div className='days-hours-container'>

           
            <h3 className='day-heading'> Monday  </h3> 
            <div className='time-fields'>
            <label htmlFor='open_time'> 
            <input type='time' min='00:00' max='24:00' id='open_time' name='open_time' value={open_time} onChange={e => setOpenTime(e.target.value)}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='00:00' max='24:00' id='close_time' name='close_time' value={close_time} onChange={e => setCloseTime(e.target.value)}></input>
            </label>
            </div>

        
            <h3 className='day-heading'>Tuesday </h3> 
            <div className='time-fields'>
            <label htmlFor='t_open_time'> 
            <input type='time' min='00:00' max='24:00' id='t_open_time' name='open_time' defaultValue={open_time}></input>
            </label>
            
            <label htmlFor='t_close_time'> 

            <input type='time' min='00:00' max='24:00' id='t_close_time' name='close_time' defaultValue={close_time}></input>
            </label>
            </div>
            <h3 className='day-heading'>Wednesday</h3> 
            <div className='time-fields'>
            <label htmlFor='w_open_time'> 
            <input type='time' min='00:00' max='24:00' id='w_open_time' name='w_open_time' defaultValue={open_time}></input>
            </label>
            
            <label htmlFor='w_close_time'> 
            <input type='time' min='00:00' max='24:00' id='w_close_time' name='w_close_time' defaultValue={close_time}></input>
            </label>
            </div>
            <h3 className='day-heading'>Thursday</h3> 
            <div className='time-fields'>
            <label htmlFor='open_time'> 
            <input type='time' min='00:00' max='24:00' id='th_open_time' name='open_time' defaultValue={open_time}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='00:00' max='24:00' id='th_close_time' name='close_time' defaultValue={close_time}></input>
            </label>
            </div>
            <h3 className='day-heading'>Friday</h3> 
            <div className='time-fields'>
            <label htmlFor='open_time'> 
            <input type='time' min='00:00' max='24:00' id='f_open_time' name='open_time' defaultValue={open_time}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='00:00' max='24:00' id='f_close_time' name='close_time' value={close_time}></input>
            </label>
            </div>
            <h3 className='day-heading'>Saturday</h3> 
            <div className='time-fields'>
            <label htmlFor='open_time'> 
            <input type='time' min='00:00' max='24:00' id='s_open_time' name='open_time' defaultValue={open_time}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='00:00' max='24:00' id='s_close_time' name='close_time' defaultValue={close_time}></input>
            </label>
            </div>
            <h3 className='day-heading'>Sunday</h3>
            <div className='time-fields'>
            <label htmlFor='open_time'> 
            <input type='time' min='00:00' max='24:00' id='su_open_time' name='open_time' defaultValue={open_time}></input>
            </label>
            
            <label htmlFor='close_time'>
            <input type='time' min='00:00' max='24:00' id='su_close_time' name='close_time' defaultValue={close_time}></input>
            </label>
            </div>
            </div>

            <div className='delivery-time'>
            <label htmlFor='delivery_time'><h3>Delivery Time</h3>  </label>
            <select name='delivery_fee' id='delivery_fee' value={delivery_time} onChange={e => setDeliveryFee(e.target.value)}>
                <option value={`10-25`} >10 - 25</option>
                <option value={`25-45`}>25 - 45</option>
                <option value={`45-60`}>45 - 60</option>
            </select><h3>min  </h3>

            </div>
            <div className='delivery-time'>
            <label htmlFor='delivery_fee'> <h3>Delivery Fee $  </h3></label>
            <select name='delivery_fee' id='delivery_fee' value={delivery_fee} onChange={e => setDeliveryFee(e.target.value)}>
                <option value={0.00} >None</option>
                <option value={0.99}>0.99</option>
                <option value={1.99}>1.99</option>
                <option value={2.99}>2.99</option>
                <option value={3.99}>3.99</option>
                <option value={4.99}>4.99</option>
            </select>
            
            </div>
            <div className='banner-img-field'>
            <label htmlFor='banner_img'> <h3 className='banner-img-heading'> Banner Image URL </h3>
            <input type='url' id='banner_img' name='banner_img' value={banner_img} onChange={e => setBannerImg(e.target.value)}></input>
            </label>
            </div>
           
           <div className='res-form-submit-btn'>

            <button className='res-page-man-btn' type="submit" disabled={Object.keys(error).length > 0}>Submit Your Restaurant</button>
           </div>
            
           
        </form>
        </div>
        
        </>
    )
}

export default RestaurantForm