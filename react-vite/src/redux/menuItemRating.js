const GET_MENU_ITEM_RATING = 'menuItemRating/GET_ALL_RATINGS'
const ADD_MENU_ITEM_RATING = 'menuItemRating/ADD_RATING'


//-------------------- ACTIONS --------------------//

export const getAllRatings = (data) => {
    return {
        type: GET_MENU_ITEM_RATING,
        payload: data
    }
}

export const createRating = (data) => {
    return {
        type: ADD_MENU_ITEM_RATING,
        payload: data
    }
}

//-------------------- THUNKS --------------------//


export const fetchRatings = (menuItemId) => async (dispatch) => {
    const response = await fetch(`/api/menu-items/${menuItemId}/ratings`)

    if (response.ok) {
        const data = await response.json()
        dispatch(getAllRatings(data))
    }
}

export const addRatings = (menuItemId) => async (dispatch) => {
    const response = await fetch(`/api/menu-items/${menuItemId}/ratings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menuItemId)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(createRating(data))
    }
}

//-------------------- REDUCER --------------------//

const initialState = {
    getMenuItemRating: {},
    createMenuItemRating: {}
};

const menuItemRatingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_ITEM_RATING:
            return { ...state, getMenuItemRating: action.payload }
        case ADD_MENU_ITEM_RATING:
            return { ...state, createMenuItemRating: action.payload }
        default:
            return state;
    }
}

export default menuItemRatingsReducer
