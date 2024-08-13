from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, IntegerField
from wtforms.validators import DataRequired, NumberRange, URL

class MenuItemForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    like_percentage = IntegerField('like_percentage', validators=[NumberRange(min=0, max=100)])
    price = FloatField('price', validators=[DataRequired(), NumberRange(min=0.01)])
    image_url = StringField('image_url', validators=[DataRequired(), URL()])
    description = StringField('description')
    quantity = IntegerField('quantity', validators=[DataRequired()])