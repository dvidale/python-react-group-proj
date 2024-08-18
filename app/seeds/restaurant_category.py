from app.models import db, Category, RestaurantCategory, SCHEMA
from sqlalchemy.sql import text

def seed_restaurant_categories():
    # Seed RestaurantCategory (join table)
    print(">>>> inside restaurant category seeder")
    restaurant_categories = [
        # Restaurant 1 (The Gourmet Kitchen) belongs to 'American' and 'BBQ'
        RestaurantCategory(restaurant_id=1, category_id=10),  # American
        RestaurantCategory(restaurant_id=1, category_id=6),  # BBQ

        # Restaurant 2 (Spice Symphony) belongs to 'Mexican'
        RestaurantCategory(restaurant_id=2, category_id=2),  # Mexican

        # Restaurant 3 (Pasta Paradise) belongs to 'Italian'
        RestaurantCategory(restaurant_id=3, category_id=1),  # Italian

        # Restaurant 4 (Sushi World) belongs to 'Japanese'
        RestaurantCategory(restaurant_id=4, category_id=4),  # Japanese

        # Restaurant 5 (Burger Haven) belongs to 'American'
        RestaurantCategory(restaurant_id=5, category_id=10),  # American

        # Restaurant 6 (Pizza Palace) belongs to 'Italian' and 'American'
        RestaurantCategory(restaurant_id=6, category_id=1),  # Italian
        RestaurantCategory(restaurant_id=6, category_id=10),  # American

        # Restaurant 7 (Taco Town) belongs to 'Mexican'
        RestaurantCategory(restaurant_id=7, category_id=2),  # Mexican

        # Restaurant 8 (BBQ Barn) belongs to 'BBQ' and 'American'
        RestaurantCategory(restaurant_id=8, category_id=6),  # BBQ
        RestaurantCategory(restaurant_id=8, category_id=10),  # American

        # Restaurant 9 (Salad Stop) belongs to 'American'
        RestaurantCategory(restaurant_id=9, category_id=10), # American

        # Restaurant 10 (Steak House) belongs to 'American'
        RestaurantCategory(restaurant_id=10, category_id=10), # American

        # Restaurant 11 (Curry Corner) belongs to 'Indian'
        RestaurantCategory(restaurant_id=11, category_id=7), # Indian

        # Restaurant 12 (Masion de Saveurs) belongs to 'French'
        RestaurantCategory(restaurant_id=12, category_id=9), # French

        # Restaurant 13 (Olympian Delights) belongs to 'Greek'
        RestaurantCategory(restaurant_id=13, category_id=5), # Greek

        # Restaurant 14 (Great Wall Gourmet) belongs to 'Chinese'
        RestaurantCategory(restaurant_id=14, category_id=3), # Chinese

        # Restaurant 15 (Ramen House) belongs to 'Japanese'
        RestaurantCategory(restaurant_id=15, category_id=4), # Japanese

        # Restaurant 16 (Le Parisian Table) belongs to 'French' and 'American'
        RestaurantCategory(restaurant_id=16, category_id=9), # French
        RestaurantCategory(restaurant_id=16, category_id=10), # American

        # Restaurant 17 (Athena's Kitchen) belongs to 'Greek'
        RestaurantCategory(restaurant_id=17, category_id=5), # Greek

        # Restaurant 18 (Thai Terrace) belongs to 'Thai'
        RestaurantCategory(restaurant_id=18, category_id=8), # Thai

        # Restaurant 19 (Panda Palace Grill) belongs to 'Chinese' and 'American'
        RestaurantCategory(restaurant_id=19, category_id=3), # Chinese
        RestaurantCategory(restaurant_id=19, category_id=10), # American

        # Restaurant 20 (Fish Fry) belongs to 'American'
        RestaurantCategory(restaurant_id=20, category_id=10), # American
    ]

    db.session.bulk_save_objects(restaurant_categories)
    db.session.commit()

def undo_restaurant_categories():
    db.session.execute(f'TRUNCATE table {SCHEMA}.restaurant_categories RESTART IDENTITY CASCADE;')
    db.session.commit()
