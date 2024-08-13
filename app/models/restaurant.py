from .db import db, add_prefix_for_prod, environment, SCHEMA
from .category import Category
from .restaurant_category import RestaurantCategory

class Restaurant(db.Model):
    __tablename__ = 'restaurants'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(225), nullable=False)
    phone_number = db.Column(db.String(10), nullable=False)
    email = db.Column(db.String(225), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    banner_img = db.Column(db.String(225), nullable=False)
    avg_rating = db.Column(db.Numeric(2, 1), nullable=False)
    day_of_week = db.Column(db.Integer, nullable=False)
    open_time = db.Column(db.DateTime, nullable=False)
    close_time = db.Column(db.DateTime, nullable=False)
    delivery_time = db.Column(db.String(50), nullable=False)
    delivery_fee = db.Column(db.Float(), nullable=False)

    categories = db.relationship('Category', secondary=add_prefix_for_prod('restaurant_categories'), back_populates='restaurants')

    def __repr__(self):
        return f'<Restaurant {self.name}>'


    def to_dict(self):
        return {
            'id':self.id,
            'owner_id':self.owner_id,
            'name':self.name,
            'address':self.address,
            'phone_number':self.phone_number,
            'description':self.description,
            'banner_img':self.banner_img,
            'avg_rating':self.avg_rating,
            'day_of_week':self.day_of_week,
            'open_time':self.open_time,
            'close_time':self.close_time,
            'delivery_item':self.delivery_time,
            'delivery_fee': self.delivery_fee,
            'categories': [category.to_dict()['categ_name'] for category in (Category.query.join(RestaurantCategory).filter(RestaurantCategory.restaurant_id== self.id).all())]
        }

