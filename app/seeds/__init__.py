from flask.cli import AppGroup
from .users import seed_users, undo_users
from .restaurant import seed_rest, undo_rest
from .menu_items1 import seed_menu_items1, undo_menu_items1
from .menu_items2 import seed_menu_items2, undo_menu_items2
from .category import seed_categories, undo_categories
from .restaurant_category import seed_restaurant_categories, undo_restaurant_categories
from .reviews import seed_reviews, undo_reviews
from .menu_item_rating import seed_menu_item_ratings, undo_menu_item_ratings
from .shopping_cart import seed_shopping_carts, undo_shopping_carts
from .cart_items import seed_cart_items, undo_cart_items

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

print(">>> inside seeder init")

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_cart_items()
        undo_menu_item_ratings()
        undo_shopping_carts()
        undo_menu_items2()
        undo_menu_items1()
        undo_restaurant_categories()
        undo_categories()
        undo_reviews()
        undo_rest()
        undo_users()

    seed_users()
    seed_rest()
    seed_reviews()
    seed_categories()
    seed_restaurant_categories()
    seed_menu_items1()
    seed_menu_items2()
    seed_shopping_carts()
    seed_menu_item_ratings()
    seed_cart_items()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():    
    undo_cart_items()
    undo_menu_item_ratings()
    undo_shopping_carts()
    undo_restaurant_categories()
    undo_categories()
    undo_menu_items2()
    undo_menu_items1()
    undo_reviews()
    undo_rest()
    undo_users()

    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")
        
        db.session.commit()
    # Add other undo functions here
