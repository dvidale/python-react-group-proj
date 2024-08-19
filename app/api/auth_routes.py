from flask import Blueprint, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from app.models import ShoppingCart

auth_routes = Blueprint('auth', __name__)


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': {'message': 'Unauthorized'}}, 401


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return form.errors, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    form = SignUpForm()

    # Set CSRF token from the request cookie
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # Create a new user instance with validated data from the form
        user = User(
            first_name=form.first_name.data,
            last_name=form.last_name.data,
            username=form.username.data,
            email=form.email.data,
            password=form.password.data,  # Assuming you have a setter that hashes the password
            address=form.address.data,
            city=form.city.data,
            state=form.state.data,
            zip=form.zip.data,
            phone_number=form.phone_number.data
        )

        # Add and commit the new user to the database
        db.session.add(user)
        db.session.commit()

        # Log the user in
        login_user(user)

        # Return the user's data as a dictionary
        return user.to_dict()

    # If validation fails, return the errors with a 401 status code
    return {'errors': form.errors}, 401