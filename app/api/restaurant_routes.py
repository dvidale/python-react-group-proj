from flask import Blueprint, jsonify, render_template, request
from flask_login import login_required, current_user
from app.models import db, Restaurant, MenuItem, RestaurantCategory, MenuItemRating, Category, Review, User
from app.forms.add_menu_item import MenuItemForm
from app.forms.restaurant_form import RestaurantForm


restaurant_routes = Blueprint('restaurants', __name__)

# ? GET ALL CATEGORIES
@restaurant_routes.route('/categories')
def get_all_categories():
    categories = Category.query.all()
    categories_list = [category.to_dict() for category in categories]
    
    return categories_list

# ?  GET ALL RESTAURANTS
@restaurant_routes.route('/')
def get_all_restaurants():
    restaurants = Restaurant.query.all()
    restaurants_list = [restaurant.to_dict() for restaurant in restaurants]

    return restaurants_list


# ?  CREATE A NEW RESTAURANT

@restaurant_routes.route('/new', methods=['POST', 'PUT'])
def restaurant_form():
       
    restaurant_form = RestaurantForm()
    restaurant_form['csrf_token'].data = request.cookies['csrf_token']
    print("form data:", restaurant_form.data['name'])

    name = restaurant_form.data['name']
    address = restaurant_form.data['address']
    phone_number = restaurant_form.data['phone_number']
    description = restaurant_form.data['description']
    open_time = restaurant_form.data['open_time']
    close_time = restaurant_form.data['close_time']
    delivery_time = restaurant_form.data['delivery_time']
    delivery_fee = restaurant_form.data['delivery_fee']
    banner_img = restaurant_form.data['banner_img']
    categories = restaurant_form.data['categories']

    formData = {
        'name': name,
        'address': address,
        'phone_number': phone_number,
        'description': description,
        'open_time':open_time,
        'close_time': close_time,
        'delivery_time': delivery_time,
        'delivery_fee': delivery_fee,
        'banner_img': banner_img,
        'categories': categories
    }

    print(">>>>> formData from form:", formData)

    if restaurant_form.validate_on_submit():
        
        return {"message":"success"}
   
    print(">>>>form errors", restaurant_form.errors)
    return {'no dice':'sorry'}

   # ? GET A RESTAURANT
@restaurant_routes.route('/<int:id>')
def get_a_restaurant(id):
    restaurant = Restaurant.query.get(id)
    return restaurant.to_dict()

# ? GET ALL MENU ITEMS
@restaurant_routes.route('/<int:id>/menu-items')
def get_all_menu_items(id):
    restaurant = Restaurant.query.get(id)
    if not restaurant:
        return {"error": "Restaurant not found"}, 404
    menu_items = MenuItem.query.filter_by(restaurant_id=id).all()
    menu_items_list = [item.to_dict() for item in menu_items]
    return menu_items_list

# ? ADD NEW MENU ITEM 
@restaurant_routes.route('/<int:id>/menu-items/new', methods=['POST'])
def add_new_menu_item(id):
    restaurant = Restaurant.query.get(id)
    if not restaurant:
        return { 'Error': 'Restaurant Not Found'}, 404

    form = MenuItemForm()
    form['csrf_token'].data =request.cookies['csrf_token']
    if form.validate_on_submit():
        new_menu_item = MenuItem(
            restaurant_id=id,
            name=form.name.data,
            like_percentage=0,
            price=form.price.data,
            image_url=form.image_url.data,
            description=form.description.data,
            quantity=form.quantity.data,
            ratings_count=0  
        )

        db.session.add(new_menu_item)
        db.session.commit()

        return new_menu_item.to_dict(), 200

    return {"errors": form.errors}, 400

# ? GET ALL REVIEWS FOR SPECIFIC RESTAURANT
@restaurant_routes.route('/<int:id>/reviews')
def get_restaurant_reviews(id):

    if request.method == "GET":
        reviews = Review.query.filter_by(restaurant_id=id).all()

        if not reviews:
            return {"Error": "No reviews found for this restaurant"}, 404

        reviews_list = [review.to_dict() for review in reviews]
        return reviews_list

# ? CREATE A REVIEW
@restaurant_routes.route('/<int:restaurant_id>/reviews', methods=["POST"])
# @login_required
def create_review(restaurant_id):
    restaurant = Restaurant.query.get(restaurant_id)