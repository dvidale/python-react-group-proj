from .db import db, add_prefix_for_prod, environment, SCHEMA

class Restaurant(db.Model):
    __tablename__ = 'restaurants'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False, primary_key=True)
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
    
    def print_run():
        print(">>>> inside restaurant model")

    # print_run()