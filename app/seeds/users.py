from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        first_name='Demo',
        last_name='User',
        email='demo@aa.io',
        address='123 Demo Lane',
        phone_number=1234567890,
        password='password'
    )
    marnie = User(
        username='marnie',
        first_name='Marnie',
        last_name='Smith',
        email='marnie@aa.io',
        address='456 Marnie St',
        phone_number=2345678901,
        password='password'
    )
    bobbie = User(
        username='bobbie',
        first_name='Bobbie',
        last_name='Jones',
        email='bobbie@aa.io',
        address='789 Bobbie Blvd',
        phone_number=3456789012,
        password='password'
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    
    for _ in range(17):  # 17 additional users to make a total of 20
        user = User(
            username=fake.user_name(),
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            address=fake.address(),
            phone_number=fake.random_number(digits=10, fix_len=True),
            password='password'
        )
        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()
