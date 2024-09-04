from .db import add_prefix_for_prod, db, environment, SCHEMA
from ..models import User
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

    # menu_item_rating = db.relationship('MenuItemRating', back_populates='review')
    menu_item_rating = db.relationship('MenuItemRating', cascade='all, delete-orphan')


    def to_dict(self):
        user = User.query.get(self.user_id)

        return {
            'id': self.id,
            'user_id': self.user_id,
            'user_first_name': user.first_name,
            'user_last_name': user.last_name,
            'restaurant_id': self.restaurant_id,
            'rating': self.rating,
            'comments': self.comments,
            'created_at': self.created_at.strftime("%a, %b %d, %Y at %I:%M %p") ,
        }
