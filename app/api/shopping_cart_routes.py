from flask import Blueprint, session, jsonify
from app.models import ShoppingCart,CartItem,MenuItem, db
from flask_login import current_user

shopping_cart_routes = Blueprint('shopping_cart', __name__)

@shopping_cart_routes.route('/current', methods=['GET'])
def get_current_shopping_cart():
    shopping_cart = ShoppingCart.query.filter_by(user_id=current_user.id).first()
    cart_items = CartItem.query.filter_by(shopping_cart_id=shopping_cart.id).all()
    cart_items_data = [
            {
                'id': item.id,
                'menu_item_id': item.menu_item.id,
                'name': item.menu_item.name,
                'price': f"{item.menu_item.price:.2f}",
                'image_url': item.menu_item.image_url
            }
            for item in cart_items
        ]
    return cart_items_data

@shopping_cart_routes.route('/current/<int:cart_item_id>/remove', methods=['DELETE'])
def remove_cart_item(cart_item_id):
    cart_item = CartItem.query.get(cart_item_id)
    if not cart_item:
        return {"error": "Cart item not found"}, 404
    
    db.session.delete(cart_item)
    db.session.commit()
    
    return {"message": "Cart item removed successfully"}, 200