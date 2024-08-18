import { useDispatch } from "react-redux";

import { delReview, fetchAllDBReviews } from "../../redux/reviews"
import { useModal } from "../../context/Modal";


const DeleteReview = ({ reviewId }) => {
  const { closeModal } = useModal();
  
  const dispatch = useDispatch();


  const handleDelete = () => {
      dispatch(delReview(reviewId))
      .then(closeModal)
      .then(() => dispatch(fetchAllDBReviews()))
  };

  return (
    <div className='delete-review-container'>
      <h2 className='header-text'>Confirm Delete</h2>
      <p>Are you sure you want to delete this review?</p>
      <div>
        <button className='button' id='delete-review' onClick={handleDelete}>Yes</button>
        <button className='button' id='keep-review' onClick={closeModal}>No</button>
      </div>
    </div>
  );
}
export default DeleteReview;
