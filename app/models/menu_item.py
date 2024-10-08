from .db import add_prefix_for_prod, db, environment, SCHEMA

class MenuItem(db.Model):
    __tablename__ = "menu_items"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('restaurants.id')))
    name = db.Column(db.String(100), nullable=False)
    like_percentage = db.Column(db.Integer)
    description = db.Column(db.String(2000))
    price = db.Column(db.Float(2, 1), nullable=False)
    image_url = db.Column(db.String(225))
    quantity = db.Column(db.Integer)
    ratings_count = db.Column(db.Integer)

    # Updated relationship name
    menu_item_ratings = db.relationship('MenuItemRating', back_populates='menu_item', cascade='all, delete-orphan')
    cart_items = db.relationship('CartItem', back_populates='menu_item', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'restaurant_id': self.restaurant_id,
            'name': self.name,
            'like_percentage': self.like_percentage,
            'description': self.description,
            'price': f"{self.price:.2f}",
            'image_url': self.image_url,
            'quantity': self.quantity,
            'ratings_count': self.ratings_count,
        }

    def to_dict_review(self):
        return {
            'id': self.id,
        }

    def to_dict_ratings(self):
        return {
            'id': self.id,
            'ratings_count': self.ratings_count,
            'like_percentage': self.like_percentage,
            'reviews': [review.to_dict_review() for review in self.menu_item_ratings]
        }
