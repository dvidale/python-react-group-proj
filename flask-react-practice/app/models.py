from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class SimplePerson(db.Model):
    __tablename__ = "simple_people"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer)
    bio = db.Column(db.String(2000))


class ShoppingCart(db.Model):
    __tablename__='shopping_carts'

    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer)


class MenuItem(db.Model):
    __tablename__='menu_items'

    id= db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    price = db.Column(db.Float())

   

class CartItem(db.Model):
    __tablename__ = 'cart_items'
    id = db.Column(db.Integer, primary_key=True)
    shopping_cart_id = db.Column(db.Integer, db.ForeignKey('shopping_carts.id'), nullable=False)
    menu_item_id = db.Column(db.Integer, db.ForeignKey('menu_items.id'), nullable=False)

    shopping_cart = db.relationship('ShoppingCart', back_populates='cart_item')
    

