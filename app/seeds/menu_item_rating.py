from app.models import db, environment, SCHEMA
from sqlalchemy.sql import text
from ..models import MenuItemRating

def seed_menu_item_ratings():

    menu_item_ratings = [
        # Restaurant 1 (menu_item_id's 1-10)
        MenuItemRating(id=1, vote=True, menu_item_id=2, review_id=1),
        MenuItemRating(id=2, vote=False, menu_item_id=5, review_id=2),
        MenuItemRating(id=3, vote=True, menu_item_id=7, review_id=3),
        MenuItemRating(id=4, vote=True, menu_item_id=9, review_id=4),
        MenuItemRating(id=5, vote=False, menu_item_id=10, review_id=5),

        # Restaurant 2 (menu_item_id's 11-20)
        MenuItemRating(id=6, vote=True, menu_item_id=12, review_id=6),
        MenuItemRating(id=7, vote=False, menu_item_id=13, review_id=7),
        MenuItemRating(id=8, vote=True, menu_item_id=16, review_id=8),
        MenuItemRating(id=9, vote=False, menu_item_id=17, review_id=9),
        MenuItemRating(id=10, vote=True, menu_item_id=19, review_id=10),

        # Restaurant 3 (menu_item_id's 21-30)
        MenuItemRating(id=11, vote=False, menu_item_id=22, review_id=11),
        MenuItemRating(id=12, vote=True, menu_item_id=24, review_id=12),
        MenuItemRating(id=13, vote=True, menu_item_id=27, review_id=13),
        MenuItemRating(id=14, vote=False, menu_item_id=29, review_id=14),
        MenuItemRating(id=15, vote=True, menu_item_id=21, review_id=15),

        # Restaurant 4 (menu_item_id's 31-40)
        MenuItemRating(id=16, vote=True, menu_item_id=32, review_id=16),
        MenuItemRating(id=17, vote=False, menu_item_id=35, review_id=17),
        MenuItemRating(id=18, vote=True, menu_item_id=37, review_id=18),
        MenuItemRating(id=19, vote=False, menu_item_id=38, review_id=19),
        MenuItemRating(id=20, vote=True, menu_item_id=40, review_id=20),

        # Restaurant 5 (menu_item_id's 41-50)
        MenuItemRating(id=21, vote=True, menu_item_id=42, review_id=21),
        MenuItemRating(id=22, vote=False, menu_item_id=43, review_id=22),
        MenuItemRating(id=23, vote=True, menu_item_id=46, review_id=23),
        MenuItemRating(id=24, vote=False, menu_item_id=48, review_id=24),
        MenuItemRating(id=25, vote=True, menu_item_id=49, review_id=25),

        # Restaurant 6 (menu_item_id's 51-60)
        MenuItemRating(id=26, vote=False, menu_item_id=53, review_id=26),
        MenuItemRating(id=27, vote=True, menu_item_id=55, review_id=27),
        MenuItemRating(id=28, vote=True, menu_item_id=51, review_id=28),
        MenuItemRating(id=29, vote=False, menu_item_id=56, review_id=29),
        MenuItemRating(id=30, vote=True, menu_item_id=59, review_id=30),

        # Restaurant 7 (menu_item_id's 61-70)
        MenuItemRating(id=31, vote=True, menu_item_id=62, review_id=31),
        MenuItemRating(id=32, vote=False, menu_item_id=64, review_id=32),
        MenuItemRating(id=33, vote=True, menu_item_id=66, review_id=33),
        MenuItemRating(id=34, vote=False, menu_item_id=67, review_id=34),
        MenuItemRating(id=35, vote=True, menu_item_id=69, review_id=35),

        # Restaurant 8 (menu_item_id's 71-80)
        MenuItemRating(id=36, vote=False, menu_item_id=72, review_id=36),
        MenuItemRating(id=37, vote=True, menu_item_id=74, review_id=37),
        MenuItemRating(id=38, vote=True, menu_item_id=76, review_id=38),
        MenuItemRating(id=39, vote=False, menu_item_id=78, review_id=39),
        MenuItemRating(id=40, vote=True, menu_item_id=80, review_id=40),

        # Restaurant 9 (menu_item_id's 81-90)
        MenuItemRating(id=41, vote=False, menu_item_id=83, review_id=41),
        MenuItemRating(id=42, vote=True, menu_item_id=86, review_id=42),
        MenuItemRating(id=43, vote=True, menu_item_id=89, review_id=43),
        MenuItemRating(id=44, vote=False, menu_item_id=82, review_id=44),
        MenuItemRating(id=45, vote=True, menu_item_id=88, review_id=45),

        # Restaurant 10 (menu_item_id's 91-100)
        MenuItemRating(id=46, vote=True, menu_item_id=94, review_id=46),
        MenuItemRating(id=47, vote=False, menu_item_id=97, review_id=47),
        MenuItemRating(id=48, vote=True, menu_item_id=90, review_id=48),
        MenuItemRating(id=49, vote=False, menu_item_id=92, review_id=49),
        MenuItemRating(id=50, vote=True, menu_item_id=100, review_id=50),

        # Restaurant 11 (menu_item_id's 101-110)
        MenuItemRating(id=51, vote=True, menu_item_id=103, review_id=51),
        MenuItemRating(id=52, vote=False, menu_item_id=104, review_id=52),
        MenuItemRating(id=53, vote=True, menu_item_id=107, review_id=53),
        MenuItemRating(id=54, vote=False, menu_item_id=109, review_id=54),
        MenuItemRating(id=55, vote=True, menu_item_id=101, review_id=55),

        # Restaurant 12 (menu_item_id's 111-120)
        MenuItemRating(id=56, vote=True, menu_item_id=115, review_id=56),
        MenuItemRating(id=57, vote=False, menu_item_id=111, review_id=57),
        MenuItemRating(id=58, vote=True, menu_item_id=113, review_id=58),
        MenuItemRating(id=59, vote=False, menu_item_id=118, review_id=59),
        MenuItemRating(id=60, vote=True, menu_item_id=120, review_id=60),

        # Restaurant 13 (menu_item_id's 121-130)
        MenuItemRating(id=61, vote=False, menu_item_id=124, review_id=61),
        MenuItemRating(id=62, vote=True, menu_item_id=121, review_id=62),
        MenuItemRating(id=63, vote=True, menu_item_id=129, review_id=63),
        MenuItemRating(id=64, vote=False, menu_item_id=127, review_id=64),
        MenuItemRating(id=65, vote=True, menu_item_id=126, review_id=65),

        # Restaurant 14 (menu_item_id's 131-140)
        MenuItemRating(id=66, vote=True, menu_item_id=134, review_id=66),
        MenuItemRating(id=67, vote=False, menu_item_id=137, review_id=67),
        MenuItemRating(id=68, vote=True, menu_item_id=132, review_id=68),
        MenuItemRating(id=69, vote=False, menu_item_id=139, review_id=69),
        MenuItemRating(id=70, vote=True, menu_item_id=138, review_id=70),

        # Restaurant 15 (menu_item_id's 141-150)
        MenuItemRating(id=71, vote=True, menu_item_id=144, review_id=71),
        MenuItemRating(id=72, vote=False, menu_item_id=146, review_id=72),
        MenuItemRating(id=73, vote=True, menu_item_id=149, review_id=73),
        MenuItemRating(id=74, vote=False, menu_item_id=145, review_id=74),
        MenuItemRating(id=75, vote=True, menu_item_id=141, review_id=75),

        # Restaurant 16 (menu_item_id's 151-160)
        MenuItemRating(id=76, vote=False, menu_item_id=155, review_id=76),
        MenuItemRating(id=77, vote=True, menu_item_id=153, review_id=77),
        MenuItemRating(id=78, vote=True, menu_item_id=159, review_id=78),
        MenuItemRating(id=79, vote=False, menu_item_id=152, review_id=79),
        MenuItemRating(id=80, vote=True, menu_item_id=154, review_id=80),

        # Restaurant 17 (menu_item_id's 161-170)
        MenuItemRating(id=81, vote=True, menu_item_id=167, review_id=81),
        MenuItemRating(id=82, vote=False, menu_item_id=161, review_id=82),
        MenuItemRating(id=83, vote=True, menu_item_id=165, review_id=83),
        MenuItemRating(id=84, vote=False, menu_item_id=168, review_id=84),
        MenuItemRating(id=85, vote=True, menu_item_id=170, review_id=85),

        # Restaurant 18 (menu_item_id's 171-180)
        MenuItemRating(id=86, vote=False, menu_item_id=173, review_id=86),
        MenuItemRating(id=87, vote=True, menu_item_id=179, review_id=87),
        MenuItemRating(id=88, vote=True, menu_item_id=175, review_id=88),
        MenuItemRating(id=89, vote=False, menu_item_id=178, review_id=89),
        MenuItemRating(id=90, vote=True, menu_item_id=171, review_id=90),

        # Restaurant 19 (menu_item_id's 181-190)
        MenuItemRating(id=91, vote=True, menu_item_id=186, review_id=91),
        MenuItemRating(id=92, vote=False, menu_item_id=184, review_id=92),
        MenuItemRating(id=93, vote=True, menu_item_id=188, review_id=93),
        MenuItemRating(id=94, vote=False, menu_item_id=190, review_id=94),
        MenuItemRating(id=95, vote=True, menu_item_id=182, review_id=95),

        # Restaurant 20 (menu_item_id's 191-200)
        MenuItemRating(id=96, vote=False, menu_item_id=193, review_id=96),
        MenuItemRating(id=97, vote=True, menu_item_id=197, review_id=97),
        MenuItemRating(id=98, vote=False, menu_item_id=199, review_id=98),
        MenuItemRating(id=99, vote=True, menu_item_id=192, review_id=99),
        MenuItemRating(id=100, vote=True, menu_item_id=195, review_id=100)

    ]

    db.session.bulk_save_objects(menu_item_ratings)
    db.session.commit()

def undo_menu_item_ratings():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.restaurants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM menu_item_ratings"))

    db.session.commit()
