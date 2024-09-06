from flask import Blueprint, request
from flask_login import login_required
from sqlalchemy import desc
from ..models import db, Review, User, Restaurant

review_routes = Blueprint('reviews', __name__)

# ? GET ALL REVIEWS
@review_routes.route('/')
def get_all_reviews():
    reviews_query = Review.query.all()

    if not reviews_query:
        return {'Error': 'There are no reviews.'}, 404

    reviews_lst = [ review.to_dict() for review in reviews_query]

    return reviews_lst, 200


# GET A SPECIFIC REVIEW
@review_routes.route('/<int:review_id>')
def get_one_review(review_id):

    review = Review.query.get(review_id)

    if not review:
        return {'Error': 'This review does not exist.'}

    return review.to_dict(), 200



# EDIT A REVIEW
@review_routes.route('/<int:review_id>', methods=["PUT"])
def update_review(review_id):

    data = request.get_json()
    review = Review.query.get(review_id)

    if not review:
        return {"Error": "Review could not be found."}, 404

    if not data:
        return {"Error": "Error processing data."}, 404

    if 'rating' in data:
        review.rating = data['rating']
    if 'comments' in data:
        review.comments = data['comments']

    db.session.commit()

    return review.to_dict(), 200


# DELETE A REVIEW
@review_routes.route('/<int:review_id>', methods=["DELETE"])
def delete_review(review_id):

    review = Review.query.get(review_id)

    if not review:
        return {"Error": "Review could not be found."}, 404

    db.session.delete(review)
    db.session.commit()

    return {'message': 'Review was successfully deleted.'}, 200
