from app.models import db, Category, SCHEMA
from sqlalchemy.sql import text

def seed_categories():
    # Seed Categories
    print(">>>> inside categories seeder")
    categories = [
        Category(categ_name='Italian', img_url='https://res.cloudinary.com/dw0k7r34f/image/upload/v1724015966/Italian_gw34ku.jpg'),
        Category(categ_name='Mexican', img_url='https://res.cloudinary.com/dw0k7r34f/image/upload/v1724015959/Mexican_oxh6zq.jpg'),
        Category(categ_name='Chinese', img_url='https://res.cloudinary.com/dw0k7r34f/image/upload/v1724015968/Chinese_yaocak.jpg'),
        Category(categ_name='Japanese', img_url='https://res.cloudinary.com/dw0k7r34f/image/upload/v1724015972/Japanese_pwd0bh.jpg'),
        Category(categ_name='Greek', img_url='https://res.cloudinary.com/dw0k7r34f/image/upload/v1724015954/Greek_qlix9r.jpg'),
        Category(categ_name='BBQ', img_url='https://res.cloudinary.com/dw0k7r34f/image/upload/v1724015949/Barbeque_rhnqgd.jpg'),
        Category(categ_name='Indian', img_url='https://res.cloudinary.com/dw0k7r34f/image/upload/v1724015957/Indian_n5t7oc.jpg'),
        Category(categ_name='Thai', img_url='https://res.cloudinary.com/dw0k7r34f/image/upload/v1724015963/Thai_ta4mdn.jpg'),
        Category(categ_name='French', img_url='https://res.cloudinary.com/dw0k7r34f/image/upload/v1724015952/French_grwixa.jpg'),
        Category(categ_name='American', img_url='https://res.cloudinary.com/dw0k7r34f/image/upload/v1724015947/American_ckl7nz.jpg')
    ]

    db.session.bulk_save_objects(categories)
    db.session.commit()

def undo_categories():
    db.session.execute(f'TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;')
    db.session.commit()
