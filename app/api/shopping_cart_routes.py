from flask import Blueprint, session, jsonify, request
from app.models import ShoppingCart,CartItem,MenuItem, db
from flask_login import current_user

shopping_cart_routes = Blueprint('shopping_cart', __name__)

# ? ------------------------- GET ALL CART ITEMS
@shopping_cart_routes.route('/current', methods=['GET'])
def get_current_shopping_cart():
    shopping_cart = ShoppingCart.query.filter_by(user_id=current_user.id).first()
    
    if not shopping_cart:
        return []  # Return an empty list if no shopping cart exists

    cart_items = CartItem.query.filter_by(shopping_cart_id=shopping_cart.id).all()
    
    # Use the to_dict method for each cart item
    cart_items_data = [item.to_dict() for item in cart_items]
    
    return cart_items_data


# ? -------------------------ADD CART ITEM
@shopping_cart_routes.route('/current/new', methods=['POST'])
def add_cart_item():
    data = request.get_json()
    user_id = current_user.id

    # Fetch the user's shopping cart
    shopping_cart = ShoppingCart.query.filter_by(user_id=user_id).first()
    if not shopping_cart:
        return {"error": "Shopping cart not found"}, 404

    menu_item = MenuItem.query.get(data['menu_item_id'])
    if not menu_item:
        return {"error": "Menu item not found"}, 404

    # Check if the item is already in the cart
    existing_cart_item = CartItem.query.filter_by(
        shopping_cart_id=shopping_cart.id,
        menu_item_id=menu_item.id
    ).first()

    if existing_cart_item:
        return {"error": "Item already in cart"}, 400

    # Create a new cart item
    new_cart_item = CartItem(
        shopping_cart_id=shopping_cart.id,
        menu_item_id=menu_item.id,
        item_quantity=1  # Default quantity to 1
    )

    try:
        db.session.add(new_cart_item)
        db.session.commit()
    except Exception as e:
        db.session.rollback()  # Rollback in case of an error
        print(f"Error adding cart item: {e}")
        return {"error": "Internal server error"}, 500

    return new_cart_item.to_dict(), 201

    
@shopping_cart_routes.route('/current/<int:id>/update', methods=['POST'])
def update_cart_item(id):
        # Fetch the cart item using the route parameter 'id'
        cart_item = CartItem.query.get(id)
        if not cart_item:
            return {"error": "Cart item not found"}, 404
        
        # Parse the request data
        data = request.get_json()
        if data is None:
            return {"error": "Invalid data"}, 400
        
        # Update item quantity
        if 'decrement' in data and data['decrement']:
            cart_item.item_quantity -= 1
        else:
            cart_item.item_quantity += 1

        # Remove item if quantity is zero or less
        if cart_item.item_quantity <= 0:
            db.session.delete(cart_item)
        else:
            db.session.add(cart_item)
        
        # Commit changes
        db.session.commit()
        
        # Return updated cart item
        return cart_item.to_dict(), 200

# ? -------------------------DELETE CART ITEM
@shopping_cart_routes.route('/current/<int:cart_item_id>/remove', methods=['DELETE'])
def remove_cart_item(cart_item_id):
    cart_item = CartItem.query.get(cart_item_id)
    if not cart_item:
        return {"error": "Cart item not found"}, 404
    
    db.session.delete(cart_item)
    db.session.commit()
    
    return {"message": "Cart item removed successfully"}, 200