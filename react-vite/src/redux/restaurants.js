
//*------------------------------------ACTION TYPES

const GET_ALL_CATEGORIES = 'categories/GET_ALL_CATEGORIES'


//*-----------------------------------ACTION CREATORS

export function getAllCategories(data){

    return{
        type:GET_ALL_CATEGORIES,
        payload: data
    }

}


//* -------------------------------------THUNKS

export const getCategories = () => async (dispatch) =>{

    const response = await fetch('/api/restaurants/categories')
    if(response.ok){
        const data = await response.json();
        dispatch(getAllCategories(data))
    
        return data
    }else{
        
        return "Error"
    }
   
};

//* -------------------------------------REDUCERS

const initialState = {
    allCategories :[],
    AllRestaurants:[]
}

const restaurantsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return{
                ...state, allCategories: action.payload
            }
            default:
                return state
    }



}

export default restaurantsReducer