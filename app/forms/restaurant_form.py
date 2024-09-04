from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField, URLField, IntegerField
from wtforms.validators import DataRequired, length


class RestaurantForm(FlaskForm):
    owner_id= IntegerField('owner_id')
    name = StringField('name', validators=[DataRequired(message='Name is required'), length(min=2, max=50, message='This field requires 2 - 50 characters')])
    address = StringField('address', validators=[DataRequired(message='Address is required'), length(min=2, max=50, message='This field requires 2 - 50 characters')])
    phone_number = StringField('phone_number',validators=[DataRequired(message='Phone number is required'), length(min=10, max=10)])
    description = StringField('description', validators=[DataRequired(message='Description is required'), length(min=20, max=70, message='This field requires 20 - 70 characters')])
    open_time = StringField('open_time', validators=[length(min=5, max=5, message='This field requires 5 characters')])
    close_time = StringField('close_time', validators=[length(min=5, max=5, message='This field requires 5 characters')])
    delivery_time = StringField('delivery_time', validators=[DataRequired(message='Delivery time is required')])
    delivery_fee = StringField('delivery_fee', validators=[DataRequired(message='Delivery time is required')])
    banner_img = URLField('banner_img', validators=[DataRequired(message='Banner image is required')]) 
    categories = SelectMultipleField('categories', choices=['Italian', 'Mexican', 'BBQ', 'Japanese','Thai', 'Greek', 'Indian', 'French','American','Chinese'], validators=[DataRequired(message='Category is required')])

    # TODO: the category choices are hardcoded. Refactor to allow dynamic updates to available categories list, similar to frontend form