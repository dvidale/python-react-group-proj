from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    first_name = StringField('First Name', validators=[DataRequired(), Length(min=2, max=30)])
    last_name = StringField('Last Name', validators=[DataRequired(), Length(min=2, max=30)])
    username = StringField('Username', validators=[DataRequired(), username_exists, Length(min=2, max=30)])
    email = StringField('Email', validators=[DataRequired(), Email(), user_exists])
    address = StringField('Address', validators=[DataRequired(), Length(max=30)])
    city = StringField('City', validators=[DataRequired(), Length(max=30)])
    state = StringField('State', validators=[DataRequired(), Length(min=2, max=2)])
    zip = StringField('ZIP', validators=[DataRequired()])
    phone_number = StringField('Phone Number', validators=[DataRequired(), Length(max=10)])
    password = StringField('Password', validators=[DataRequired(), Length(min=6)])