from flask import Blueprint, jsonify, render_template, request
from flask_login import login_required, current_user
from app.models import db, Restaurant, MenuItem, MenuItemRating, Category, Review, User
from app.forms.add_menu_item import MenuItemForm

restaurant_routes = Blueprint('restaurants', __name__)

# ? GET ALL CATEGORIES
@restaurant_routes.route('/categories')
def get_all_categories():
    categories = Category.query.all()
    categories_list = [category.to_dict() for category in categories]

    return categories_list

# ?  GET ALL RESTAURANTS

@restaurant_routes.route('/')
def get_all_restaurants():
    restaurants = Restaurant.query.all()
    restaurants_list = [restaurant.to_dict() for restaurant in restaurants]

    return restaurants_list

# # ? GET A RESTAURANT BY ID
# @restaurant_routes.route('/<int:id>')
# def get_restaurant_by_id(id): 
#     restaurant_by_id = Restaurant.query.get(id)
#     return restaurant_by_id

# ? GET ALL MENU ITEMS
@restaurant_routes.route('/<int:id>/menu-items')
def get_all_menu_items(id):
    restaurant = Restaurant.query.get(id)
    if not restaurant:
        return {"error": "Restaurant not found"}, 404
    menu_items = MenuItem.query.filter_by(restaurant_id=id).all()
    menu_items_list = [item.to_dict() for item in menu_items]
    return menu_items_list

# ? GET ALL REVIEWS FOR SPECIFIC RESTAURANT
@restaurant_routes.route('/<int:id>/reviews')
def get_restaurant_reviews(id):

    if request.method == "GET":
        reviews = Review.query.filter_by(restaurant_id=id).all()

        if not reviews:
            return {"Error": "No reviews found for this restaurant"}, 404

        reviews_list = [review.to_dict() for review in reviews]

        return reviews_list

# ? CREATE A REVIEW
@restaurant_routes.route('/<int:restaurant_id>/reviews', methods=["POST"])
# @login_required
def create_review(restaurant_id):
    restaurant = Restaurant.query.get(restaurant_id)