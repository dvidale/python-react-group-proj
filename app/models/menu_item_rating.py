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
