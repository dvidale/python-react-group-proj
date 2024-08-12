from app.models import db, Category, SCHEMA
from sqlalchemy.sql import text

def seed_categories():
    # Seed Categories
    print(">>>> inside categories seeder")
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

def undo_categories():
    db.session.execute(f'TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;')
    db.session.commit()