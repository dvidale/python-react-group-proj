from flask_sqlalchemy import SQLAlchemy
from .db import add_prefix_for_prod
from .menu_item_rating import MenuItemRating

db = SQLAlchemy()

class MenuItem(db.Model):
    __tablename__ = "menu_items"
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer)
    name = db.Column(db.String(100), nullable=False)
    like_percentage = db.Column(db.Integer)
    description = db.Column(db.String(2000))
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(225))
    quantity = db.Column(db.Integer, nullable=False)
    reviews_count = db.Column(db.Integer)
    reviews = db.relationship('Review', secondary=MenuItemRating, backref='menu_items')
