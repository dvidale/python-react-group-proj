from .db import add_prefix_for_prod, db
from .menu_item_rating import MenuItemRating


class Review(db.Model):
    __tablename__ = "reviews"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    restaurant_id = db.Column(db.Integer)
    rating = db.Column(db.Float)
    comments = db.Column(db.String(1000))
    menu_items = db.relationship('MenuItem', secondary=MenuItemRating, back_populates='reviews')
