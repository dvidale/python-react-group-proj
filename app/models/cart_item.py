from .db import db, add_prefix_for_prod, environment, SCHEMA
from .menu_item import MenuItem

class CartItem(db.Model):
    __tablename__ = 'cart_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    shopping_cart_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('shopping_carts.id')), nullable=False)
    menu_item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('menu_items.id')), nullable=False)
    item_quantity=db.Column(db.Integer, default=1)

    shopping_cart = db.relationship('ShoppingCart', back_populates='cart_items')
    menu_item = db.relationship('MenuItem', back_populates='cart_items')

    def to_dict(self):
        menu_item = MenuItem.query.get(self.menu_item_id)

        return {
            'id': self.id,
            'shopping_cart_id': self.shopping_cart_id,
            'menu_item_id': self.menu_item_id,
            'item_quantity': self.item_quantity,
            'restaurant_id': menu_item.restaurant_id, 
            'name': menu_item.name,
            'description': menu_item.description,
            'price': f"{menu_item.price:.2f}",
            'image_url': menu_item.image_url,
            'quantity': menu_item.quantity
        }