from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField, FloatField, SelectMultipleField, URLField, IntegerField
from wtforms.validators import DataRequired, length
from ..models import Category

class RestaurantForm(FlaskForm):
    owner_id= IntegerField('owner_id')
    name = StringField('name', validators=[])
    address = StringField('address')
    phone_number = StringField('phone_number')
    description = StringField('description')
    open_time = StringField('open_time', validators=[length(min=5, max=5)])
    close_time = StringField('close_time', validators=[length(min=5, max=5)])
    delivery_time = StringField('delivery_time')
    delivery_fee = FloatField('delivery_fee')
    banner_img = URLField('banner_img') 
    categories = SelectMultipleField('categories', choices=['Italian', 'Mexican', 'BBQ', 'Japanese','Thai', 'Greek', 'Indian', 'French','American','Chinese'])

    # TODO: the category choices are hardcoded. Refactor to allow dynamic updates to available categories list, similar to frontend form