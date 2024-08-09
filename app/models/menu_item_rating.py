from flask_sqlalchemy import SQLAlchemy
from .db import add_prefix_for_prod

db = SQLAlchemy()

class MenuItemRating(db.Model):
    __tablename__ = "menu_item_ratings"
    id = id = db.Column(db.Integer, primary_key=True)
    vote = db.Column(db.Boolean)
    menu_item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('menu_items.id')), nullable=False)
    review_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('reviews.id')), nullable=False)
