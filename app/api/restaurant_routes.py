from flask import Blueprint, jsonify
from app.models import db, Restaurant, MenuItem, MenuItemRating

restaurant_routes = Blueprint('restaurant', __name__)


# ? GET ALL MENU ITEMS ROUTE
@restaurant_routes.route('/<int:id>/menu-items')
def get_all_menu_items(id):
    restaurant = Restaurant.query.get(id)
    if not restaurant:
        return {"error": "Restaurant not found"}, 404
    menu_items = MenuItem.query.filter_by(restaurant_id=id).all()
    menu_items_list = [item.to_dict() for item in menu_items]
    return menu_items_list