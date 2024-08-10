from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


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

    # Additional users
    user4 = User(
        username='alice',
        first_name='Alice',
        last_name='Wonderland',
        email='alice@example.com',
        address='123 Wonderland Ave',
        phone_number=4567890123,
        password='password'
    )
    user5 = User(
        username='charlie',
        first_name='Charlie',
        last_name='Brown',
        email='charlie@example.com',
        address='456 Peanut St',
        phone_number=5678901234,
        password='password'
    )
    user6 = User(
        username='eve',
        first_name='Eve',
        last_name='Doe',
        email='eve@example.com',
        address='789 Eve St',
        phone_number=6789012345,
        password='password'
    )
    user7 = User(
        username='frank',
        first_name='Frank',
        last_name='Sinatra',
        email='frank@example.com',
        address='123 Blue Eyes Ln',
        phone_number=7890123456,
        password='password'
    )
    user8 = User(
        username='grace',
        first_name='Grace',
        last_name='Hopper',
        email='grace@example.com',
        address='123 Hopper Blvd',
        phone_number=8901234567,
        password='password'
    )
    user9 = User(
        username='heidi',
        first_name='Heidi',
        last_name='Klum',
        email='heidi@example.com',
        address='456 Model St',
        phone_number=9012345678,
        password='password'
    )
    user10 = User(
        username='ivan',
        first_name='Ivan',
        last_name='Drago',
        email='ivan@example.com',
        address='789 Boxer Ave',
        phone_number=1234567890,
        password='password'
    )
    user11 = User(
        username='judy',
        first_name='Judy',
        last_name='Jetson',
        email='judy@example.com',
        address='123 Space Ln',
        phone_number=2345678901,
        password='password'
    )
    user12 = User(
        username='mallory',
        first_name='Mallory',
        last_name='Archer',
        email='mallory@example.com',
        address='456 Spy St',
        phone_number=3456789012,
        password='password'
    )
    user13 = User(
        username='oscar',
        first_name='Oscar',
        last_name='Wilde',
        email='oscar@example.com',
        address='789 Literature Blvd',
        phone_number=4567890123,
        password='password'
    )
    user14 = User(
        username='peggy',
        first_name='Peggy',
        last_name='Carter',
        email='peggy@example.com',
        address='123 Shield Rd',
        phone_number=5678901234,
        password='password'
    )
    user15 = User(
        username='trent',
        first_name='Trent',
        last_name='Reznor',
        email='trent@example.com',
        address='456 Music Ln',
        phone_number=6789012345,
        password='password'
    )
    user16 = User(
        username='victor',
        first_name='Victor',
        last_name='Frankenstein',
        email='victor@example.com',
        address='789 Science Blvd',
        phone_number=7890123456,
        password='password'
    )
    user17 = User(
        username='walter',
        first_name='Walter',
        last_name='White',
        email='walter@example.com',
        address='123 Albuquerque Rd',
        phone_number=8901234567,
        password='password'
    )
    user18 = User(
        username='xena',
        first_name='Xena',
        last_name='Warrior',
        email='xena@example.com',
        address='456 Warrior Blvd',
        phone_number=9012345678,
        password='password'
    )
    user19 = User(
        username='yolanda',
        first_name='Yolanda',
        last_name='Foster',
        email='yolanda@example.com',
        address='789 Foster Ln',
        phone_number=1234567890,
        password='password'
    )
    user20 = User(
        username='zack',
        first_name='Zack',
        last_name='Morris',
        email='zack@example.com',
        address='123 Bayside High',
        phone_number=2345678901,
        password='password'
    )

    db.session.add_all([
        demo, marnie, bobbie, user4, user5, user6, user7, user8, user9, user10,
        user11, user12, user13, user14, user15, user16, user17, user18, user19, user20
    ])
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
