from .db import db, add_prefix_for_prod, environment, SCHEMA






class CartItem(db.Model):
    __tablename__ = 'cart_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    shopping_cart_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('shopping_carts.id')), nullable=False)
    menu_item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('menu_items.id')), nullable=False)

    shopping_cart = db.relationship('ShoppingCart', back_populates='cart_items')