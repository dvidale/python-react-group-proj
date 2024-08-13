from flask_wtf import FlaskForm
from wtforms import StringField

# Form for collecting user location from home page


class UserLocationForm(FlaskForm):
    address=StringField('address')
    city=StringField('city')
    state=StringField('state')