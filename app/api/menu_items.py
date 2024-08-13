from flask import Blueprint, jsonify, render_template, request
from flask_login import login_required, current_user
from app.models import db, Restaurant, MenuItem, MenuItemRating, Review, User

menuitem_routes = Blueprint('menu-items', __name__)


# GET MENU ITEM RATING
@menuitem_routes.route('/<int:menuitem_id>/ratings')
def get_menu_item_ratings(menuitem_id):

    menu_item = MenuItem.query.get(menuitem_id)

    if not menu_item:
        return {'Error': 'Menu Item Not Found'}, 404

    menu_item_ratings = MenuItemRating.query.filter_by(menu_item_id=menuitem_id).all()

    if not menu_item_ratings:
        return {'Error': 'There is no rating for this Menu Item'}, 404


    # CALCULATING THE NUMBER OF VOTES AND PERCENTAGE OF LIKED VOTES
    ratings_count = len(menu_item_ratings)
    like_votes = sum([1 for rating in menu_item_ratings if rating.vote])
    percentage_liked_votes = (like_votes / ratings_count) * 100 if ratings_count > 0 else 0

    menu_item_ratings_data = {
        'menu_item_id': menu_item.id,
        'number_of_votes': ratings_count,
        'percentage_of_liked_votes': percentage_liked_votes,
    }

    return jsonify(menu_item_ratings_data)

# CREATE MENU ITEM RATING
@menuitem_routes.route('/<int:menuitem_id>/ratings', methods=["POST"])
# @login_required
def create_menu_item_ratings(menuitem_id):
     menu_item = MenuItem.query.get(menuitem_id)

     if not menu_item:
        return { 'Error': 'Menu Item Not Found'}, 404

     if request.method == "POST":
        data = request.get_json()

        new_menu_item_rating = MenuItemRating(
             vote = data['vote'],
             menu_item_id = menu_item.id
        )

        db.session.add(new_menu_item_rating)
        db.session.commit()

        return new_menu_item_rating.to_dict(), 200
