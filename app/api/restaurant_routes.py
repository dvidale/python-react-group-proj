
from flask import Blueprint
from flask_login import login_required


restaurants = Blueprint('restaurants', __name__)

@restaurants.route('/')
def all_restaurants():
    return "Howdy"