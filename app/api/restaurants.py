from flask import Blueprint, request, jsonify
from ..models import Restaurant, Review, User, db

restaurants_route = Blueprint('restaurants', __name__)

@restaurants_route.route('/<int:restaurant_id>/reviews')
def get_restaurant_reviews(restaurant_id):

    reviews = Review.query.filter_by(restaurant_id=restaurant_id).all()

    if not reviews:
        return {"Error": "No reviews found for this restaurant"}, 404


    return reviews.to_dict()
