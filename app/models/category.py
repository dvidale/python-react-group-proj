from .db import db, environment, SCHEMA, add_prefix_for_prod

class Category(db.Model):
    __tablename__ = 'categories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    categ_name = db.Column(db.String(50), nullable=False)
    img_url = db.Column(db.String(100), nullable=False)

    # Relationship with Restaurant through RestaurantCategory
    restaurants = db.relationship('Restaurant', secondary=add_prefix_for_prod('restaurant_categories'), back_populates='categories')

    def __repr__(self):
        return f'<Category {self.categ_name}>'
    
    def to_dict(self):
       return {
           'id': self.id,
           'categ_name':self.categ_name,
           'img_url':self.img_url
       }
