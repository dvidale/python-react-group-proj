from .db import add_prefix_for_prod, db

class MenuItem(db.Model):
    __tablename__ = "menu_items"
    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('restaurants.id')))
    name = db.Column(db.String(100), nullable=False)
    like_percentage = db.Column(db.Integer)
    description = db.Column(db.String(2000))
    price = db.Column(db.Float(2,1), nullable=False)
    image_url = db.Column(db.String(225))
    quantity = db.Column(db.Integer, nullable=False)
    ratings_count = db.Column(db.Integer)

    reviews = db.relationship('MenuItemRating', back_populates='menu_item')
    
    def to_dict(self):
        return {
            'id': self.id,
            'restaurant_id': self.restaurant_id,
            'name': self.name,
            'like_percentage': self.like_percentage,
            'description': self.description,
            'price': self.price,
            'image_url': self.image_url,
            'quantity': self.quantity,
            'ratings_count': self.ratings_count,
        }