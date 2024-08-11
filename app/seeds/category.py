from app.models import db, Category, RestaurantCategory
from sqlalchemy.sql import text

def seed_categories_and_restaurant_categories():
    # Seed Categories
    categories = [
        Category(categ_name='Italian', img_url='https://example.com/images/italian.jpg'),
        Category(categ_name='Mexican', img_url='https://example.com/images/mexican.jpg'),
        Category(categ_name='Chinese', img_url='https://example.com/images/chinese.jpg'),
        Category(categ_name='Japanese', img_url='https://example.com/images/japanese.jpg'),
        Category(categ_name='Greek', img_url='https://example.com/images/greek.jpg'),
        Category(categ_name='BBQ', img_url='https://example.com/images/bbq.jpg'),
        Category(categ_name='Indian', img_url='https://example.com/images/indian.jpg'),
        Category(categ_name='Thai', img_url='https://example.com/images/thai.jpg'),
        Category(categ_name='French', img_url='https://example.com/images/french.jpg'),
        Category(categ_name='American', img_url='https://example.com/images/american.jpg')
    ]

    db.session.bulk_save_objects(categories)
    db.session.commit()

    # Seed RestaurantCategory (join table)
    restaurant_categories = [
        # Restaurant 1 (The Gourmet Kitchen) belongs to 'Italian' and 'French'
        RestaurantCategory(restaurant_id=1, category_id=1),  # Italian
        RestaurantCategory(restaurant_id=1, category_id=9),  # French
        
        # Restaurant 2 (Spice Symphony) belongs to 'Indian' and 'BBQ'
        RestaurantCategory(restaurant_id=2, category_id=7),  # Indian
        RestaurantCategory(restaurant_id=2, category_id=6),  # BBQ
        
        # Restaurant 3 (Dragon Wok) belongs to 'Chinese' and 'Japanese'
        RestaurantCategory(restaurant_id=3, category_id=3),  # Chinese
        RestaurantCategory(restaurant_id=3, category_id=4),  # Japanese
        
        # Restaurant 4 (El Sombrero) belongs to 'Mexican' and 'BBQ'
        RestaurantCategory(restaurant_id=4, category_id=2),  # Mexican
        RestaurantCategory(restaurant_id=4, category_id=6),  # BBQ
        
        # Restaurant 5 (Sushi Yama) belongs to 'Japanese' and 'Thai'
        RestaurantCategory(restaurant_id=5, category_id=4),  # Japanese
        RestaurantCategory(restaurant_id=5, category_id=8),  # Thai
        
        # Restaurant 6 (Mediterranean Delights) belongs to 'Greek' and 'French'
        RestaurantCategory(restaurant_id=6, category_id=5),  # Greek
        RestaurantCategory(restaurant_id=6, category_id=9),  # French
        
        # Restaurant 7 (Backyard BBQ) belongs to 'BBQ' and 'American'
        RestaurantCategory(restaurant_id=7, category_id=6),  # BBQ
        RestaurantCategory(restaurant_id=7, category_id=10), # American
        
        # Restaurant 8 (Le Petit Bistro) belongs to 'French' and 'Italian'
        RestaurantCategory(restaurant_id=8, category_id=9),  # French
        RestaurantCategory(restaurant_id=8, category_id=1),  # Italian
        
        # Restaurant 9 (Taco Fiesta) belongs to 'Mexican' and 'American'
        RestaurantCategory(restaurant_id=9, category_id=2),  # Mexican
        RestaurantCategory(restaurant_id=9, category_id=10), # American
        
        # Restaurant 10 (Bangkok Express) belongs to 'Thai' and 'Chinese'
        RestaurantCategory(restaurant_id=10, category_id=8), # Thai
        RestaurantCategory(restaurant_id=10, category_id=3), # Chinese
        
        # Restaurant 11 (Moscow Munchies) belongs to 'Russian' and 'Eastern European'
        RestaurantCategory(restaurant_id=11, category_id=9), # Russian
        RestaurantCategory(restaurant_id=11, category_id=1), # Eastern European
        
        # Restaurant 12 (Bombay Spice) belongs to 'Indian' and 'BBQ'
        RestaurantCategory(restaurant_id=12, category_id=7), # Indian
        RestaurantCategory(restaurant_id=12, category_id=6), # BBQ
        
        # Restaurant 13 (Saigon Street) belongs to 'Vietnamese' and 'Japanese'
        RestaurantCategory(restaurant_id=13, category_id=9), # Vietnamese
        RestaurantCategory(restaurant_id=13, category_id=4), # Japanese
        
        # Restaurant 14 (Britain Bites) belongs to 'British' and 'French'
        RestaurantCategory(restaurant_id=14, category_id=10), # British
        RestaurantCategory(restaurant_id=14, category_id=9), # French
        
        # Restaurant 15 (Southern Comfort) belongs to 'Southern' and 'American'
        RestaurantCategory(restaurant_id=15, category_id=10), # Southern
        RestaurantCategory(restaurant_id=15, category_id=6),  # American
        
        # Restaurant 16 (Tokyo Table) belongs to 'Japanese' and 'BBQ'
        RestaurantCategory(restaurant_id=16, category_id=4), # Japanese
        RestaurantCategory(restaurant_id=16, category_id=6), # BBQ
        
        # Restaurant 17 (Mediterranean Magic) belongs to 'Greek' and 'BBQ'
        RestaurantCategory(restaurant_id=17, category_id=5), # Greek
        RestaurantCategory(restaurant_id=17, category_id=6), # BBQ
        
        # Restaurant 18 (Smoky Mountain BBQ) belongs to 'BBQ' and 'American'
        RestaurantCategory(restaurant_id=18, category_id=6), # BBQ
        RestaurantCategory(restaurant_id=18, category_id=10), # American
        
        # Restaurant 19 (Thai House) belongs to 'Thai' and 'Japanese'
        RestaurantCategory(restaurant_id=19, category_id=8), # Thai
        RestaurantCategory(restaurant_id=19, category_id=4), # Japanese
        
        # Restaurant 20 (Pizza Paradise) belongs to 'Italian' and 'American'
        RestaurantCategory(restaurant_id=20, category_id=1), # Italian
        RestaurantCategory(restaurant_id=20, category_id=10), # American
    ]

    db.session.bulk_save_objects(restaurant_categories)
    db.session.commit()

def undo_categories_and_restaurant_categories():
    db.session.execute('TRUNCATE categories, restaurant_categories RESTART IDENTITY CASCADE;')
    db.session.commit()