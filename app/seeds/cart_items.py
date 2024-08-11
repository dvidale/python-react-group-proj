from app.models import db, environment, SCHEMA
from sqlalchemy.sql import text
from ..models import CartItem


def seed_cart_items():

    cart_items = [
        # User 1 owns Restaurants 1 and 11
        CartItem(id=1, shopping_cart_id=1, menu_item_id=21),  # Restaurant 3
        CartItem(id=2, shopping_cart_id=1, menu_item_id=34),  # Restaurant 4

        # User 2 owns Restaurants 2 and 12
        CartItem(id=3, shopping_cart_id=2, menu_item_id=25),  # Restaurant 3
        CartItem(id=4, shopping_cart_id=2, menu_item_id=44),  # Restaurant 5

        # User 3 owns Restaurants 3 and 13
        CartItem(id=5, shopping_cart_id=3, menu_item_id=12),  # Restaurant 2
        CartItem(id=6, shopping_cart_id=3, menu_item_id=55),  # Restaurant 6

        # User 4 owns Restaurants 4 and 14
        CartItem(id=7, shopping_cart_id=4, menu_item_id=7),   # Restaurant 1
        CartItem(id=8, shopping_cart_id=4, menu_item_id=62),  # Restaurant 7

        # User 5 owns Restaurants 5 and 15
        CartItem(id=9, shopping_cart_id=5, menu_item_id=15),  # Restaurant 2
        CartItem(id=10, shopping_cart_id=5, menu_item_id=73), # Restaurant 8

        # User 6 owns Restaurants 6 and 16
        CartItem(id=11, shopping_cart_id=6, menu_item_id=18), # Restaurant 2
        CartItem(id=12, shopping_cart_id=6, menu_item_id=82), # Restaurant 9

        # User 7 owns Restaurants 7 and 17
        CartItem(id=13, shopping_cart_id=7, menu_item_id=46), # Restaurant 5
        CartItem(id=14, shopping_cart_id=7, menu_item_id=99), # Restaurant 10

        # User 8 owns Restaurants 8 and 18
        CartItem(id=15, shopping_cart_id=8, menu_item_id=39), # Restaurant 4
        CartItem(id=16, shopping_cart_id=8, menu_item_id=114),# Restaurant 12

        # User 9 owns Restaurants 9 and 19
        CartItem(id=17, shopping_cart_id=9, menu_item_id=67), # Restaurant 7
        CartItem(id=18, shopping_cart_id=9, menu_item_id=122),# Restaurant 13

        # User 10 owns Restaurants 10 and 20
        CartItem(id=19, shopping_cart_id=10, menu_item_id=32),# Restaurant 4
        CartItem(id=20, shopping_cart_id=10, menu_item_id=135),# Restaurant 14

        # User 11 (No restaurants owned)
        CartItem(id=21, shopping_cart_id=11, menu_item_id=86), # Restaurant 9
        CartItem(id=22, shopping_cart_id=11, menu_item_id=97), # Restaurant 10

        # User 12 (No restaurants owned)
        CartItem(id=23, shopping_cart_id=12, menu_item_id=121),# Restaurant 13
        CartItem(id=24, shopping_cart_id=12, menu_item_id=103),# Restaurant 11

        # User 13 (No restaurants owned)
        CartItem(id=25, shopping_cart_id=13, menu_item_id=138),# Restaurant 14
        CartItem(id=26, shopping_cart_id=13, menu_item_id=143),# Restaurant 15

        # User 14 (No restaurants owned)
        CartItem(id=27, shopping_cart_id=14, menu_item_id=66), # Restaurant 7
        CartItem(id=28, shopping_cart_id=14, menu_item_id=154),# Restaurant 16

        # User 15 (No restaurants owned)
        CartItem(id=29, shopping_cart_id=15, menu_item_id=127),# Restaurant 13
        CartItem(id=30, shopping_cart_id=15, menu_item_id=166),# Restaurant 17

        # User 16 (No restaurants owned)
        CartItem(id=31, shopping_cart_id=16, menu_item_id=71), # Restaurant 8
        CartItem(id=32, shopping_cart_id=16, menu_item_id=176),# Restaurant 18

        # User 17 (No restaurants owned)
        CartItem(id=33, shopping_cart_id=17, menu_item_id=84), # Restaurant 9
        CartItem(id=34, shopping_cart_id=17, menu_item_id=185),# Restaurant 19

        # User 18 (No restaurants owned)
        CartItem(id=35, shopping_cart_id=18, menu_item_id=142),# Restaurant 15
        CartItem(id=36, shopping_cart_id=18, menu_item_id=196),# Restaurant 20

        # User 19 (No restaurants owned)
        CartItem(id=37, shopping_cart_id=19, menu_item_id=91), # Restaurant 10
        CartItem(id=38, shopping_cart_id=19, menu_item_id=167),# Restaurant 17

        # User 20 (No restaurants owned)
        CartItem(id=39, shopping_cart_id=20, menu_item_id=92), # Restaurant 10
        CartItem(id=40, shopping_cart_id=20, menu_item_id=158),# Restaurant 16

    ]

    db.session.bulk_save_objects(cart_items)
    db.session.commit()

def undo_cart_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.restaurants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cart_items"))

    db.session.commit()
