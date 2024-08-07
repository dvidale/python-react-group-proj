from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class SimplePerson(db.Model):
    __tablename__ = "simple_people"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer)
    bio = db.Column(db.String(2000))



class CartItem(db.Model):
    __tablename__ = 'cart_items'
    
    shopping_cart_id = db.Column(db.Integer, db.ForeignKey('shopping_cart.id'), primary_key=True),
    menu_item_id = db.Column(db.Integer, db.ForeignKey('menu_item.id'), primary_key=True)

    shopping_carts = db.relationship('ShoppingCart', back_populates='cart_items')
    menu_items = db.relationship('MenuItem', back_populates='menu_items')


class ShoppingCart(db.Model):
    __tablename__='shopping_carts'

    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer)

    cart_items = db.relationship('CartItem', secondary='cart_items')
  


class MenuItem(db.Model):
    __tablename__='menu_items'

    id= db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    price = db.Column(db.Float())

    cart_items = db.relationship('CartItem', secondary='cart_items')
   



    

