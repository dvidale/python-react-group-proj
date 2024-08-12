from .db import db, add_prefix_for_prod, environment, SCHEMA


class ShoppingCart(db.Model):
    __tablename__='shopping_carts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    
    cart_items = db.relationship('CartItem', back_populates='shopping_cart')

    