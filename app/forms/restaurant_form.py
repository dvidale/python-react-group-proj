from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField, FloatField, SelectMultipleField
from wtforms.validators import DataRequired
from ..models import Category

class RestaurantForm(FlaskForm):
    name = StringField('name', validators=[])
    address = StringField('address')
    phone = StringField('phone')
    description = StringField('email')
    open_time = DateTimeField('open_time')
    close_time = DateTimeField('close_time')
    delivery_time = StringField('delivery_time')
    delivery_fee = FloatField('delivery_fee')
