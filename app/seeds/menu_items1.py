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
            image_url="https://example.com/images/classic_burger.jpg",
            quantity=100,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=1,
            name="Chicken Caesar Salad",
            like_percentage=90,
            description="Grilled chicken served on a bed of fresh romaine lettuce.",
            price=11.99,
            image_url="https://example.com/images/chicken_caesar_salad.jpg",
            quantity=80,
            ratings_count=40
        ),
        MenuItem(
            restaurant_id=1,
            name="Veggie Wrap",
            like_percentage=88,
            description="A healthy wrap filled with fresh vegetables and hummus.",
            price=8.49,
            image_url="https://example.com/images/veggie_wrap.jpg",
            quantity=120,
            ratings_count=35
        ),
        MenuItem(
            restaurant_id=1,
            name="BBQ Ribs",
            like_percentage=92,
            description="Tender ribs with a smoky BBQ sauce.",
            price=15.99,
            image_url="https://example.com/images/bbq_ribs.jpg",
            quantity=60,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=1,
            name="Fish & Chips",
            like_percentage=87,
            description="Crispy fried fish with golden chips.",
            price=12.99,
            image_url="https://example.com/images/fish_chips.jpg",
            quantity=75,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=1,
            name="Margherita Pizza",
            like_percentage=91,
            description="Classic pizza topped with fresh tomatoes and mozzarella.",
            price=10.99,
            image_url="https://example.com/images/margherita_pizza.jpg",
            quantity=90,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=1,
            name="Pasta Primavera",
            like_percentage=89,
            description="Pasta with fresh vegetables in a light garlic sauce.",
            price=11.49,
            image_url="https://example.com/images/pasta_primavera.jpg",
            quantity=85,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=1,
            name="Grilled Chicken Sandwich",
            like_percentage=93,
            description="Juicy grilled chicken sandwich with lettuce and tomato.",
            price=9.49,
            image_url="https://example.com/images/grilled_chicken_sandwich.jpg",
            quantity=110,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=1,
            name="Steak Frites",
            like_percentage=94,
            description="Grilled steak served with crispy fries.",
            price=18.99,
            image_url="https://example.com/images/steak_frites.jpg",
            quantity=70,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=1,
            name="Cheesecake",
            like_percentage=97,
            description="Rich and creamy cheesecake with a graham cracker crust.",
            price=6.99,
            image_url="https://example.com/images/cheesecake.jpg",
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
            image_url="https://example.com/images/spicy_tacos.jpg",
            quantity=120,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=2,
            name="Grilled Fish",
            like_percentage=88,
            description="Grilled fish served with lemon butter sauce.",
            price=14.99,
            image_url="https://example.com/images/grilled_fish.jpg",
            quantity=60,
            ratings_count=30
        ),
        MenuItem(
            restaurant_id=2,
            name="Chili Con Carne",
            like_percentage=89,
            description="Hearty chili with beans and ground beef.",
            price=9.99,
            image_url="https://example.com/images/chili_con_carne.jpg",
            quantity=85,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=2,
            name="Beef Enchiladas",
            like_percentage=90,
            description="Savory beef enchiladas topped with melted cheese.",
            price=10.49,
            image_url="https://example.com/images/beef_enchiladas.jpg",
            quantity=95,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=2,
            name="Chicken Quesadilla",
            like_percentage=91,
            description="Grilled chicken with cheese in a crispy tortilla.",
            price=8.49,
            image_url="https://example.com/images/chicken_quesadilla.jpg",
            quantity=110,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=2,
            name="Taco Salad",
            like_percentage=86,
            description="A fresh salad with taco toppings and a zesty dressing.",
            price=7.99,
            image_url="https://example.com/images/taco_salad.jpg",
            quantity=75,
            ratings_count=40
        ),
        MenuItem(
            restaurant_id=2,
            name="Margarita",
            like_percentage=95,
            description="Classic margarita with lime and salt.",
            price=5.99,
            image_url="https://example.com/images/margarita.jpg",
            quantity=150,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=2,
            name="Nachos Supreme",
            like_percentage=93,
            description="Crispy nachos topped with cheese, jalapenos, and guacamole.",
            price=9.49,
            image_url="https://example.com/images/nachos_supreme.jpg",
            quantity=105,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=2,
            name="Sopa de Tortilla",
            like_percentage=87,
            description="Spicy tortilla soup with fresh avocado.",
            price=6.99,
            image_url="https://example.com/images/sopa_de_tortilla.jpg",
            quantity=80,
            ratings_count=35
        ),
        MenuItem(
            restaurant_id=2,
            name="Churros",
            like_percentage=96,
            description="Sweet fried dough rolled in cinnamon sugar.",
            price=4.99,
            image_url="https://example.com/images/churros.jpg",
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
            image_url="https://example.com/images/margherita_pizza.jpg",
            quantity=90,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=3,
            name="Spaghetti Carbonara",
            like_percentage=89,
            description="Pasta with creamy sauce, pancetta, and Parmesan.",
            price=12.99,
            image_url="https://example.com/images/spaghetti_carbonara.jpg",
            quantity=80,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=3,
            name="Lasagna",
            like_percentage=92,
            description="Layers of pasta, cheese, and meat sauce baked to perfection.",
            price=13.99,
            image_url="https://example.com/images/lasagna.jpg",
            quantity=75,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=3,
            name="Fettuccine Alfredo",
            like_percentage=88,
            description="Creamy Alfredo sauce over fettuccine pasta.",
            price=11.99,
            image_url="https://example.com/images/fettuccine_alfredo.jpg",
            quantity=85,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=3,
            name="Caprese Salad",
            like_percentage=90,
            description="Fresh mozzarella, tomatoes, and basil drizzled with olive oil.",
            price=8.99,
            image_url="https://example.com/images/caprese_salad.jpg",
            quantity=100,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=3,
            name="Pesto Penne",
            like_percentage=87,
            description="Penne pasta with a fresh basil pesto sauce.",
            price=11.49,
            image_url="https://example.com/images/pesto_penne.jpg",
            quantity=85,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=3,
            name="Tiramisu",
            like_percentage=95,
            description="Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
            price=6.99,
            image_url="https://example.com/images/tiramisu.jpg",
            quantity=110,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=3,
            name="Bruschetta",
            like_percentage=92,
            description="Toasted bread topped with fresh tomatoes and basil.",
            price=7.99,
            image_url="https://example.com/images/bruschetta.jpg",
            quantity=90,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=3,
            name="Cannoli",
            like_percentage=94,
            description="Crispy pastry filled with sweet ricotta cheese.",
            price=4.99,
            image_url="https://example.com/images/cannoli.jpg",
            quantity=130,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=3,
            name="Pizza Pepperoni",
            like_percentage=93,
            description="Pizza topped with pepperoni and mozzarella cheese.",
            price=11.99,
            image_url="https://example.com/images/pizza_pepperoni.jpg",
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
            image_url="https://example.com/images/sushi_platter.jpg",
            quantity=50,
            ratings_count=40
        ),
        MenuItem(
            restaurant_id=4,
            name="Ramen Bowl",
            like_percentage=92,
            description="Hearty ramen with pork, egg, and vegetables.",
            price=13.99,
            image_url="https://example.com/images/ramen_bowl.jpg",
            quantity=70,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=4,
            name="Tempura Shrimp",
            like_percentage=90,
            description="Crispy tempura shrimp with dipping sauce.",
            price=11.99,
            image_url="https://example.com/images/tempura_shrimp.jpg",
            quantity=80,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=4,
            name="Sashimi Platter",
            like_percentage=93,
            description="Fresh sashimi slices served with soy sauce and wasabi.",
            price=21.99,
            image_url="https://example.com/images/sashimi_platter.jpg",
            quantity=60,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=4,
            name="California Roll",
            like_percentage=94,
            description="Classic sushi roll with crab, avocado, and cucumber.",
            price=8.99,
            image_url="https://example.com/images/california_roll.jpg",
            quantity=100,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=4,
            name="Spicy Tuna Roll",
            like_percentage=91,
            description="Sushi roll with spicy tuna and avocado.",
            price=9.49,
            image_url="https://example.com/images/spicy_tuna_roll.jpg",
            quantity=90,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=4,
            name="Miso Soup",
            like_percentage=89,
            description="Traditional miso soup with tofu and seaweed.",
            price=3.99,
            image_url="https://example.com/images/miso_soup.jpg",
            quantity=120,
            ratings_count=30
        ),
        MenuItem(
            restaurant_id=4,
            name="Edamame",
            like_percentage=88,
            description="Steamed edamame with sea salt.",
            price=4.99,
            image_url="https://example.com/images/edamame.jpg",
            quantity=110,
            ratings_count=40
        ),
        MenuItem(
            restaurant_id=4,
            name="Gyoza",
            like_percentage=93,
            description="Pan-fried dumplings filled with pork and vegetables.",
            price=6.99,
            image_url="https://example.com/images/gyoza.jpg",
            quantity=80,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=4,
            name="Mochi Ice Cream",
            like_percentage=96,
            description="Sweet mochi filled with ice cream in various flavors.",
            price=5.99,
            image_url="https://example.com/images/mochi_ice_cream.jpg",
            quantity=90,
            ratings_count=65
        ),
         MenuItem(
            restaurant_id=5,
            name="Classic Cheeseburger",
            like_percentage=90,
            description="Juicy beef patty topped with cheddar cheese, lettuce, and tomato.",
            price=10.49,
            image_url="https://example.com/images/classic_cheeseburger.jpg",
            quantity=120,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=5,
            name="Bacon Burger",
            like_percentage=94,
            description="Beef burger topped with crispy bacon and melted cheddar.",
            price=11.99,
            image_url="https://example.com/images/bacon_burger.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=5,
            name="Veggie Burger",
            like_percentage=88,
            description="Delicious plant-based patty with lettuce, tomato, and vegan mayo.",
            price=9.99,
            image_url="https://example.com/images/veggie_burger.jpg",
            quantity=100,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=5,
            name="BBQ Chicken Sandwich",
            like_percentage=92,
            description="Grilled chicken breast with BBQ sauce, lettuce, and pickles.",
            price=10.99,
            image_url="https://example.com/images/bbq_chicken_sandwich.jpg",
            quantity=90,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=5,
            name="Crispy Chicken Tenders",
            like_percentage=89,
            description="Golden fried chicken tenders served with dipping sauce.",
            price=8.99,
            image_url="https://example.com/images/crispy_chicken_tenders.jpg",
            quantity=130,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=5,
            name="Loaded Fries",
            like_percentage=93,
            description="Fries loaded with cheese, bacon, and green onions.",
            price=6.99,
            image_url="https://example.com/images/loaded_fries.jpg",
            quantity=140,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=5,
            name="Onion Rings",
            like_percentage=87,
            description="Crispy onion rings served with a side of ranch.",
            price=5.49,
            image_url="https://example.com/images/onion_rings.jpg",
            quantity=150,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=5,
            name="Milkshake",
            like_percentage=95,
            description="Creamy milkshake available in vanilla, chocolate, and strawberry.",
            price=4.99,
            image_url="https://example.com/images/milkshake.jpg",
            quantity=160,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=5,
            name="Double Cheeseburger",
            like_percentage=96,
            description="Double beef patty with double cheddar cheese, lettuce, and tomato.",
            price=12.99,
            image_url="https://example.com/images/double_cheeseburger.jpg",
            quantity=110,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=5,
            name="Apple Pie",
            like_percentage=97,
            description="Warm apple pie with a flaky crust.",
            price=4.49,
            image_url="https://example.com/images/apple_pie.jpg",
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
            image_url="https://example.com/images/pepperoni_pizza.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=6,
            name="BBQ Chicken Pizza",
            like_percentage=92,
            description="Pizza topped with BBQ chicken, red onions, and cilantro.",
            price=12.99,
            image_url="https://example.com/images/bbq_chicken_pizza.jpg",
            quantity=100,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=6,
            name="Veggie Pizza",
            like_percentage=89,
            description="Pizza topped with bell peppers, onions, mushrooms, and olives.",
            price=10.99,
            image_url="https://example.com/images/veggie_pizza.jpg",
            quantity=90,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=6,
            name="Hawaiian Pizza",
            like_percentage=87,
            description="Pizza topped with ham, pineapple, and mozzarella cheese.",
            price=11.99,
            image_url="https://example.com/images/hawaiian_pizza.jpg",
            quantity=85,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=6,
            name="Meat Lovers Pizza",
            like_percentage=96,
            description="Pizza loaded with pepperoni, sausage, bacon, and ham.",
            price=13.99,
            image_url="https://example.com/images/meat_lovers_pizza.jpg",
            quantity=110,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=6,
            name="Cheese Pizza",
            like_percentage=90,
            description="Classic pizza with mozzarella and Parmesan cheese.",
            price=9.99,
            image_url="https://example.com/images/cheese_pizza.jpg",
            quantity=130,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=6,
            name="Garlic Knots",
            like_percentage=93,
            description="Soft dough knots brushed with garlic butter.",
            price=5.99,
            image_url="https://example.com/images/garlic_knots.jpg",
            quantity=140,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=6,
            name="Buffalo Wings",
            like_percentage=95,
            description="Spicy buffalo wings served with blue cheese dressing.",
            price=10.49,
            image_url="https://example.com/images/buffalo_wings.jpg",
            quantity=120,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=6,
            name="Caesar Salad",
            like_percentage=88,
            description="Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan.",
            price=8.49,
            image_url="https://example.com/images/caesar_salad.jpg",
            quantity=150,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=6,
            name="Chocolate Brownie",
            like_percentage=97,
            description="Rich chocolate brownie served warm with a scoop of vanilla ice cream.",
            price=6.49,
            image_url="https://example.com/images/chocolate_brownie.jpg",
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
            image_url="https://example.com/images/taco_platter.jpg",
            quantity=120,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=7,
            name="Chicken Fajitas",
            like_percentage=92,
            description="Sizzling chicken fajitas with bell peppers, onions, and tortillas.",
            price=12.99,
            image_url="https://example.com/images/chicken_fajitas.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=7,
            name="Beef Burrito",
            like_percentage=91,
            description="A large burrito stuffed with seasoned beef, rice, beans, and cheese.",
            price=9.99,
            image_url="https://example.com/images/beef_burrito.jpg",
            quantity=130,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=7,
            name="Chimichanga",
            like_percentage=89,
            description="Deep-fried burrito filled with your choice of meat, served with guacamole and sour cream.",
            price=11.49,
            image_url="https://example.com/images/chimichanga.jpg",
            quantity=100,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=7,
            name="Enchilada Plate",
            like_percentage=94,
            description="Two enchiladas with red or green sauce, served with rice and beans.",
            price=12.49,
            image_url="https://example.com/images/enchilada_plate.jpg",
            quantity=90,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=7,
            name="Nachos",
            like_percentage=90,
            description="Tortilla chips topped with melted cheese, jalapenos, and sour cream.",
            price=8.99,
            image_url="https://example.com/images/nachos.jpg",
            quantity=150,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=7,
            name="Guacamole & Chips",
            like_percentage=95,
            description="Freshly made guacamole served with crispy tortilla chips.",
            price=6.49,
            image_url="https://example.com/images/guacamole_chips.jpg",
            quantity=140,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=7,
            name="Salsa Verde",
            like_percentage=87,
            description="Tangy green salsa made with tomatillos and jalapenos.",
            price=4.99,
            image_url="https://example.com/images/salsa_verde.jpg",
            quantity=160,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=7,
            name="Chicken Tacos",
            like_percentage=94,
            description="Soft tacos filled with seasoned chicken, lettuce, and cheese.",
            price=8.49,
            image_url="https://example.com/images/chicken_tacos.jpg",
            quantity=130,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=7,
            name="Flan",
            like_percentage=96,
            description="Rich caramel custard dessert with a hint of vanilla.",
            price=5.99,
            image_url="https://example.com/images/flan.jpg",
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
            image_url="https://example.com/images/bbq_ribs.jpg",
            quantity=100,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=8,
            name="Pulled Pork Sandwich",
            like_percentage=94,
            description="Slow-cooked pulled pork served on a soft bun with coleslaw.",
            price=10.99,
            image_url="https://example.com/images/pulled_pork_sandwich.jpg",
            quantity=90,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=8,
            name="Brisket",
            like_percentage=93,
            description="Smoked beef brisket served with BBQ sauce and pickles.",
            price=17.99,
            image_url="https://example.com/images/brisket.jpg",
            quantity=80,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=8,
            name="Cornbread",
            like_percentage=91,
            description="Sweet and moist cornbread served with butter.",
            price=3.99,
            image_url="https://example.com/images/cornbread.jpg",
            quantity=140,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=8,
            name="Mac and Cheese",
            like_percentage=95,
            description="Creamy macaroni and cheese made with a blend of cheddar and mozzarella.",
            price=8.49,
            image_url="https://example.com/images/mac_and_cheese.jpg",
            quantity=150,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=8,
            name="BBQ Chicken",
            like_percentage=92,
            description="Grilled chicken basted with BBQ sauce, served with baked beans.",
            price=12.49,
            image_url="https://example.com/images/bbq_chicken.jpg",
            quantity=130,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=8,
            name="Coleslaw",
            like_percentage=90,
            description="Crisp and tangy coleslaw made with cabbage and carrots.",
            price=3.49,
            image_url="https://example.com/images/coleslaw.jpg",
            quantity=160,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=8,
            name="BBQ Sausage",
            like_percentage=93,
            description="Smoked sausage links served with mustard and pickles.",
            price=9.49,
            image_url="https://example.com/images/bbq_sausage.jpg",
            quantity=110,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=8,
            name="Peach Cobbler",
            like_percentage=97,
            description="Warm peach cobbler topped with a scoop of vanilla ice cream.",
            price=6.99,
            image_url="https://example.com/images/peach_cobbler.jpg",
            quantity=120,
            ratings_count=105
        ),
        MenuItem(
            restaurant_id=8,
            name="Sweet Tea",
            like_percentage=90,
            description="Southern sweet tea served over ice.",
            price=2.49,
            image_url="https://example.com/images/sweet_tea_bbq.jpg",
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
            image_url="https://example.com/images/vegan_burger.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=9,
            name="Falafel Wrap",
            like_percentage=92,
            description="Crispy falafel wrapped in a warm pita with hummus and veggies.",
            price=9.99,
            image_url="https://example.com/images/falafel_wrap.jpg",
            quantity=100,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=9,
            name="Vegan Pizza",
            like_percentage=89,
            description="Pizza topped with vegan cheese, mushrooms, and spinach.",
            price=12.99,
            image_url="https://example.com/images/vegan_pizza.jpg",
            quantity=90,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=9,
            name="Quinoa Salad",
            like_percentage=90,
            description="Healthy quinoa salad with chickpeas, cucumber, and lemon dressing.",
            price=8.49,
            image_url="https://example.com/images/quinoa_salad.jpg",
            quantity=150,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=9,
            name="Vegan Tacos",
            like_percentage=93,
            description="Soft tacos filled with seasoned black beans, avocado, and salsa.",
            price=9.49,
            image_url="https://example.com/images/vegan_tacos.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=9,
            name="Vegan Burrito",
            like_percentage=87,
            description="A hearty burrito filled with rice, beans, and vegetables.",
            price=9.99,
            image_url="https://example.com/images/vegan_burrito.jpg",
            quantity=130,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=9,
            name="Tofu Stir-Fry",
            like_percentage=94,
            description="Stir-fried tofu with vegetables in a savory soy sauce.",
            price=10.99,
            image_url="https://example.com/images/tofu_stir_fry.jpg",
            quantity=120,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=9,
            name="Vegan Ice Cream",
            like_percentage=97,
            description="Dairy-free ice cream available in chocolate and vanilla.",
            price=6.99,
            image_url="https://example.com/images/vegan_ice_cream.jpg",
            quantity=140,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=9,
            name="Kale Chips",
            like_percentage=88,
            description="Crispy baked kale chips with sea salt.",
            price=4.99,
            image_url="https://example.com/images/kale_chips.jpg",
            quantity=160,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=9,
            name="Smoothie Bowl",
            like_percentage=95,
            description="Refreshing smoothie bowl topped with fresh fruit and granola.",
            price=7.99,
            image_url="https://example.com/images/smoothie_bowl.jpg",
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
            image_url="https://example.com/images/ribeye_steak.jpg",
            quantity=80,
            ratings_count=150
        ),
        MenuItem(
            restaurant_id=10,
            name="Filet Mignon",
            like_percentage=98,
            description="Premium cut filet mignon, cooked to your preference and served with a side of garlic butter.",
            price=34.99,
            image_url="https://example.com/images/filet_mignon.jpg",
            quantity=70,
            ratings_count=140
        ),
        MenuItem(
            restaurant_id=10,
            name="New York Strip",
            like_percentage=94,
            description="Thick and flavorful New York strip steak, grilled and served with a side of mashed potatoes.",
            price=27.99,
            image_url="https://example.com/images/new_york_strip.jpg",
            quantity=90,
            ratings_count=130
        ),
        MenuItem(
            restaurant_id=10,
            name="T-Bone Steak",
            like_percentage=95,
            description="Classic T-bone steak, offering the best of both worlds with tenderloin and strip steak in one cut.",
            price=31.99,
            image_url="https://example.com/images/t_bone_steak.jpg",
            quantity=60,
            ratings_count=120
        ),
        MenuItem(
            restaurant_id=10,
            name="Grilled Sirloin",
            like_percentage=92,
            description="Lean and flavorful sirloin steak, marinated and grilled to perfection, served with steamed vegetables.",
            price=24.99,
            image_url="https://example.com/images/grilled_sirloin.jpg",
            quantity=100,
            ratings_count=110
        ),
        MenuItem(
            restaurant_id=10,
            name="Prime Rib",
            like_percentage=97,
            description="Slow-roasted prime rib, served with a side of au jus and creamy horseradish sauce.",
            price=32.99,
            image_url="https://example.com/images/prime_rib.jpg",
            quantity=50,
            ratings_count=145
        ),
        MenuItem(
            restaurant_id=10,
            name="Beef Tenderloin",
            like_percentage=93,
            description="Succulent beef tenderloin, grilled and served with a red wine reduction sauce.",
            price=28.99,
            image_url="https://example.com/images/beef_tenderloin.jpg",
            quantity=85,
            ratings_count=125
        ),
        MenuItem(
            restaurant_id=10,
            name="Porterhouse Steak",
            like_percentage=94,
            description="Large and flavorful porterhouse steak, ideal for sharing or for the hungriest of steak lovers.",
            price=35.99,
            image_url="https://example.com/images/porterhouse_steak.jpg",
            quantity=40,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=10,
            name="Steak Frites",
            like_percentage=90,
            description="Sliced sirloin steak served with crispy French fries and a side of garlic aioli.",
            price=21.99,
            image_url="https://example.com/images/steak_frites.jpg",
            quantity=120,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=10,
            name="Wagyu Steak",
            like_percentage=99,
            description="Exquisite Wagyu beef steak, known for its intense marbling and unmatched tenderness.",
            price=49.99,
            image_url="https://example.com/images/wagyu_steak.jpg",
            quantity=30,
            ratings_count=160
        ),

    ]

    db.session.bulk_save_objects(menu_items)
    db.session.commit()

def undo_menu_items1():
    db.session.execute(f'TRUNCATE table {SCHEMA}.menu_items RESTART IDENTITY CASCADE;')
    db.session.commit()
