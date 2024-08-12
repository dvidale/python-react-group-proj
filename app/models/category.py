from .db import db, environment, SCHEMA

print(">>>> inside category model")

class Category(db.Model):
    __tablename__ = 'categories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    categ_name = db.Column(db.String(50), nullable=False)
    img_url = db.Column(db.String(100), nullable=False)

    # Relationship with Restaurant through RestaurantCategory
    restaurants = db.relationship('Restaurant', secondary='restaurant_categories', back_populates='categories')

    def __repr__(self):
        return f'<Category {self.categ_name}>'