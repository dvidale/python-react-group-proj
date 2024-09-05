from flask import Blueprint, jsonify, render_template, request
from sqlalchemy import desc
from flask_login import login_required, current_user
from app.models import (
    db,
    Restaurant,
    MenuItem,
    RestaurantCategory,
    MenuItemRating,
    Category,
    Review,
    User,
)
from app.forms.add_menu_item import MenuItemForm
from app.forms.restaurant_form import RestaurantForm


restaurant_routes = Blueprint("restaurants", __name__)


# ? GET ALL CATEGORIES
@restaurant_routes.route("/categories")
def get_all_categories():
    categories = Category.query.all()
    categories_list = [category.to_dict() for category in categories]

    if(len(categories_list)== 0 ):
        return {'error': 'No restaurant categories found.' }, 404

    return categories_list, 200


# ?  GET ALL RESTAURANTS
@restaurant_routes.route("/")
def get_all_restaurants():

    restaurants = Restaurant.query.all()
    restaurants_list = [restaurant.to_dict() for restaurant in restaurants]

    if(len(restaurants_list) == 0):
        return {'error': 'No restaurants found.'}, 404


    return restaurants_list

# ? GET A RESTAURANT
@restaurant_routes.route("/<int:id>")
def get_a_restaurant(id):
    restaurant = Restaurant.query.get(id)
    return restaurant.to_dict()


# ?  CREATE A NEW RESTAURANT


@restaurant_routes.route("/new", methods=["POST"])
def new_restaurant_form():

    restaurant_form = RestaurantForm()
    restaurant_form["csrf_token"].data = request.cookies["csrf_token"]

    float_delivery_fee = restaurant_form.data["delivery_fee"]


    if restaurant_form.validate_on_submit():

        new_restaurant = Restaurant(
            owner_id=restaurant_form.data['owner_id'],
            name=restaurant_form.data["name"],
            address=restaurant_form.data["address"],
            phone_number=restaurant_form.data["phone_number"],
            description=restaurant_form.data["description"],
            open_time=restaurant_form.data["open_time"],
            close_time=restaurant_form.data["close_time"],
            delivery_time=restaurant_form.data["delivery_time"],
            delivery_fee= float_delivery_fee,
            banner_img=restaurant_form.data["banner_img"]

        )


        db.session.add(new_restaurant)
        db.session.commit()

        # Add the restaurant's category associations
        # recall the newly created restaurant record

        restaurant_results = db.select(Restaurant.id, Restaurant.name).where(Restaurant.name == new_restaurant.name)

        restaurant_lst = [dict(restaurant) for restaurant in db.session.execute(restaurant_results) ]


        # target submitted categories from form
        categories=restaurant_form.data["categories"]

        # find matching category records
        query = db.select(Category.id, Category.categ_name).where(Category.categ_name.in_(categories))

        category_lst = [dict(category) for category in db.session.execute(query)]

        # create a record in RestaurantCategories for every category listed for the new restaurant

        for category in category_lst:
            record = RestaurantCategory(
                restaurant_id = restaurant_lst[0]['id'],
                category_id = category['id']
            )
            db.session.add(record)
            db.session.commit()

        # return the newly created restaurant with its categories

        restaurant = db.session.query(Restaurant).get(restaurant_lst[0]['id']).to_dict()
        return restaurant


    '''
    restaurant_form.errors object:
    {'name': ['A name is required.'], 'address': ['This field is required.'], 'phone_number': ['This field is required.']}
    '''
    return restaurant_form.errors, 400


# ?  UPDATE A RESTAURANT

@restaurant_routes.route("/current/<int:id>", methods=["PUT"])
def update_restaurant_form(id):



    restaurant_form = RestaurantForm()
    restaurant_form["csrf_token"].data = request.cookies["csrf_token"]


    owner_id=restaurant_form.data['owner_id'],
    name=restaurant_form.data["name"],
    address=restaurant_form.data["address"],
    phone_number=restaurant_form.data["phone_number"],
    description=restaurant_form.data["description"],
    open_time=restaurant_form.data["open_time"],
    close_time=restaurant_form.data["close_time"],
    delivery_time=restaurant_form.data["delivery_time"],
    delivery_fee=restaurant_form.data["delivery_fee"],
    banner_img=restaurant_form.data["banner_img"]
    categories=restaurant_form.data["categories"]

    if restaurant_form.validate_on_submit():

        # call up the record for the restaurant
        restaurant = (Restaurant).query.get(id)

        # update the record with the form data
        restaurant.owner_id = owner_id[0]
        restaurant.name = name[0]
        restaurant.address = address[0]
        restaurant.phone_number = phone_number[0]
        restaurant.description = description[0]
        restaurant.open_time = open_time[0]
        restaurant.close_time = close_time[0]
        restaurant.delivery_time = delivery_time[0]
        restaurant.delivery_fee = delivery_fee[0]
        restaurant.banner_img = banner_img

        db.session.commit()

        #  target the current RestaurantCategories records for this restaurant

        rc_query = db.select(RestaurantCategory.category_id).where(RestaurantCategory.restaurant_id == restaurant.id)

        rc_lst = [rest_category for rest_category in db.session.execute(rc_query)]


         # *find matching category records for categories from form submission
        categ_query = db.select(Category.id).where(Category.categ_name.in_(categories))

        category_lst = [category for category in db.session.execute(categ_query)]

        #  OUTPUT: cat_lst: [(1,), (5,)]    rc_lst:  [(1,), (3,)]

        # *compare the current RestaurantCategory records against the categories submitted in the form

        cat_set = set(category_lst)
        rc_set = set(rc_lst)

        # OUTPUT: cat_set: {(1,), (5,)}    rc_set:  {(1,), (3,)}


        # * identify any record that does not match the categories submitted, and delete that record

        to_delete = rc_set - cat_set

        # OUTPUT: to_delete: {(3,)}

        # iterate over the set, target the category id, run a query for the rc record with the category and restaurant ids
        # delete the resulting record

        for ele in to_delete:
            cat_id = ele[0]
            to_delete_query = db.select(RestaurantCategory).where(RestaurantCategory.restaurant_id == restaurant.id, RestaurantCategory.category_id == cat_id)

            rc_record = db.session.execute(to_delete_query).first()[0]

            # OUTPUT: rc_record: <RestaurantCategory 44>

            db.session.delete(rc_record)
            db.session.commit()

        # identify any submitted category that does not match a current record, and add a new RestaurantCategory record associating that category with the restaurant

        to_add = cat_set - rc_set

        # iterate over the set, target the category id, create an instance of a RestaurantCategory record, and save that record with the restaurant id and category id to the db

        for ele in to_add:
            cat_id = ele[0]
            new_rc_record = RestaurantCategory(
                restaurant_id = restaurant.id,
                category_id = cat_id
            )
            db.session.add(new_rc_record)
            db.session.commit()

        db.session.commit()


        # return the newly updated restaurant with its categories
        restaurant = db.session.query(Restaurant).get(id).to_dict()
        return restaurant, 200

    return restaurant_form.errors, 400


