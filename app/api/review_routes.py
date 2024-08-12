from flask import Blueprint, request
from flask_login import login_required
from ..models import db, Review, User, Restaurant

review_routes = Blueprint('reviews', __name__)

# EDIT A REVIEW
@review_routes.route('/<int:review_id>', methods=["PUT"])
def update_review(review_id):

    data = request.get_json()
    review = Review.query.get(review_id)
    restaurant = Restaurant.query.get(review.restaurant_id)

    if 'rating' in data:
        review.rating = data['rating']
    if 'comments' in data:
        review.comments = data['comments']

    db.session.commit()

    return review.to_dict()


# DELETE A REVIEW
@review_routes.route('/<int:review_id>', methods=["DELETE"])
def delete_review(review_id):

    review = Review.query.get(review_id)
    db.session.delete(review)
    db.session.commit()

    return {'message': 'Review was successfully deleted'}
