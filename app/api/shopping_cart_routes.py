from flask import Blueprint, session, jsonify, request
from app.models import ShoppingCart,CartItem,MenuItem, db
from flask_login import current_user

shopping_cart_routes = Blueprint('shopping_cart', __name__)

# ? ------------------------- GET ALL CART ITEMS
@shopping_cart_routes.route('/current', methods=['GET'])
def get_current_shopping_cart():
    shopping_cart = ShoppingCart.query.filter_by(user_id=current_user.id).first()
    if not shopping_cart:
        return [] # Return an empty list if no shopping cart exists

    cart_items = CartItem.query.filter_by(shopping_cart_id=shopping_cart.id).all()
    cart_items_data = [
        {
            'id': item.id,
            'menu_item_id': item.menu_item.id,
            'name': item.menu_item.name,
            'price': f"{item.menu_item.price:.2f}",
            'image_url': item.menu_item.image_url,
            'item_quantity': item.item_quantity  # Include quantity in the response
        }
        for item in cart_items
    ]
    return cart_items_data


# ? -------------------------ADD CART ITEM
@shopping_cart_routes.route('/current/new', methods=['POST'])
def add_cart_item():
    data = request.get_json()
    user_id = current_user.id
    shopping_cart = ShoppingCart.query.filter_by(user_id=user_id).first()

    if not shopping_cart:
        shopping_cart = ShoppingCart(user_id=user_id)
        db.session.add(shopping_cart)
        db.session.commit()

    existing_cart_item = CartItem.query.filter_by(
        shopping_cart_id=shopping_cart.id,
        menu_item_id=data['menu_item_id']
    ).first()

    if existing_cart_item:
        existing_cart_item.item_quantity += 1
        db.session.commit()
        return {
            "id": existing_cart_item.id,
            "menu_item_id": existing_cart_item.menu_item.id,
            "name": existing_cart_item.menu_item.name,
            "price": f"{existing_cart_item.menu_item.price:.2f}",
            "image_url": existing_cart_item.menu_item.image_url,
            "item_quantity": existing_cart_item.item_quantity,
        }, 200
    else:
        # Add a new item to the cart
        menu_item = MenuItem.query.get(data['menu_item_id'])
        if not menu_item:
            return {"error": "Menu item not found"}, 404

        new_cart_item = CartItem(
            shopping_cart_id=shopping_cart.id,
            menu_item_id=menu_item.id,
            item_quantity=1  # Default quantity to 1
        )

        db.session.add(new_cart_item)
        db.session.commit()

        return {
            "id": new_cart_item.id,
            "menu_item_id": menu_item.id,
            "name": menu_item.name,
            "price": f"{menu_item.price:.2f}",
            "image_url": menu_item.image_url,
            "item_quantity": new_cart_item.item_quantity,
        }, 201
    
# ? -------------------------UPDATE CART ITEM (Increment Quantity)
@shopping_cart_routes.route('/current/<int:cart_item_id>/update', methods=['POST'])
def update_cart_item(cart_item_id):
    cart_item = CartItem.query.get(cart_item_id)
    if not cart_item:
        return {"error": "Cart item not found"}, 404
    
    data = request.get_json()
    if 'decrement' in data and data['decrement']:
        cart_item.item_quantity -= 1
    else:
        cart_item.item_quantity += 1

    if cart_item.item_quantity <= 0:
        db.session.delete(cart_item)
    else:
        db.session.add(cart_item)
    
    db.session.commit()
    
    return {
        "id": cart_item.id,
        "menu_item_id": cart_item.menu_item.id,
        "name": cart_item.menu_item.name,
        "price": f"{cart_item.menu_item.price:.2f}",
        "image_url": cart_item.menu_item.image_url,
        "item_quantity": cart_item.item_quantity,
    }, 200

# ? -------------------------DELETE CART ITEM
@shopping_cart_routes.route('/current/<int:cart_item_id>/remove', methods=['DELETE'])
def remove_cart_item(cart_item_id):
    cart_item = CartItem.query.get(cart_item_id)
    if not cart_item:
        return {"error": "Cart item not found"}, 404
    
    db.session.delete(cart_item)
    db.session.commit()
    
    return {"message": "Cart item removed successfully"}, 200