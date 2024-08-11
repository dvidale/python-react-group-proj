from flask import Blueprint
from ..models import Review

bp = Blueprint('reviews', __name__, url_prefix='/reviews')


@bp.route('/<int:review_id>', methods=["PUT"])
def update_review():

    data = request.get_json()

    review = Review.query.get(id)

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

    return user.to_dict()
