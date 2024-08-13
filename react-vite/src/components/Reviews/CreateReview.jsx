import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const createReview = () => {
    const { id } = useParams()

    const [review, setReview] = useState()
    const [stars, setStars] = useState()
    const [comments, setComments] = useState()


}
