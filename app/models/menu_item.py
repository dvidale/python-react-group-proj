from .db import db, add_prefix_for_prod

class MenuItem(db.Model):
    __tablename__='menu_items'

    id= db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('restaurants_id')))
    name = db.Column(db.String(100), nullable=False)
    like_percentage = db.Column(db.Integer)
    price = db.Column(db.Float(2,1), nullable=False)
    img_url = db.Column(db.String(225))
    quantity = db.Column(db.Integer, nullable=False)
    ratings_count = db.Column(db.Integer)