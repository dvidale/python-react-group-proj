from app.models import db, MenuItem, SCHEMA

def seed_menu_items1():
    menu_items = [
        # Restaurant 1
        MenuItem(
            restaurant_id=1,
            name="Classic Burger",
            like_percentage=85,
            description="A classic beef burger with lettuce, tomato, and cheese.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723911366/Classic_Burger_ir7xsk.jpg",
            quantity=100,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=1,
            name="Chicken Caesar Salad",
            like_percentage=90,
            description="Grilled chicken served on a bed of fresh romaine lettuce.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1724002850/Chicken_Caesar_Salad_txpbvb.jpg",
            quantity=80,
            ratings_count=40
        ),
        MenuItem(
            restaurant_id=1,
            name="Veggie Wrap",
            like_percentage=88,
            description="A fresh and flavorful veggie wrap filled with crisp lettuce, ripe tomatoes, crunchy cucumbers, shredded carrots, and creamy avocado, all drizzled with a tangy hummus spread.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723912283/Veggie_Wrap_vija9f.jpg",
            quantity=120,
            ratings_count=35
        ),
        MenuItem(
            restaurant_id=1,
            name="BBQ Ribs",
            like_percentage=92,
            description="Tender ribs with a smoky BBQ sauce.",
            price=15.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723912339/BBQ_Ribs_bbpwqh.jpg",
            quantity=60,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=1,
            name="Fish & Chips",
            like_percentage=87,
            description="Crispy fried fish with golden chips.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723912398/Fish_Chips_urdb7z.jpg",
            quantity=75,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=1,
            name="Margherita Pizza",
            like_percentage=91,
            description="Classic pizza topped with fresh tomatoes and mozzarella.",
            price=10.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723912447/Margherita_Pizza_hwlfhd.jpg",
            quantity=90,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=1,
            name="Pasta Primavera",
            like_percentage=89,
            description="Pasta with fresh vegetables in a light garlic sauce.",
            price=11.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723912492/Pasta_Primavera_zh1ncw.jpg",
            quantity=85,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=1,
            name="Grilled Chicken Sandwich",
            like_percentage=93,
            description="Juicy grilled chicken sandwich with lettuce and tomato.",
            price=9.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723912715/Grilled_Chicken_Sandwich_phhmpd.jpg",
            quantity=110,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=1,
            name="Steak Frites",
            like_percentage=94,
            description="Grilled steak served with crispy fries.",
            price=18.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723912758/Steak_Frites_t3ockd.jpg",
            quantity=70,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=1,
            name="Cheesecake",
            like_percentage=97,
            description="Rich and creamy cheesecake with a graham cracker crust.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723912802/Cheesecake_qfskgk.jpg",
            quantity=50,
            ratings_count=90
        ),

        # Restaurant 2
        MenuItem(
            restaurant_id=2,
            name="Spicy Tacos",
            like_percentage=92,
            description="Three spicy beef tacos with salsa and guacamole.",
            price=8.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723913122/Spicy_Tacos_jokp9n.jpg",
            quantity=120,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=2,
            name="Grilled Fish",
            like_percentage=88,
            description="Grilled fish served with lemon butter sauce.",
            price=14.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723913172/Grilled_Fish_mlbvgj.jpg",
            quantity=60,
            ratings_count=30
        ),
        MenuItem(
            restaurant_id=2,
            name="Chili Con Carne",
            like_percentage=89,
            description="Hearty chili with beans and ground beef.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723913219/Chili_Con_Carne_y00ley.jpg",
            quantity=85,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=2,
            name="Beef Enchiladas",
            like_percentage=90,
            description="Savory beef enchiladas topped with melted cheese.",
            price=10.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723913421/Beef_Enchiladas_aixzwv.jpg",
            quantity=95,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=2,
            name="Chicken Quesadilla",
            like_percentage=91,
            description="Grilled chicken with cheese in a crispy tortilla.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723913468/Chicken_Quesadillas_ur1ycx.jpg",
            quantity=110,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=2,
            name="Taco Salad",
            like_percentage=86,
            description="A fresh salad with taco toppings and a zesty dressing.",
            price=7.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723913529/Taco_Salad_pesadc.jpg",
            quantity=75,
            ratings_count=40
        ),
        MenuItem(
            restaurant_id=2,
            name="Margarita",
            like_percentage=95,
            description="Classic margarita with lime and salt.",
            price=5.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723913581/Margarita_soed7y.jpg",
            quantity=150,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=2,
            name="Nachos Supreme",
            like_percentage=93,
            description="Crispy nachos topped with cheese, jalapenos, and guacamole.",
            price=9.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723913618/Nachos_Supreme_dy3te3.jpg",
            quantity=105,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=2,
            name="Sopa de Tortilla",
            like_percentage=87,
            description="Spicy tortilla soup with fresh avocado.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723913667/Sopa_de_Tortilla_vqzajz.jpg",
            quantity=80,
            ratings_count=35
        ),
        MenuItem(
            restaurant_id=2,
            name="Churros",
            like_percentage=96,
            description="Sweet fried dough rolled in cinnamon sugar.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723913711/Churros_ql7heo.jpg",
            quantity=130,
            ratings_count=95
        ),

        # Restaurant 3
        MenuItem(
            restaurant_id=3,
            name="Margherita Pizza",
            like_percentage=91,
            description="Classic pizza topped with fresh tomatoes and mozzarella.",
            price=10.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915051/Margherita_Pizza_sdi7kn.jpg",
            quantity=90,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=3,
            name="Spaghetti Carbonara",
            like_percentage=89,
            description="Pasta with creamy sauce, pancetta, and Parmesan.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915030/Spaghetti_Carbonara_rmghkk.jpg",
            quantity=80,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=3,
            name="Lasagna",
            like_percentage=92,
            description="Layers of pasta, cheese, and meat sauce baked to perfection.",
            price=13.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915098/Lasagna_ndusyo.jpg",
            quantity=75,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=3,
            name="Fettuccine Alfredo",
            like_percentage=88,
            description="Creamy Alfredo sauce over fettuccine pasta.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915154/Fettucini_Alfredo_px7ts7.jpg",
            quantity=85,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=3,
            name="Caprese Salad",
            like_percentage=90,
            description="Fresh mozzarella, tomatoes, and basil drizzled with olive oil.",
            price=8.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915200/Caprese_Salad_mmep0z.jpg",
            quantity=100,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=3,
            name="Pesto Penne",
            like_percentage=87,
            description="Penne pasta with a fresh basil pesto sauce.",
            price=11.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915247/Pasta_Penne_u6qj3m.jpg",
            quantity=85,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=3,
            name="Tiramisu",
            like_percentage=95,
            description="Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915274/Tiramisu_icwvux.jpg",
            quantity=110,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=3,
            name="Bruschetta",
            like_percentage=92,
            description="Toasted bread topped with fresh tomatoes and basil.",
            price=7.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915325/Bruschetta_q48uos.jpg",
            quantity=90,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=3,
            name="Cannoli",
            like_percentage=94,
            description="Crispy pastry filled with sweet ricotta cheese.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915360/Cannoli_bye0p9.jpg",
            quantity=130,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=3,
            name="Pizza Pepperoni",
            like_percentage=93,
            description="Pizza topped with pepperoni and mozzarella cheese.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915749/Pepperoni_Pizza_hyvdu3.jpg",
            quantity=100,
            ratings_count=75
        ),

        # Restaurant 4
        MenuItem(
            restaurant_id=4,
            name="Sushi Platter",
            like_percentage=95,
            description="Assorted sushi rolls and nigiri.",
            price=24.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915814/Sushi_Platter_fjjp7e.jpg",
            quantity=50,
            ratings_count=40
        ),
        MenuItem(
            restaurant_id=4,
            name="Ramen Bowl",
            like_percentage=92,
            description="Hearty ramen with pork, egg, and vegetables.",
            price=13.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915889/Ramen_Bowl_hrh4wz.jpg",
            quantity=70,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=4,
            name="Tempura Shrimp",
            like_percentage=90,
            description="Crispy tempura shrimp with dipping sauce.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915936/Tempura_Shrimp_jabepo.jpg",
            quantity=80,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=4,
            name="Sashimi Platter",
            like_percentage=93,
            description="Fresh sashimi slices served with soy sauce and wasabi.",
            price=21.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723915979/Sashimi_Platter_ma2msz.jpg",
            quantity=60,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=4,
            name="California Roll",
            like_percentage=94,
            description="Classic sushi roll with crab, avocado, and cucumber.",
            price=8.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916019/California_Roll_o4hj3l.jpg",
            quantity=100,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=4,
            name="Spicy Tuna Roll",
            like_percentage=91,
            description="Sushi roll with spicy tuna and avocado.",
            price=9.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916056/Spicy_Tuna_Roll_dy1bia.jpg",
            quantity=90,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=4,
            name="Miso Soup",
            like_percentage=89,
            description="Traditional miso soup with tofu and seaweed.",
            price=3.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916085/Miso_Soup_tn5gpt.jpg",
            quantity=120,
            ratings_count=30
        ),
        MenuItem(
            restaurant_id=4,
            name="Edamame",
            like_percentage=88,
            description="Steamed edamame with sea salt.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916132/Edamame_dtbrhe.jpg",
            quantity=110,
            ratings_count=40
        ),
        MenuItem(
            restaurant_id=4,
            name="Gyoza",
            like_percentage=93,
            description="Pan-fried dumplings filled with pork and vegetables.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916162/Gyoza_iqnnwe.jpg",
            quantity=80,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=4,
            name="Mochi Ice Cream",
            like_percentage=96,
            description="Sweet mochi filled with ice cream in various flavors.",
            price=5.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916192/Mochi_Ice_Cream_vumrpn.jpg",
            quantity=90,
            ratings_count=65
        ),
         MenuItem(
            restaurant_id=5,
            name="Classic Cheeseburger",
            like_percentage=90,
            description="Juicy beef patty topped with cheddar cheese, lettuce, and tomato.",
            price=10.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916245/Classic_Cheeseburger_sjndqp.jpg",
            quantity=120,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=5,
            name="Bacon Burger",
            like_percentage=94,
            description="Beef burger topped with crispy bacon and melted cheddar.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916331/Bacon_Burger_xnhxwz.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=5,
            name="Veggie Burger",
            like_percentage=88,
            description="Delicious plant-based patty with lettuce, tomato, and vegan mayo.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916445/Veggie_Burger_lsaoac.jpg",
            quantity=100,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=5,
            name="BBQ Chicken Sandwich",
            like_percentage=92,
            description="Grilled chicken breast with BBQ sauce, lettuce, and pickles.",
            price=10.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916502/BBQ_Chicken_Sandiwch_uw4yhw.jpg",
            quantity=90,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=5,
            name="Crispy Chicken Tenders",
            like_percentage=89,
            description="Golden fried chicken tenders served with dipping sauce.",
            price=8.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916535/Crispy_Chicken_Tenders_eir04t.jpg",
            quantity=13,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=5,
            name="Loaded Fries",
            like_percentage=93,
            description="Fries loaded with cheese, bacon, and green onions.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916569/Loaded_Fries_cpl8uk.jpg",
            quantity=140,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=5,
            name="Onion Rings",
            like_percentage=87,
            description="Crispy onion rings served with a side of ranch.",
            price=5.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916598/Onion_Rings_auilhu.jpg",
            quantity=150,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=5,
            name="Milkshake",
            like_percentage=95,
            description="Creamy milkshake available in vanilla, chocolate, and strawberry.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916634/Mlikshake_edi5sa.jpg",
            quantity=160,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=5,
            name="Double Cheeseburger",
            like_percentage=96,
            description="Double beef patty with double cheddar cheese, lettuce, and tomato.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916666/Double_Cheeseburger_clrohr.jpg",
            quantity=110,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=5,
            name="Apple Pie",
            like_percentage=97,
            description="Warm apple pie with a flaky crust.",
            price=4.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916690/Apple_Pie_czy3na.jpg",
            quantity=80,
            ratings_count=70
        ),

        # Restaurant 6
        MenuItem(
            restaurant_id=6,
            name="Pepperoni Pizza",
            like_percentage=94,
            description="Classic pizza with pepperoni and mozzarella cheese.",
            price=11.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916916/Pepperoni_Pizza_fcdbak.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=6,
            name="BBQ Chicken Pizza",
            like_percentage=92,
            description="Pizza topped with BBQ chicken, red onions, and cilantro.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723916969/BBQ_Chicken_Pizza_aeusgp.jpg",
            quantity=100,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=6,
            name="Veggie Pizza",
            like_percentage=89,
            description="Pizza topped with bell peppers, onions, mushrooms, and olives.",
            price=10.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917067/Veggie_Pizza_cnn1ny.jpg",
            quantity=90,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=6,
            name="Hawaiian Pizza",
            like_percentage=87,
            description="Pizza topped with ham, pineapple, and mozzarella cheese.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917065/Hawaiian_Pizza_d7y9cv.jpg",
            quantity=85,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=6,
            name="Meat Lovers Pizza",
            like_percentage=96,
            description="Pizza loaded with pepperoni, sausage, bacon, and ham.",
            price=13.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917100/Meat_Lovers_Pizza_lgqtom.jpg",
            quantity=110,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=6,
            name="Cheese Pizza",
            like_percentage=90,
            description="Classic pizza with mozzarella and Parmesan cheese.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917166/Cheese_Pizza_rff1je.jpg",
            quantity=130,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=6,
            name="Garlic Knots",
            like_percentage=93,
            description="Soft dough knots brushed with garlic butter.",
            price=5.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917164/Garlic_Knots_lixd9k.jpg",
            quantity=140,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=6,
            name="Buffalo Wings",
            like_percentage=95,
            description="Spicy buffalo wings served with blue cheese dressing.",
            price=10.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917194/Buffalo_Wings_hf0jis.jpg",
            quantity=120,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=6,
            name="Caesar Salad",
            like_percentage=88,
            description="Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917216/Caesar_Salad_yrhayu.jpg",
            quantity=150,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=6,
            name="Chocolate Brownie",
            like_percentage=97,
            description="Rich chocolate brownie served warm with a scoop of vanilla ice cream.",
            price=6.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917239/Chocolate_Brownie_zipb7r.jpg",
            quantity=100,
            ratings_count=90
        ),

        # Restaurant 7
        MenuItem(
            restaurant_id=7,
            name="Taco Platter",
            like_percentage=93,
            description="Three tacos with your choice of chicken, beef, or pork, served with rice and beans.",
            price=10.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917547/Taco_Platter_tvc8ow.jpg",
            quantity=120,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=7,
            name="Chicken Fajitas",
            like_percentage=92,
            description="Sizzling chicken fajitas with bell peppers, onions, and tortillas.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917545/Chicken_Fajitas_q1k2uj.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=7,
            name="Beef Burrito",
            like_percentage=91,
            description="A large burrito stuffed with seasoned beef, rice, beans, and cheese.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917540/Beef_Burrito_zz8js8.jpg",
            quantity=130,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=7,
            name="Chimichanga",
            like_percentage=89,
            description="Deep-fried burrito filled with your choice of meat, served with guacamole and sour cream.",
            price=11.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917542/Chimichanga_q41zjz.jpg",
            quantity=100,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=7,
            name="Enchilada Plate",
            like_percentage=94,
            description="Two enchiladas with red or green sauce, served with rice and beans.",
            price=12.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917538/Enchilada_Plate_osyulw.jpg",
            quantity=90,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=7,
            name="Nachos",
            like_percentage=90,
            description="Tortilla chips topped with melted cheese, jalapenos, and sour cream.",
            price=8.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917536/Nachos_qan2vy.jpg",
            quantity=150,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=7,
            name="Guacamole & Chips",
            like_percentage=95,
            description="Freshly made guacamole served with crispy tortilla chips.",
            price=6.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917553/Guacamole_Chips_tfsueu.jpg",
            quantity=140,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=7,
            name="Salsa Verde",
            like_percentage=87,
            description="Tangy green salsa made with tomatillos and jalapenos.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917550/Salsa_Verde_sckej6.jpg",
            quantity=160,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=7,
            name="Chicken Tacos",
            like_percentage=94,
            description="Soft tacos filled with seasoned chicken, lettuce, and cheese.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917556/Chicken_Tacos_jynuqg.jpg",
            quantity=130,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=7,
            name="Flan",
            like_percentage=96,
            description="Rich caramel custard dessert with a hint of vanilla.",
            price=5.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723917534/Flan_ieghuf.jpg",
            quantity=110,
            ratings_count=90
        ),

        # Restaurant 8
        MenuItem(
            restaurant_id=8,
            name="BBQ Ribs",
            like_percentage=96,
            description="Tender pork ribs slow-cooked and glazed with a sweet and tangy BBQ sauce.",
            price=16.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952088/BBQ_Ribs_jseipe.jpg",
            quantity=100,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=8,
            name="Pulled Pork Sandwich",
            like_percentage=94,
            description="Slow-cooked pulled pork served on a soft bun with coleslaw.",
            price=10.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952088/Pulled_Pork_Sandwich_js6s8q.jpg",
            quantity=90,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=8,
            name="Brisket",
            like_percentage=93,
            description="Smoked beef brisket served with BBQ sauce and pickles.",
            price=17.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952088/Brisket_mhfno2.jpg",
            quantity=80,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=8,
            name="Cornbread",
            like_percentage=91,
            description="Sweet and moist cornbread served with butter.",
            price=3.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952088/Cornbread_s0qstn.jpg",
            quantity=140,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=8,
            name="Mac and Cheese",
            like_percentage=95,
            description="Creamy macaroni and cheese made with a blend of cheddar and mozzarella.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952088/Mac_and_Cheese_q0u5i2.jpg",
            quantity=150,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=8,
            name="BBQ Chicken",
            like_percentage=92,
            description="Grilled chicken basted with BBQ sauce, served with baked beans.",
            price=12.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952088/BBQ_Chicken_qxbiqg.jpg",
            quantity=130,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=8,
            name="Coleslaw",
            like_percentage=90,
            description="Crisp and tangy coleslaw made with cabbage and carrots.",
            price=3.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952089/Cole_Slaw_dghsrd.jpg",
            quantity=160,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=8,
            name="BBQ Sausage",
            like_percentage=93,
            description="Smoked sausage links served with mustard and pickles.",
            price=9.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952090/BBQ_Sausage_jrejqd.jpg",
            quantity=110,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=8,
            name="Peach Cobbler",
            like_percentage=97,
            description="Warm peach cobbler topped with a scoop of vanilla ice cream.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952088/Gemini_Generated_Image_5iwmv95iwmv95iwm_tn89kp.jpg",
            quantity=120,
            ratings_count=105
        ),
        MenuItem(
            restaurant_id=8,
            name="Sweet Tea",
            like_percentage=90,
            description="Southern sweet tea served over ice.",
            price=2.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952090/Sweet_Tea_tizoij.jpg",
            quantity=180,
            ratings_count=95
        ),

        # Restaurant 9
        MenuItem(
            restaurant_id=9,
            name="Vegan Burger",
            like_percentage=90,
            description="Plant-based burger with lettuce, tomato, and vegan mayo.",
            price=11.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723925429/Vegan_Burger_afvxdq.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=9,
            name="Falafel Wrap",
            like_percentage=92,
            description="Crispy falafel wrapped in a warm pita with hummus and veggies.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723925414/Falafel_Wrap_fb8llh.jpg",
            quantity=100,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=9,
            name="Vegan Pizza",
            like_percentage=89,
            description="Pizza topped with vegan cheese, mushrooms, and spinach.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723925435/Vegan_Pizza_er7hv0.jpg",
            quantity=90,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=9,
            name="Quinoa Salad",
            like_percentage=90,
            description="Healthy quinoa salad with chickpeas, cucumber, and lemon dressing.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723925419/Quinoa_Salad_fxqwjp.jpg",
            quantity=150,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=9,
            name="Vegan Tacos",
            like_percentage=93,
            description="Soft tacos filled with seasoned black beans, avocado, and salsa.",
            price=9.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723925437/Vegan_Tacos_q6usjk.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=9,
            name="Vegan Burrito",
            like_percentage=87,
            description="A hearty burrito filled with rice, beans, and vegetables.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723925426/Vegan_Burrito_jxluxw.jpg",
            quantity=130,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=9,
            name="Tofu Stir-Fry",
            like_percentage=94,
            description="Stir-fried tofu with vegetables in a savory soy sauce.",
            price=10.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723925424/Tofu_Stir-Fry_lgrldc.jpg",
            quantity=120,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=9,
            name="Vegan Ice Cream",
            like_percentage=97,
            description="Dairy-free ice cream available in chocolate and vanilla.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723925432/Vegan_Ice_Cream_quluri.jpg",
            quantity=140,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=9,
            name="Kale Chips",
            like_percentage=88,
            description="Crispy baked kale chips with sea salt.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723925416/Kale_Chips_qximd2.jpg",
            quantity=160,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=9,
            name="Smoothie Bowl",
            like_percentage=95,
            description="Refreshing smoothie bowl topped with fresh fruit and granola.",
            price=7.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723925421/Smoothie_Bowl_mj36jw.jpg",
            quantity=100,
            ratings_count=75
        ),

        # Restaurant 10
        MenuItem(
            restaurant_id=10,
            name="Ribeye Steak",
            like_percentage=96,
            description="Juicy and tender ribeye steak, grilled to perfection and seasoned with our signature blend of spices.",
            price=29.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952639/Ribeye_Steak_ib3gjh.jpg",
            quantity=80,
            ratings_count=150
        ),
        MenuItem(
            restaurant_id=10,
            name="Filet Mignon",
            like_percentage=98,
            description="Premium cut filet mignon, cooked to your preference and served with a side of garlic butter.",
            price=34.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952636/Filet_Mignon_eue4mv.jpg",
            quantity=70,
            ratings_count=140
        ),
        MenuItem(
            restaurant_id=10,
            name="New York Strip",
            like_percentage=94,
            description="Thick and flavorful New York strip steak, grilled and served with a side of mashed potatoes.",
            price=27.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952637/New_York_Strip_dmnnro.jpg",
            quantity=90,
            ratings_count=130
        ),
        MenuItem(
            restaurant_id=10,
            name="T-Bone Steak",
            like_percentage=95,
            description="Classic T-bone steak, offering the best of both worlds with tenderloin and strip steak in one cut.",
            price=31.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952636/T-Bone_Streak_fjprtv.jpg",
            quantity=60,
            ratings_count=120
        ),
        MenuItem(
            restaurant_id=10,
            name="Grilled Sirloin",
            like_percentage=92,
            description="Lean and flavorful sirloin steak, marinated and grilled to perfection, served with steamed vegetables.",
            price=24.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952638/Grilled_Sirloin_qqep7j.jpg",
            quantity=100,
            ratings_count=110
        ),
        MenuItem(
            restaurant_id=10,
            name="Prime Rib",
            like_percentage=97,
            description="Slow-roasted prime rib, served with a side of au jus and creamy horseradish sauce.",
            price=32.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952636/Prime_Rib_ohcbcg.jpg",
            quantity=50,
            ratings_count=145
        ),
        MenuItem(
            restaurant_id=10,
            name="Beef Tenderloin",
            like_percentage=93,
            description="Succulent beef tenderloin, grilled and served with a red wine reduction sauce.",
            price=28.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952636/Beef_Tenderloin_pyipcn.jpg",
            quantity=85,
            ratings_count=125
        ),
        MenuItem(
            restaurant_id=10,
            name="Porterhouse Steak",
            like_percentage=94,
            description="Large and flavorful porterhouse steak, ideal for sharing or for the hungriest of steak lovers.",
            price=35.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952637/Porterhouse_Steak_jpxwrn.jpg",
            quantity=40,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=10,
            name="Steak Frites",
            like_percentage=90,
            description="Sliced sirloin steak served with crispy French fries and a side of garlic aioli.",
            price=21.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952639/Streak_Frites_icjhd1.jpg",
            quantity=120,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=10,
            name="Wagyu Steak",
            like_percentage=99,
            description="Exquisite Wagyu beef steak, known for its intense marbling and unmatched tenderness.",
            price=49.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723952638/Wagyu_Steak_znhpvp.jpg",
            quantity=30,
            ratings_count=160
        ),

    ]

    db.session.bulk_save_objects(menu_items)
    db.session.commit()

def undo_menu_items1():
    db.session.execute(f'TRUNCATE table {SCHEMA}.menu_items RESTART IDENTITY CASCADE;')
    db.session.commit()
