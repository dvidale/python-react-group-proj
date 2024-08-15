from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField, FloatField, SelectMultipleField, URLField
from wtforms.validators import DataRequired
from ..models import Category

class RestaurantForm(FlaskForm):
    name = StringField('name', validators=[])
    address = StringField('address')
    phone_number = StringField('phone_number')
    description = StringField('description')
    open_time = DateTimeField('open_time')
    close_time = DateTimeField('close_time')
    delivery_time = StringField('delivery_time')
    delivery_fee = FloatField('delivery_fee')
    banner_img = URLField('banner_img') 
    categories = SelectMultipleField('categories', choices=['Italian', 'Mexican', 'BBQ', 'Japanese','Thai', 'Greek', 'Indian', 'French','American','Chinese'])

    # TODO: the category choices are hardcoded. Refactor to allow dynamic updates to available categories list, similar to frontend form