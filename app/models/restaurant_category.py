from .db import db, add_prefix_for_prod

class RestaurantCategory(db.Model):
    __tablename__ = 'restaurant_categories'
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('restaurants.id')), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')), nullable=False)

    restaurant = db.relationship('Restaurant', back_populates='categories')
    category = db.relationship('Category', back_populates='restaurants')