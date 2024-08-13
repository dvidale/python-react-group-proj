from flask import Blueprint, jsonify, render_template, request
from flask_login import login_required, current_user
from app.models import db, Restaurant, MenuItem, MenuItemRating, Review, User

menuitem_routes = Blueprint('menu-items', __name__)

# ? ADD NEW MENU ITEM 
@menuitem_routes.route('/<int:id>/menu-items/new', methods=['POST'])
def add_new_menu_item(id):
    restaurant = Restaurant.query.get(id)
    if not restaurant:
        return { 'Error': 'Restaurant Not Found'}, 404

    if request.method == "POST":
        data = request.get_json()

        new_review = Review (
            rating = data['rating'],
            comments = data['comments'],
            restaurant_id = restaurant.id,
            user_id = current_user.id
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict(), 200

@menuitem_routes.route('/<int:menuitem_id>/ratings')
def get_menu_item_ratings(menuitem_id):
    menu_item = MenuItem.query.get(menuitem_id)
    ratings = menu_item.reviews

    return ratings.to_dict()
