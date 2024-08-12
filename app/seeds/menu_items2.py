from app.models import db, MenuItem, SCHEMA

def seed_menu_items2():
    menu_items = [
        # Restaurant 11
        MenuItem(
            restaurant_id=11,
            name="Beef Stroganoff",
            like_percentage=92,
            description="Tender beef strips cooked in a creamy mushroom sauce, served over egg noodles.",
            price=14.99,
            image_url="https://example.com/images/beef_stroganoff.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=11,
            name="Chicken Kiev",
            like_percentage=91,
            description="Breaded chicken breast stuffed with garlic butter, served with mashed potatoes.",
            price=13.99,
            image_url="https://example.com/images/chicken_kiev.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=11,
            name="Borscht",
            like_percentage=89,
            description="Traditional Russian beet soup served with a dollop of sour cream.",
            price=7.99,
            image_url="https://example.com/images/borscht.jpg",
            quantity=130,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=11,
            name="Pelmeni",
            like_percentage=93,
            description="Russian dumplings filled with minced meat, served with butter and sour cream.",
            price=11.49,
            image_url="https://example.com/images/pelmeni.jpg",
            quantity=100,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=11,
            name="Blini",
            like_percentage=90,
            description="Thin Russian pancakes served with caviar or sweet fillings.",
            price=9.99,
            image_url="https://example.com/images/blini.jpg",
            quantity=120,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=11,
            name="Olivier Salad",
            like_percentage=88,
            description="Traditional Russian salad made with potatoes, peas, carrots, and mayonnaise.",
            price=8.49,
            image_url="https://example.com/images/olivier_salad.jpg",
            quantity=140,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=11,
            name="Shashlik",
            like_percentage=93,
            description="Grilled meat skewers marinated in spices, served with flatbread.",
            price=15.99,
            image_url="https://example.com/images/shashlik.jpg",
            quantity=90,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=11,
            name="Medovik",
            like_percentage=94,
            description="Layered honey cake with a rich and creamy filling.",
            price=6.99,
            image_url="https://example.com/images/medovik.jpg",
            quantity=100,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=11,
            name="Khachapuri",
            like_percentage=96,
            description="Georgian cheese-filled bread topped with a soft egg.",
            price=10.49,
            image_url="https://example.com/images/khachapuri.jpg",
            quantity=110,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=11,
            name="Golubtsy",
            like_percentage=89,
            description="Cabbage rolls stuffed with meat and rice, baked in a tomato sauce.",
            price=12.49,
            image_url="https://example.com/images/golubtsy.jpg",
            quantity=100,
            ratings_count=75
        ),
        
        # Restaurant 12
        MenuItem(
            restaurant_id=12,
            name="Chicken Tikka Masala",
            like_percentage=95,
            description="Marinated chicken cooked in a creamy tomato sauce, served with basmati rice.",
            price=13.99,
            image_url="https://example.com/images/chicken_tikka_masala.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=12,
            name="Butter Naan",
            like_percentage=94,
            description="Soft Indian bread brushed with butter, perfect for dipping in curries.",
            price=3.49,
            image_url="https://example.com/images/butter_naan.jpg",
            quantity=160,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=12,
            name="Lamb Rogan Josh",
            like_percentage=92,
            description="Tender lamb cooked in a flavorful curry sauce with aromatic spices.",
            price=15.99,
            image_url="https://example.com/images/lamb_rogan_josh.jpg",
            quantity=100,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=12,
            name="Palak Paneer",
            like_percentage=91,
            description="Cottage cheese cubes in a creamy spinach sauce, served with rice.",
            price=12.49,
            image_url="https://example.com/images/palak_paneer.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=12,
            name="Biryani",
            like_percentage=93,
            description="Aromatic rice dish with marinated meat or vegetables, served with raita.",
            price=14.49,
            image_url="https://example.com/images/biryani.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=12,
            name="Samosa",
            like_percentage=89,
            description="Crispy pastry filled with spiced potatoes and peas, served with chutney.",
            price=5.99,
            image_url="https://example.com/images/samosa.jpg",
            quantity=140,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=12,
            name="Tandoori Chicken",
            like_percentage=96,
            description="Chicken marinated in yogurt and spices, cooked in a tandoor oven.",
            price=13.49,
            image_url="https://example.com/images/tandoori_chicken.jpg",
            quantity=90,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=12,
            name="Gulab Jamun",
            like_percentage=94,
            description="Sweet deep-fried dumplings soaked in rose-flavored syrup.",
            price=4.49,
            image_url="https://example.com/images/gulab_jamun.jpg",
            quantity=150,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=12,
            name="Mango Lassi",
            like_percentage=95,
            description="Refreshing yogurt-based drink blended with ripe mangoes.",
            price=3.99,
            image_url="https://example.com/images/mango_lassi.jpg",
            quantity=170,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=12,
            name="Chana Masala",
            like_percentage=90,
            description="Spicy chickpea curry cooked in a tomato-based sauce, served with rice.",
            price=10.99,
            image_url="https://example.com/images/chana_masala.jpg",
            quantity=110,
            ratings_count=65
        ),
        
        # Restaurant 13
        MenuItem(
            restaurant_id=13,
            name="Pho",
            like_percentage=95,
            description="Traditional Vietnamese noodle soup with beef, herbs, and a savory broth.",
            price=12.99,
            image_url="https://example.com/images/pho.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=13,
            name="Banh Mi",
            like_percentage=94,
            description="Vietnamese sandwich with grilled pork, pickled vegetables, and cilantro.",
            price=8.99,
            image_url="https://example.com/images/banh_mi.jpg",
            quantity=140,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=13,
            name="Spring Rolls",
            like_percentage=93,
            description="Fresh rice paper rolls filled with shrimp, lettuce, and herbs, served with peanut sauce.",
            price=6.49,
            image_url="https://example.com/images/spring_rolls_vietnamese.jpg",
            quantity=150,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=13,
            name="Bun Cha",
            like_percentage=92,
            description="Grilled pork served with rice noodles, fresh herbs, and dipping sauce.",
            price=11.99,
            image_url="https://example.com/images/bun_cha.jpg",
            quantity=100,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=13,
            name="Goi Cuon",
            like_percentage=90,
            description="Vietnamese fresh spring rolls with shrimp, herbs, and vermicelli noodles.",
            price=6.99,
            image_url="https://example.com/images/goi_cuon.jpg",
            quantity=130,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=13,
            name="Ca Phe Sua Da",
            like_percentage=94,
            description="Vietnamese iced coffee with sweetened condensed milk.",
            price=4.49,
            image_url="https://example.com/images/ca_phe_sua_da.jpg",
            quantity=150,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=13,
            name="Com Tam",
            like_percentage=91,
            description="Broken rice dish served with grilled pork, egg, and vegetables.",
            price=11.49,
            image_url="https://example.com/images/com_tam.jpg",
            quantity=140,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=13,
            name="Bo Kho",
            like_percentage=89,
            description="Vietnamese beef stew with carrots, herbs, and rice noodles.",
            price=13.49,
            image_url="https://example.com/images/bo_kho.jpg",
            quantity=100,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=13,
            name="Che Ba Mau",
            like_percentage=90,
            description="Three-color dessert with sweet beans, jelly, and coconut milk.",
            price=5.99,
            image_url="https://example.com/images/che_ba_mau.jpg",
            quantity=130,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=13,
            name="Hu Tieu",
            like_percentage=88,
            description="Southern Vietnamese noodle soup with a savory broth and a variety of toppings.",
            price=12.49,
            image_url="https://example.com/images/hu_tieu.jpg",
            quantity=120,
            ratings_count=55
        ),
        
        # Restaurant 14
        MenuItem(
            restaurant_id=14,
            name="Fish and Chips",
            like_percentage=95,
            description="Crispy battered fish served with golden fries and tartar sauce.",
            price=13.99,
            image_url="https://example.com/images/fish_and_chips.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=14,
            name="Shepherd's Pie",
            like_percentage=93,
            description="Classic British dish with minced lamb, vegetables, and mashed potatoes.",
            price=12.99,
            image_url="https://example.com/images/shepherds_pie.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=14,
            name="Bangers and Mash",
            like_percentage=91,
            description="Savory sausages served with mashed potatoes and onion gravy.",
            price=11.99,
            image_url="https://example.com/images/bangers_and_mash.jpg",
            quantity=100,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=14,
            name="Chicken Tikka",
            like_percentage=94,
            description="Marinated chicken pieces grilled to perfection, served with naan and rice.",
            price=14.49,
            image_url="https://example.com/images/chicken_tikka.jpg",
            quantity=140,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=14,
            name="Beef Wellington",
            like_percentage=96,
            description="Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
            price=22.99,
            image_url="https://example.com/images/beef_wellington.jpg",
            quantity=80,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=14,
            name="Ploughman's Lunch",
            like_percentage=89,
            description="Traditional British cold platter with cheese, pickles, and bread.",
            price=9.49,
            image_url="https://example.com/images/ploughmans_lunch.jpg",
            quantity=130,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=14,
            name="Sticky Toffee Pudding",
            like_percentage=97,
            description="Rich sponge cake soaked in toffee sauce, served with vanilla ice cream.",
            price=7.99,
            image_url="https://example.com/images/sticky_toffee_pudding.jpg",
            quantity=120,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=14,
            name="Eton Mess",
            like_percentage=92,
            description="English dessert made with strawberries, meringue, and whipped cream.",
            price=6.49,
            image_url="https://example.com/images/eton_mess.jpg",
            quantity=140,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=14,
            name="Roast Beef",
            like_percentage=95,
            description="Traditional Sunday roast with Yorkshire pudding and gravy.",
            price=18.99,
            image_url="https://example.com/images/roast_beef.jpg",
            quantity=90,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=14,
            name="Cornish Pasty",
            like_percentage=90,
            description="Golden pastry filled with meat and vegetables.",
            price=10.99,
            image_url="https://example.com/images/cornish_pasty.jpg",
            quantity=120,
            ratings_count=70
        ),
        
        # Restaurant 15
        MenuItem(
            restaurant_id=15,
            name="Fried Chicken",
            like_percentage=95,
            description="Crispy fried chicken seasoned with a secret blend of spices.",
            price=12.49,
            image_url="https://example.com/images/fried_chicken.jpg",
            quantity=150,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=15,
            name="Chicken and Waffles",
            like_percentage=96,
            description="Southern classic dish with crispy chicken served over fluffy waffles.",
            price=13.99,
            image_url="https://example.com/images/chicken_and_waffles.jpg",
            quantity=140,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=15,
            name="Shrimp and Grits",
            like_percentage=94,
            description="Creamy grits topped with sautéed shrimp and a rich gravy.",
            price=15.99,
            image_url="https://example.com/images/shrimp_and_grits.jpg",
            quantity=100,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=15,
            name="Jambalaya",
            like_percentage=93,
            description="Hearty Cajun dish with rice, sausage, chicken, and shrimp.",
            price=14.99,
            image_url="https://example.com/images/jambalaya.jpg",
            quantity=120,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=15,
            name="Biscuits and Gravy",
            like_percentage=92,
            description="Fluffy biscuits smothered in creamy sausage gravy.",
            price=8.99,
            image_url="https://example.com/images/biscuits_and_gravy.jpg",
            quantity=130,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=15,
            name="Gumbo",
            like_percentage=91,
            description="Rich stew with okra, chicken, andouille sausage, and shrimp.",
            price=13.49,
            image_url="https://example.com/images/gumbo.jpg",
            quantity=110,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=15,
            name="Macaroni and Cheese",
            like_percentage=97,
            description="Classic comfort food made with creamy cheese sauce and tender pasta.",
            price=9.99,
            image_url="https://example.com/images/macaroni_and_cheese.jpg",
            quantity=140,
            ratings_count=105
        ),
        MenuItem(
            restaurant_id=15,
            name="Collard Greens",
            like_percentage=88,
            description="Southern-style collard greens cooked with smoked ham hocks.",
            price=7.49,
            image_url="https://example.com/images/collard_greens.jpg",
            quantity=150,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=15,
            name="Pecan Pie",
            like_percentage=95,
            description="Traditional Southern dessert made with pecans and a rich, buttery filling.",
            price=5.99,
            image_url="https://example.com/images/pecan_pie.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=15,
            name="Sweet Tea",
            like_percentage=90,
            description="Classic Southern sweet tea served iced.",
            price=2.49,
            image_url="https://example.com/images/sweet_tea.jpg",
            quantity=180,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=16,
            name="Sushi Roll Combo",
            like_percentage=96,
            description="A variety of fresh sushi rolls including tuna, salmon, and avocado.",
            price=15.99,
            image_url="https://example.com/images/sushi_roll_combo.jpg",
            quantity=100,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=16,
            name="Sashimi Platter",
            like_percentage=94,
            description="An assortment of fresh sashimi including tuna, salmon, and yellowtail.",
            price=18.99,
            image_url="https://example.com/images/sashimi_platter.jpg",
            quantity=90,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=16,
            name="Tempura Udon",
            like_percentage=92,
            description="Udon noodles in a hot broth served with crispy tempura shrimp.",
            price=12.99,
            image_url="https://example.com/images/tempura_udon.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=16,
            name="Teriyaki Chicken",
            like_percentage=91,
            description="Grilled chicken glazed with a sweet teriyaki sauce, served with rice.",
            price=11.99,
            image_url="https://example.com/images/teriyaki_chicken.jpg",
            quantity=120,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=16,
            name="Miso Soup",
            like_percentage=89,
            description="Traditional Japanese soup made with tofu, seaweed, and miso paste.",
            price=3.99,
            image_url="https://example.com/images/miso_soup.jpg",
            quantity=140,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=16,
            name="California Roll",
            like_percentage=94,
            description="Sushi roll made with crab, avocado, and cucumber.",
            price=8.49,
            image_url="https://example.com/images/california_roll.jpg",
            quantity=130,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=16,
            name="Dragon Roll",
            like_percentage=95,
            description="Sushi roll with eel, cucumber, and avocado, topped with eel sauce.",
            price=11.49,
            image_url="https://example.com/images/dragon_roll.jpg",
            quantity=100,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=16,
            name="Matcha Ice Cream",
            like_percentage=93,
            description="Creamy green tea-flavored ice cream.",
            price=5.49,
            image_url="https://example.com/images/matcha_ice_cream.jpg",
            quantity=150,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=16,
            name="Gyoza",
            like_percentage=92,
            description="Japanese dumplings filled with ground meat and vegetables, served with dipping sauce.",
            price=6.99,
            image_url="https://example.com/images/gyoza.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=16,
            name="Edamame",
            like_percentage=89,
            description="Steamed soybeans served with sea salt.",
            price=4.49,
            image_url="https://example.com/images/edamame.jpg",
            quantity=160,
            ratings_count=60
        ),
        
        # Restaurant 17
        MenuItem(
            restaurant_id=17,
            name="Lamb Gyro",
            like_percentage=94,
            description="Pita bread filled with tender lamb, tomatoes, onions, and tzatziki sauce.",
            price=9.99,
            image_url="https://example.com/images/lamb_gyro.jpg",
            quantity=120,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=17,
            name="Moussaka",
            like_percentage=92,
            description="Baked dish with layers of eggplant, potatoes, ground beef, and béchamel sauce.",
            price=12.99,
            image_url="https://example.com/images/moussaka.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=17,
            name="Spanakopita",
            like_percentage=93,
            description="Phyllo pastry filled with spinach and feta cheese.",
            price=6.99,
            image_url="https://example.com/images/spanakopita.jpg",
            quantity=130,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=17,
            name="Greek Salad",
            like_percentage=91,
            description="Fresh salad with tomatoes, cucumbers, olives, and feta cheese, dressed with olive oil.",
            price=8.49,
            image_url="https://example.com/images/greek_salad.jpg",
            quantity=140,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=17,
            name="Baklava",
            like_percentage=96,
            description="Sweet dessert made with layers of phyllo pastry, nuts, and honey syrup.",
            price=5.99,
            image_url="https://example.com/images/baklava.jpg",
            quantity=150,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=17,
            name="Souvlaki",
            like_percentage=93,
            description="Grilled meat skewers served with pita bread and tzatziki sauce.",
            price=11.99,
            image_url="https://example.com/images/souvlaki.jpg",
            quantity=110,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=17,
            name="Dolmades",
            like_percentage=89,
            description="Grape leaves stuffed with rice and herbs.",
            price=6.49,
            image_url="https://example.com/images/dolmades.jpg",
            quantity=140,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=17,
            name="Tzatziki",
            like_percentage=91,
            description="Creamy yogurt dip with cucumbers, garlic, and olive oil.",
            price=4.49,
            image_url="https://example.com/images/tzatziki.jpg",
            quantity=160,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=17,
            name="Falafel",
            like_percentage=90,
            description="Deep-fried balls made from ground chickpeas and spices, served with pita bread.",
            price=7.99,
            image_url="https://example.com/images/falafel.jpg",
            quantity=100,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=17,
            name="Kleftiko",
            like_percentage=94,
            description="Slow-cooked lamb seasoned with herbs and lemon, served with potatoes.",
            price=14.99,
            image_url="https://example.com/images/kleftiko.jpg",
            quantity=90,
            ratings_count=85
        ),
        
        # Restaurant 18
        MenuItem(
            restaurant_id=18,
            name="BBQ Ribs",
            like_percentage=96,
            description="Tender pork ribs slow-cooked and glazed with a sweet and tangy BBQ sauce.",
            price=16.99,
            image_url="https://example.com/images/bbq_ribs.jpg",
            quantity=100,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=18,
            name="Pulled Pork Sandwich",
            like_percentage=94,
            description="Slow-cooked pulled pork served on a soft bun with coleslaw.",
            price=10.99,
            image_url="https://example.com/images/pulled_pork_sandwich.jpg",
            quantity=90,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=18,
            name="Brisket",
            like_percentage=93,
            description="Smoked beef brisket served with BBQ sauce and pickles.",
            price=17.99,
            image_url="https://example.com/images/brisket.jpg",
            quantity=80,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=18,
            name="Cornbread",
            like_percentage=91,
            description="Sweet and moist cornbread served with butter.",
            price=3.99,
            image_url="https://example.com/images/cornbread.jpg",
            quantity=140,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=18,
            name="Mac and Cheese",
            like_percentage=95,
            description="Creamy macaroni and cheese made with a blend of cheddar and mozzarella.",
            price=8.49,
            image_url="https://example.com/images/mac_and_cheese.jpg",
            quantity=150,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=18,
            name="BBQ Chicken",
            like_percentage=92,
            description="Grilled chicken basted with BBQ sauce, served with baked beans.",
            price=12.49,
            image_url="https://example.com/images/bbq_chicken.jpg",
            quantity=130,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=18,
            name="Coleslaw",
            like_percentage=90,
            description="Crisp and tangy coleslaw made with cabbage and carrots.",
            price=3.49,
            image_url="https://example.com/images/coleslaw.jpg",
            quantity=160,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=18,
            name="BBQ Sausage",
            like_percentage=93,
            description="Smoked sausage links served with mustard and pickles.",
            price=9.49,
            image_url="https://example.com/images/bbq_sausage.jpg",
            quantity=110,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=18,
            name="Peach Cobbler",
            like_percentage=97,
            description="Warm peach cobbler topped with a scoop of vanilla ice cream.",
            price=6.99,
            image_url="https://example.com/images/peach_cobbler.jpg",
            quantity=120,
            ratings_count=105
        ),
        MenuItem(
            restaurant_id=18,
            name="Sweet Tea",
            like_percentage=90,
            description="Southern sweet tea served over ice.",
            price=2.49,
            image_url="https://example.com/images/sweet_tea_bbq.jpg",
            quantity=180,
            ratings_count=95
        ),
        
        # Restaurant 19
        MenuItem(
            restaurant_id=19,
            name="Pad Thai",
            like_percentage=95,
            description="Thai stir-fried noodles with shrimp, tofu, eggs, and peanuts.",
            price=11.99,
            image_url="https://example.com/images/pad_thai.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=19,
            name="Green Curry",
            like_percentage=94,
            description="Spicy Thai green curry with chicken, coconut milk, and Thai basil.",
            price=13.99,
            image_url="https://example.com/images/green_curry.jpg",
            quantity=90,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=19,
            name="Tom Yum Soup",
            like_percentage=92,
            description="Hot and sour Thai soup with shrimp, lemongrass, and lime leaves.",
            price=8.99,
            image_url="https://example.com/images/tom_yum.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=19,
            name="Massaman Curry",
            like_percentage=91,
            description="Rich and flavorful Thai curry with beef, potatoes, and peanuts.",
            price=12.99,
            image_url="https://example.com/images/massaman_curry.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=19,
            name="Som Tum",
            like_percentage=89,
            description="Spicy Thai green papaya salad with lime, chili, and peanuts.",
            price=9.49,
            image_url="https://example.com/images/som_tum.jpg",
            quantity=140,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=19,
            name="Thai Iced Tea",
            like_percentage=93,
            description="Sweet and creamy Thai iced tea served with a hint of star anise.",
            price=3.99,
            image_url="https://example.com/images/thai_iced_tea.jpg",
            quantity=160,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=19,
            name="Sticky Rice with Mango",
            like_percentage=96,
            description="Traditional Thai dessert made with sticky rice, coconut milk, and ripe mango.",
            price=7.49,
            image_url="https://example.com/images/sticky_rice_mango.jpg",
            quantity=150,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=19,
            name="Chicken Satay",
            like_percentage=92,
            description="Grilled chicken skewers served with a peanut dipping sauce.",
            price=10.49,
            image_url="https://example.com/images/chicken_satay.jpg",
            quantity=140,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=19,
            name="Fried Spring Rolls",
            like_percentage=91,
            description="Crispy Thai spring rolls filled with vegetables and served with sweet chili sauce.",
            price=6.99,
            image_url="https://example.com/images/fried_spring_rolls.jpg",
            quantity=130,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=19,
            name="Thai Basil Chicken",
            like_percentage=95,
            description="Stir-fried chicken with Thai basil, chili, and garlic, served with rice.",
            price=11.49,
            image_url="https://example.com/images/thai_basil_chicken.jpg",
            quantity=100,
            ratings_count=85
        ),
        
        # Restaurant 20
        MenuItem(
            restaurant_id=20,
            name="Margherita Pizza",
            like_percentage=97,
            description="Classic pizza with fresh tomatoes, mozzarella, and basil.",
            price=10.99,
            image_url="https://example.com/images/margherita_pizza.jpg",
            quantity=150,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=20,
            name="Pepperoni Pizza",
            like_percentage=95,
            description="Pizza topped with spicy pepperoni slices and mozzarella cheese.",
            price=11.99,
            image_url="https://example.com/images/pepperoni_pizza.jpg",
            quantity=140,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=20,
            name="BBQ Chicken Pizza",
            like_percentage=93,
            description="Pizza topped with BBQ sauce, grilled chicken, onions, and cilantro.",
            price=12.99,
            image_url="https://example.com/images/bbq_chicken_pizza.jpg",
            quantity=130,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=20,
            name="Hawaiian Pizza",
            like_percentage=90,
            description="Pizza topped with ham, pineapple, and mozzarella cheese.",
            price=11.49,
            image_url="https://example.com/images/hawaiian_pizza.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=20,
            name="Veggie Pizza",
            like_percentage=94,
            description="Pizza topped with bell peppers, onions, mushrooms, olives, and mozzarella.",
            price=10.49,
            image_url="https://example.com/images/veggie_pizza.jpg",
            quantity=130,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=20,
            name="Meat Lovers Pizza",
            like_percentage=96,
            description="Pizza loaded with pepperoni, sausage, bacon, and ham.",
            price=13.49,
            image_url="https://example.com/images/meat_lovers_pizza.jpg",
            quantity=140,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=20,
            name="Four Cheese Pizza",
            like_percentage=92,
            description="Pizza topped with mozzarella, cheddar, Parmesan, and gorgonzola.",
            price=12.49,
            image_url="https://example.com/images/four_cheese_pizza.jpg",
            quantity=130,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=20,
            name="Garlic Knots",
            like_percentage=93,
            description="Soft bread knots brushed with garlic butter and served with marinara sauce.",
            price=5.99,
            image_url="https://example.com/images/garlic_knots.jpg",
            quantity=160,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=20,
            name="Caesar Salad",
            like_percentage=90,
            description="Classic Caesar salad with romaine lettuce, croutons, Parmesan, and Caesar dressing.",
            price=8.99,
            image_url="https://example.com/images/caesar_salad.jpg",
            quantity=140,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=20,
            name="Tiramisu",
            like_percentage=95,
            description="Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.",
            price=7.49,
            image_url="https://example.com/images/tiramisu_pizza.jpg",
            quantity=150,
            ratings_count=105
        ),
    ]

    db.session.bulk_save_objects(menu_items)
    db.session.commit()

def undo_menu_items2():
    db.session.execute(f'TRUNCATE table {SCHEMA}.menu_items RESTART IDENTITY CASCADE;')
    db.session.commit()