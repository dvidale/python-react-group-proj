from flask import Blueprint, request
from ..models import db, Review, User, Restaurant

reviews = Blueprint('reviews', __name__)


@reviews.route('/<int:review_id>', methods=["PUT"])
def update_review(review_id):

    data = request.get_json()

    review = Review.query.get(review_id)

    if 'rating' in data:
        review.rating = data['rating']
    if 'comments' in data:
        review.comments = data['comments']

    db.session.commit()

    user = User.query.get(review.user_id)
    restaurant = Restaurant.query.get(review.restaurant_id)

    # Prepare the response data
    response_data = {
        "review_id": review.id,
        "rating": review.rating,
        "comments": review.comments,
        "created_at": review.created_at,
        "user_id": user.id,
        "restaurant_id": restaurant.id
    }

    return response_data
