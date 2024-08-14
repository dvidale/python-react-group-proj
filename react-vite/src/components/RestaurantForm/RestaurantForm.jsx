import './restaurant_form.css'

function RestaurantForm(){


    return(
        <>
        <div id="form-container">
        <form>
            <label htmlFor='name'>
            <input type='text'></input>
            <button type="submit">Submit</button>
            </label>
           
        </form>
        </div>
        
        </>
    )
}

export default RestaurantForm