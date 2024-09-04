from app.models import db, environment, SCHEMA
from sqlalchemy.sql import text
from ..models import ShoppingCart

def seed_shopping_carts():
 
    shopping_carts = [
        
        ShoppingCart(id=1, user_id=1),
        ShoppingCart(id=2, user_id=2),
        ShoppingCart(id=3, user_id=3),
        ShoppingCart(id=4, user_id=4),
        ShoppingCart(id=5, user_id=5),
        ShoppingCart(id=6, user_id=6),
        ShoppingCart(id=7, user_id=7),
        ShoppingCart(id=8, user_id=8),
        ShoppingCart(id=9, user_id=9),
        ShoppingCart(id=10, user_id=10),
        ShoppingCart(id=11, user_id=11),
        ShoppingCart(id=12, user_id=12),
        ShoppingCart(id=13, user_id=13),
        ShoppingCart(id=14, user_id=14),
        ShoppingCart(id=15, user_id=15),
        ShoppingCart(id=16, user_id=16),
        ShoppingCart(id=17, user_id=17),
        ShoppingCart(id=18, user_id=18),
        ShoppingCart(id=19, user_id=19),
        ShoppingCart(id=20, user_id=20)

    ]

    db.session.bulk_save_objects(shopping_carts)
    db.session.commit()

def undo_shopping_carts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.shopping_carts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM shopping_carts"))

    db.session.commit()
