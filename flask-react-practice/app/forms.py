from wtforms import StringField, SubmitField, TextAreaField, IntegerField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired

class SimpleForm(FlaskForm):
    name = StringField('Name',validators=[DataRequired()])
    age = IntegerField('Age')
    bio = TextAreaField('Biography')
    submit = SubmitField('Submit')

