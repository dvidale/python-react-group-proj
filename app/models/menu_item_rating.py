from .db import add_prefix_for_prod, db, environment, SCHEMA

class MenuItemRating(db.Model):
    __tablename__ = "menu_item_ratings"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    vote = db.Column(db.Boolean)
    menu_item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('menu_items.id')), nullable=False)
    review_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('reviews.id')), nullable=False)

    menu_item = db.relationship('MenuItem', back_populates='reviews')
    review = db.relationship('Review', back_populates='menu_items')


    def to_dict(self):
        return {
            'id': self.id,
            'vote': self.vote,
            'menu_item_id': self.menu_item_id,
            'review_id': self.review_id
        }

    def to_dict_ratings(self):
        return {
            'id': self.id,
            'ratings_count': self.ratings_count,
            'like_percentage': self.like_percentage,
            'reviews': [review.to_dict() for review in self.reviews]
        }
