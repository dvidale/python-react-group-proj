from flask import Flask, redirect, render_template
from .forms import SimpleForm
from .config import Configuration
from .models import SimplePerson, db
from flask_migrate import Migrate


app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
Migrate(app, db)


@app.route('/')
def index():
    return render_template('main_page.html')

@app.route('/simple-form')
def form():
    form = SimpleForm()
    return render_template('simple_form.html', form=form)

@app.route('/simple-form', methods=['POST'])
def post_form():
    form = SimpleForm()
    if form.validate_on_submit():
        person = SimplePerson()
        form.populate_obj(person)
        db.session.add(person)
        db.session.commit()
        return redirect('/')
    else:
        return "Bad Data"
    
@app.route('/simple-form-data')
def get_data():
    query = SimplePerson.query.filter(SimplePerson.name.like("M%")).all()
    return render_template('simple_form_data.html', query = query)