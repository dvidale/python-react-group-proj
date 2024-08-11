from flask.cli import AppGroup
from .users import seed_users, undo_users
from .restaurant import seed_rest, undo_rest
from .menu_items1 import seed_menu_items1, undo_menu_items1
from .menu_items2 import seed_menu_items2, undo_menu_items2
from .category import seed_categories_and_restaurant_categories, undo_categories_and_restaurant_categories

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_rest()
        undo_menu_items1()
        undo_menu_items2()
        undo_categories_and_restaurant_categories()
    seed_users()
    seed_rest()
    seed_menu_items1()
    seed_menu_items2()
    seed_categories_and_restaurant_categories()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_rest()
    undo_menu_items1()
    undo_menu_items2()
    undo_categories_and_restaurant_categories()
    # Add other undo functions here
