import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRatings } from '../../redux/menuItemRating';


const MenuItemRating = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const menuItemRatings = useSelector(state => (state.menuItemRating.getMenuItemRating))
    // const createMenuItemRatings = useSelector((state => state.menuItemRating.createMenuItemRating))


    useEffect(() => {
        dispatch(fetchRatings(id))
    }, [dispatch, id])

    if (!menuItemRatings) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                Percentage of Liked Votes: {menuItemRatings.percentage_of_liked_votes}%
            </div>
            <div>
                Number of Votes: {menuItemRatings.number_of_votes}
            </div>
        </>
    );
};


export default MenuItemRating;
