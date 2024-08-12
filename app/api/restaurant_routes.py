from flask import Blueprint, jsonify
from app.models import Restaurant, MenuItem, db
from app.forms.add_menu_item import MenuItemForm

restaurant_routes = Blueprint('restaurant', __name__)


# ? GET ALL MENU ITEMS 
@restaurant_routes.route('/<int:id>/menu-items')
def get_all_menu_items(id):
    restaurant = Restaurant.query.get(id)
    if not restaurant:
        return {"error": "Restaurant not found"}, 404
    menu_items = MenuItem.query.filter_by(restaurant_id=id).all()
    menu_items_list = [item.to_dict() for item in menu_items]
    return menu_items_list

#? ADD NEW MENU ITEM 
@restaurant_routes.route('/<int:id>/menu-items/new', methods=['POST'])
def add_new_menu_item(id):
    restaurant = Restaurant.query.get(id)
    if not restaurant:
        return {"error": "Restaurant not found"}, 404
    
    form = MenuItemForm()
    if form.validate_on_submit():
        new_menu_item = MenuItem(
            restaurant_id=id,
            name=form.name.data,
            like_percentage=form.like_percentage.data,
            price=form.price.data,
            image_url=form.image_url.data,
            description=form.description.data,
            quantity=form.quantity.data,
            ratings_count=form.ratings_count.data
        )

        db.session.add(new_menu_item)
        db.session.commit()
        return new_menu_item.to_dict()
    return {"errors": form.errors}