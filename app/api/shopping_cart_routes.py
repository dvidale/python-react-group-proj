from flask import Blueprint, jsonify
from app.models import User, ShoppingCart, db
from flask_login import current_user

shopping_cart_routes = Blueprint('shopping_cart', __name__)

@shopping_cart_routes.route('/currrent')
def get_shopping_cart():
    shopping_cart = ShoppingCart.query.filter_by(user_id=current_user.id).first()
    cart_items = [item.to_dict() for item in shopping_cart.cart_items]
    return jsonify({"shopping_cart": {"id": shopping_cart.id, "items": cart_items}})