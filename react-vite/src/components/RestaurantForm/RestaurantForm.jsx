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
    const [phone_number, setPhoneNumber] = useState("")
    const [description, setDescription] = useState("")
    const [categories, setCategories] = useState([])
    const [open_time, setOpenTime] = useState("10:00")
    const [close_time, setCloseTime] = useState("22:00")
    const [delivery_time, setDeliveryTime] = useState('10-25')
    const [delivery_fee, setDeliveryFee] = useState("0.99")
    const [banner_img, setBannerImg] = useState("")
     
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
    
 
useEffect(()=>{

setError({})

},[name, 
    address,
     phone_number,
     description,
     categories,
    banner_img])

   



// Fetch current categories for multi-select options
// Fetch restaurant data

useEffect(()=>{

dispatch(restaurantsActions.getCategories())
dispatch(restaurantsActions.getRestaurants())

},[dispatch])

// create categories list
const category_list = useSelector(state => state.restaurants.allCategories)

const user = useSelector(state => state.session.user)


const checkboxHandler = (e) =>{

    const { value, checked } = e.target;

    if(checked){
        setCategories([...categories, value])
    }else {
        setCategories( categories.length && categories.filter( e => e !== value))
    }

}
if(categories.length) console.log("chosen categories", categories);

const submitHandler =  (e) =>{
    e.preventDefault()

 // * VALIDATIONS    
 const err = {}

 if(name.length < 2) err.name = "Name must have at least two characters"
 if (address.length < 4) err.address = "Street address must be at least 4 characters"

 if(!/^\d{10}$/.test(phone_number)) err.phone_number ="Phone number must be 10 digits"
 if (description.length < 20) err.description = "Description must be at least 20 characters"
 if(categories.length === 0) err.categories = "At least 1 category is required"
 if(banner_img.length > 0 && !(banner_img.endsWith("jpeg") || banner_img.endsWith("jpg") || banner_img.endsWith("png"))){
     err.banner_img = "Image URL must end in .png, .jpg, or .jpeg";
   }

 setError(err)


    if (Object.keys(err).length === 0){

   
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
        .then((serverError)=>{
            if(serverError){
                setError(serverError)
            }else{
            // redirect to updated restaurant page
            navigate(`/restaurants/${restaurant.id}`)
            }
        })

       
    }else{
    // create a new restaurant
        dispatch(restaurantsActions.newRestaurant(method, JSON.stringify( formData)))
        .then((serverError)=>{
            if(serverError){
                setError(serverError)
            }else{
                // redirect to restaurant management portal
                navigate('/restaurants/current')
            }
        })

  
    }
    
    




    }




   
}

    return(
        <>
        <div id="form-container">
            <div> <button id="back-to-res-portal-btn" className='res-page-man-btn' onClick={()=> navigate(`/restaurants/current`)}> Back to Management Portal </button> </div>
            <h1>{restaurant ? "Update a Restaurant" : "Submit a New Restaurant"}</h1>
        <form 
        onSubmit={submitHandler} 
        >
            <div>

            <label htmlFor='name'> <h3>Name</h3>
            <input className='text-field' type='text' id='name' 
            name='name' placeholder='Name'minLength={2} maxLength={50} value={name} onChange={e => setName(e.target.value)}></input>
          <p className='errors'>{error.name}</p>
            </label>
            
            </div>
       
            <div>
            <label htmlFor='address'> <h3>Street Address</h3>
            <input className='text-field' type='text' id='address' name='address' placeholder='Address' value={address} minLength={2} maxLength={50} onChange={e => setAddress(e.target.value)}></input>
        <p className='errors'>{error.address}</p>
            </label>
            </div>

           
            
            <div>
            <label htmlFor='phone'> <h3>Phone</h3>
            <input className='half-size-text-field' type='text'  inputMode="numeric" id='phone_number' name='phone_number' value={phone_number} placeholder='Phone' minLength={10} maxLength={10} onChange={e => setPhoneNumber(e.target.value)}></input>Ex. 1234567890
            </label> 
            <p className='errors'>{error.phone_number}</p>
            </div>

            <div>
            <label htmlFor='description'> <h3>Description</h3>
            <textarea id='description'name='description' minLength={20} maxLength={70} value={description} placeholder='Description' onChange={e => setDescription(e.target.value)} ></textarea>
            </label>
         <p className='errors'>{error.description}</p>
            </div>
            <div>
                <label htmlFor='categories'>
                    <div>
<h2>Categories  </h2>
<h3 className='checkbox-caption'>Select all that apply. </h3>

{category_list.map( category => 
    (
        <>
        <label htmlFor={category.categ_name} className='category-labels' key={category.id}>
    
    <input type='checkbox'
    id={category.categ_name} 
    className='category-boxes'
    name='categories'
    defaultChecked={categories.includes(category.categ_name)}
    value={category.categ_name}
    onChange={checkboxHandler}/>
{category.categ_name}

</label>
        </>
    )
)

}
<p className='errors'>{error.categories}</p>
     </div>
   </label>    
            
            </div>
            <div><h2 className='hours-heading'>Hours  </h2></div>
            <h3 > Sunday - Saturday  </h3> 
                   
            <div className='time-fields'>
            <label htmlFor='open_time'> 
            <input type='time' min='00:00' max='12:00' id='open_time' name='open_time' value={open_time} onChange={e => setOpenTime(e.target.value)}></input>
            </label>
            
            <label htmlFor='close_time'> 
            <input type='time' min='12:00' max='24:00' id='close_time' name='close_time' value={close_time} onChange={e => setCloseTime(e.target.value)}></input>
            </label>
            </div>


            <div className='delivery-time'>
            <label htmlFor='delivery_time'><h3>Delivery Time</h3>  </label>
            <select name='delivery_fee' id='delivery_fee' value={delivery_time} onChange={e => setDeliveryTime(e.target.value)}>
                <option value={`10-25`} >10 - 25</option>
                <option value={`25-45`}>25 - 45</option>
                <option value={`45-60`}>45 - 60</option>
            </select><h3>min  </h3>

            </div>
            <div className='delivery-time'>
            <label htmlFor='delivery_fee'> <h3>Delivery Fee $  </h3></label>
            <select name='delivery_fee' id='delivery_fee' value={delivery_fee} onChange={e => setDeliveryFee(e.target.value)}>
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
            <p className='errors'>{error.banner_img}</p>
            </div>
           
           <div className='res-form-submit-btn'>

            <button className='res-page-man-btn' type="submit" disabled={Object.keys(error).length > 0}>{!restaurant ? `Submit` : `Update`} Your Restaurant</button>
           </div>
            
           
        </form>
        </div>
        
        </>
    )
}

export default RestaurantForm