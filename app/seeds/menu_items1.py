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
            name="Pad Thai",
            like_percentage=94,
            description="Stir-fried rice noodles with shrimp, tofu, and peanuts in a tamarind sauce.",
            price=11.99,
            image_url="https://example.com/images/pad_thai.jpg",
            quantity=120,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=8,
            name="Green Curry",
            like_percentage=92,
            description="Spicy green curry with chicken, bamboo shoots, and basil.",
            price=12.49,
            image_url="https://example.com/images/green_curry.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=8,
            name="Tom Yum Soup",
            like_percentage=90,
            description="Hot and sour Thai soup with shrimp, mushrooms, and lemongrass.",
            price=7.99,
            image_url="https://example.com/images/tom_yum_soup.jpg",
            quantity=130,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=8,
            name="Massaman Curry",
            like_percentage=89,
            description="Rich and creamy curry with beef, potatoes, and peanuts.",
            price=13.49,
            image_url="https://example.com/images/massaman_curry.jpg",
            quantity=100,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=8,
            name="Spring Rolls",
            like_percentage=93,
            description="Crispy spring rolls filled with vegetables and served with sweet chili sauce.",
            price=5.99,
            image_url="https://example.com/images/spring_rolls.jpg",
            quantity=90,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=8,
            name="Sticky Rice with Mango",
            like_percentage=95,
            description="Sweet sticky rice served with fresh mango slices.",
            price=6.99,
            image_url="https://example.com/images/sticky_rice_mango.jpg",
            quantity=140,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=8,
            name="Papaya Salad",
            like_percentage=91,
            description="Fresh papaya salad with lime, chili, and peanuts.",
            price=9.49,
            image_url="https://example.com/images/papaya_salad.jpg",
            quantity=150,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=8,
            name="Thai Iced Tea",
            like_percentage=96,
            description="Sweet and creamy Thai iced tea.",
            price=3.99,
            image_url="https://example.com/images/thai_iced_tea.jpg",
            quantity=160,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=8,
            name="Fried Rice",
            like_percentage=87,
            description="Classic Thai fried rice with chicken, eggs, and vegetables.",
            price=10.49,
            image_url="https://example.com/images/fried_rice.jpg",
            quantity=120,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=8,
            name="Coconut Soup",
            like_percentage=93,
            description="Creamy coconut soup with chicken and galangal.",
            price=7.49,
            image_url="https://example.com/images/coconut_soup.jpg",
            quantity=100,
            ratings_count=75
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
        #Restaurant 10
        MenuItem(
            restaurant_id=10,
            name="Spaghetti Bolognese",
            like_percentage=93,
            description="Classic spaghetti pasta served with a rich and hearty beef Bolognese sauce.",
            price=12.99,
            image_url="https://example.com/images/spaghetti_bolognese.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=10,
            name="Margherita Pizza",
            like_percentage=95,
            description="Traditional Italian pizza topped with fresh tomatoes, mozzarella, and basil.",
            price=10.99,
            image_url="https://example.com/images/margherita_pizza.jpg",
            quantity=150,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=10,
            name="Lasagna",
            like_percentage=92,
            description="Layers of pasta, ricotta cheese, meat sauce, and mozzarella, baked to perfection.",
            price=13.99,
            image_url="https://example.com/images/lasagna.jpg",
            quantity=100,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=10,
            name="Fettuccine Alfredo",
            like_percentage=91,
            description="Fettuccine pasta tossed in a creamy Alfredo sauce made with Parmesan cheese and butter.",
            price=11.99,
            image_url="https://example.com/images/fettuccine_alfredo.jpg",
            quantity=130,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=10,
            name="Chicken Parmesan",
            like_percentage=94,
            description="Breaded chicken breast topped with marinara sauce and melted mozzarella, served over spaghetti.",
            price=14.99,
            image_url="https://example.com/images/chicken_parmesan.jpg",
            quantity=90,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=10,
            name="Risotto",
            like_percentage=90,
            description="Creamy Arborio rice cooked with white wine, Parmesan, and your choice of mushrooms or seafood.",
            price=13.49,
            image_url="https://example.com/images/risotto.jpg",
            quantity=80,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=10,
            name="Bruschetta",
            like_percentage=89,
            description="Grilled bread topped with a fresh mixture of tomatoes, garlic, and basil, drizzled with olive oil.",
            price=6.99,
            image_url="https://example.com/images/bruschetta.jpg",
            quantity=140,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=10,
            name="Tiramisu",
            like_percentage=96,
            description="Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.",
            price=7.49,
            image_url="https://example.com/images/tiramisu.jpg",
            quantity=110,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=10,
            name="Penne Arrabbiata",
            like_percentage=91,
            description="Penne pasta served in a spicy tomato sauce with garlic, red chili peppers, and parsley.",
            price=11.49,
            image_url="https://example.com/images/penne_arrabbiata.jpg",
            quantity=100,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=10,
            name="Cannoli",
            like_percentage=94,
            description="Crispy pastry tubes filled with sweet ricotta cheese and chocolate chips, dusted with powdered sugar.",
            price=5.99,
            image_url="https://example.com/images/cannoli.jpg",
            quantity=130,
            ratings_count=85
        ),
    ]

    db.session.bulk_save_objects(menu_items)
    db.session.commit()

def undo_menu_items1():
    db.session.execute(f'TRUNCATE table {SCHEMA}.menu_items RESTART IDENTITY CASCADE;')
    db.session.commit()

    