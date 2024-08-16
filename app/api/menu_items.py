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


    #---- CALCULATING THE NUMBER OF VOTES AND PERCENTAGE OF LIKED VOTES ----#

    #-- counts the number of ratings by grabbing the length of menu_item_ratings
    ratings_count = len(menu_item_ratings)

    #-- sums the number of "like" votes (e.g. 'if rating.vote' grabs all votes that are True and omits votes that are False.
    like_votes = sum([1 for rating in menu_item_ratings if rating.vote])

    #-- divides 'like_votes' by 'ratings_count' to calculate % of liked votes. If there are no ratings, then % is equal to 0.
    percentage_liked_votes = (like_votes / ratings_count) * 100 if ratings_count > 0 else 0

    data = {
            'menu_item_id': menu_item.id,
            'number_of_votes': ratings_count,
            'percentage_of_liked_votes': percentage_liked_votes,
    }

    return jsonify(data)

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


#? DELETE MENU_ITEM
@menuitem_routes.route('/<int:id>', methods=["DELETE"])
def delete_menu_item(id):
    menu_item = MenuItem.query.get(id)
    if not menu_item:
        return {"message": "Menu item not found"}, 404  # Return 404 for not found
    
    db.session.delete(menu_item)
    db.session.commit()
    
    return {"message": "Successfully Deleted Item"}, 200 

@menuitem_routes.route('/all')
def get_all_menu_items():
    menu_items = MenuItem.query.all()
    menu_items_list = [menu_item.to_dict() for menu_item in menu_items] 
    return menu_items_list.to_dict()