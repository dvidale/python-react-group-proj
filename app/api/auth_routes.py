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
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            first_name=form.data['first_name'],
            last_name=form.data['last_name'],
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password'],
            address=form.data['address'],
            city=form.data['city'],
            state=form.data['state'],
            zip=form.data['zip'],
            phone_number=form.data['phone_number']
        )
        db.session.add(user)
        db.session.commit()

        existing_cart = ShoppingCart.query.filter_by(user_id=user.id).first()
        print(f"Existing cart: {existing_cart}")
        if not existing_cart:
            shopping_cart = ShoppingCart(user_id=user.id)
            db.session.add(shopping_cart)
            db.session.commit()

        login_user(user)
        return user.to_dict()
    return form.errors, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': {'message': 'Unauthorized'}}, 401