from flask import Blueprint, jsonify, render_template, request
from flask_login import login_required
from app.models import db, Restaurant, MenuItem, MenuItemRating, Review, User

restaurant_routes = Blueprint('restaurants', __name__)


# ? GET ALL MENU ITEMS ROUTE
@restaurant_routes.route('/<int:id>/menu-items')
def get_all_menu_items(id):
    restaurant = Restaurant.query.get(id)
    if not restaurant:
        return {"error": "Restaurant not found"}, 404
    menu_items = MenuItem.query.filter_by(restaurant_id=id).all()
    menu_items_list = [item.to_dict() for item in menu_items]
    return menu_items_list


# GET ALL REVIEWS FOR SPECIFIC RESTAURANT
@restaurant_routes.route('/<int:id>/reviews', methods=["GET", "POST", "PUT"])
def get_restaurant_reviews(id):

    if request.method == "GET":
        reviews = Review.query.filter_by(restaurant_id=id).all()

        if not reviews:
            return {"Error": "No reviews found for this restaurant"}, 404

        reviews_list = [review.to_dict() for review in reviews]

        return reviews_list

    if request.method == "POST":
        data = request.get_json()

@restaurant_routes.route('/<int:id>/reviews', methods=["POST", "PUT"])
@login_required
def create_or_update_review(id):

    if request.method == "POST":
        data = request.get_json()

        new_review = Review (
            rating = data['rating'],
            comments = data['comments']
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict()
