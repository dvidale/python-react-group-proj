from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class RestaurantForm(FlaskForm):
    name = StringField('name', validators=[])
    address = StringField('address')
    phone = StringField('phone')
    description = StringField('email')
    open_time = StringField('open_time')
    close_time = StringField('close_time')