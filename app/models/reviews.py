from .db import add_prefix_for_prod, db, environment, SCHEMA
from datetime import datetime

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('restaurants.id')))
    rating = db.Column(db.Float)
    comments = db.Column(db.String(1000))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    menu_items = db.relationship('MenuItemRating', back_populates='review')
