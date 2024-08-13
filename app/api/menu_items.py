from flask import Blueprint, jsonify, render_template, request
from flask_login import login_required, current_user
from app.models import db, Restaurant, MenuItem, MenuItemRating, Review, User

menuitem_routes = Blueprint('menu-items', __name__)

@menuitem_routes.route('/<int:menuitem_id>/ratings')
def get_menu_item_ratings(menuitem_id):
    menu_item = MenuItem.query.get(menuitem_id)
    ratings = menu_item.reviews

    return ratings.to_dict()


#? DELETE MENU_ITEM
