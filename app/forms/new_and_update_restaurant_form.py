from flask_wtf import FlaskForm
from wtforms import StringField



class RestaurantForm(FlaskForm):
    name = StringField('Name')
    address = StringField('Address')
    phone = StringField('Phone')
    description = StringField('Email')
    open_time = StringField('Opening')
    close_time = StringField('Closing')