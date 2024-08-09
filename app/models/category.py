from .db import db
from .restaurant_category import RestaurantCategory

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    categ_name = db.Column(db.String(50), nullable=False)

    restaurants = db.relationship('Restaurant', secondary=RestaurantCategory, back_populates='categories')

    def __repr__(self):
        return f'<Category {self.categ_name}>'