# ? DELETE A RESTAURANT
@restaurant_routes.route('/<int:id>', methods=["DELETE"])
def delete_restaurant(id):
    query = Restaurant.query.get(id)

    db.session.delete(query)
    db.session.commit()

    return {"message" : "Delete Successful"}, 200


# ? GET ALL MENU ITEMS
@restaurant_routes.route("/<int:id>/menu-items")
def get_all_menu_items(id):
    restaurant = Restaurant.query.get(id)
    if not restaurant:
        return {"error": "Restaurant not found"}, 404
    menu_items = MenuItem.query.filter_by(restaurant_id=id).all()
    menu_items_list = [item.to_dict() for item in menu_items]
    return menu_items_list


# ? ADD NEW MENU ITEM
@restaurant_routes.route("/<int:id>/menu-items/new", methods=["POST"])
def add_new_menu_item(id):
    restaurant = Restaurant.query.get(id)
    if not restaurant:
        return {"Error": "Restaurant Not Found"}, 404

    form = MenuItemForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_menu_item = MenuItem(
            restaurant_id=id,
            name=form.name.data,
            like_percentage=0,
            price=form.price.data,
            image_url=form.image_url.data,
            description=form.description.data,
            quantity=form.quantity.data,
            ratings_count=0,
        )

        db.session.add(new_menu_item)
        db.session.commit()

        return new_menu_item.to_dict(), 200

    return {"errors": form.errors}, 400


# GET REVIEW SUMMARY FOR SPECIFIC RESTAURANT: TOTAL REVIEWS AND AVERAGE RATING
@restaurant_routes.route("/<int:id>/totalreviews")
def total_number_of_reviews(id):

    reviews = Review.query.filter_by(restaurant_id=id).all()

    if not reviews:
        return {"average_rating":0, "total_reviews": 0}, 404

    restaurant = Restaurant.query.get(id)

    if not restaurant:
        return {'Error': 'Restaurant could not be found'}, 404
    # Calculating total # of reviews for specific restaurant
    total_reviews = len(reviews)

    data = {
        'total_reviews': total_reviews,
        'average_rating': restaurant.average_rating()
    }

    return jsonify(data), 200


# GET ALL REVIEWS FOR SPECIFIC RESTAURANT
@restaurant_routes.route('/<int:id>/reviews')
def get_restaurant_reviews(id):

    reviews = Review.query.filter_by(restaurant_id=id).order_by(desc(Review.created_at)).all()

    if not reviews:
        return {"Error": "No reviews found for this restaurant"}, 404

    reviews_list = [review.to_dict() for review in reviews]
    return reviews_list, 200


# CREATE A REVIEW
@restaurant_routes.route('/<int:restaurant_id>/reviews', methods=["POST"])
# @login_required
def create_review(restaurant_id):
    restaurant = Restaurant.query.get(restaurant_id)

    if not restaurant:
        return { 'Error': 'Restaurant Not Found'}, 404

    if request.method == "POST":
        data = request.get_json()

        new_review = Review (
            rating = data['rating'],
            comments = data['comments'],
            restaurant_id = restaurant.id,
            user_id = current_user.id
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict(), 200

    return {'Error': 'There was an error processing your review'}, 404


# GET MOST RECENT REVIEWS (FOR MAIN REVIEWS HEADER)
@restaurant_routes.route('/<int:restaurant_id>/recent')
def get_two_most_recent_reviews(restaurant_id):
    # Query the Review model to get the most recent reviews for the restaurant
    recent_reviews = Review.query.filter_by(restaurant_id=restaurant_id).order_by(desc(Review.created_at)).limit(1).all() #adjust limit number to fetch number of reviews

    if not recent_reviews:
        return {'Error': 'There are no reviews for this restaurant.'}, 404

    # Convert the reviews to a dictionary format
    reviews_lst = [review.to_dict() for review in recent_reviews]

    return reviews_lst, 200
