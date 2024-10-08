from app.models import db, MenuItem, SCHEMA

def seed_menu_items2():
    menu_items = [
        # Restaurant 11
        MenuItem(
            restaurant_id=11,
            name="Chicken Tikka Masala",
            like_percentage=95,
            description="Grilled chicken pieces cooked in a creamy tomato-based sauce, flavored with Indian spices.",
            price=14.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961536/Chicken_Tikka_Masala_g3egpp.jpg",
            quantity=120,
            ratings_count=130
        ),
        MenuItem(
            restaurant_id=11,
            name="Lamb Rogan Josh",
            like_percentage=94,
            description="Tender lamb cooked in a rich, flavorful sauce with aromatic spices and herbs.",
            price=16.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961538/Lamb_Rogan_Josh_mxsuci.jpg",
            quantity=110,
            ratings_count=120
        ),
        MenuItem(
            restaurant_id=11,
            name="Paneer Butter Masala",
            like_percentage=93,
            description="Cubes of paneer cheese simmered in a creamy tomato and butter sauce with a blend of spices.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961537/Paneer_Butter_Masala_eus35p.jpg",
            quantity=130,
            ratings_count=110
        ),
        MenuItem(
            restaurant_id=11,
            name="Biryani",
            like_percentage=92,
            description="Aromatic basmati rice cooked with tender pieces of chicken or lamb, saffron, and spices.",
            price=13.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961539/Biryani_fkqwtq.jpg",
            quantity=140,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=11,
            name="Chana Masala",
            like_percentage=91,
            description="Spicy chickpea curry cooked with onions, tomatoes, and a blend of Indian spices.",
            price=10.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961539/Chana_Masala_unjk2q.jpg",
            quantity=150,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=11,
            name="Tandoori Chicken",
            like_percentage=96,
            description="Chicken marinated in yogurt and spices, cooked in a traditional tandoor oven.",
            price=15.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961536/Tandoori_vgpqep.jpg",
            quantity=100,
            ratings_count=140
        ),
        MenuItem(
            restaurant_id=11,
            name="Garlic Naan",
            like_percentage=98,
            description="Soft and fluffy Indian bread topped with garlic and butter, baked in a tandoor oven.",
            price=3.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961539/Garlic_Naan_lxkm7e.jpg",
            quantity=200,
            ratings_count=160
        ),
        MenuItem(
            restaurant_id=11,
            name="Palak Paneer",
            like_percentage=90,
            description="Fresh spinach cooked with paneer cubes in a flavorful and creamy curry sauce.",
            price=11.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961536/Palak_Paneer_w2nsjs.jpg",
            quantity=140,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=11,
            name="Gulab Jamun",
            like_percentage=95,
            description="Soft, deep-fried milk-based dumplings soaked in rose-flavored sugar syrup.",
            price=5.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961535/Gulab_Jamun_w1o70y.jpg",
            quantity=120,
            ratings_count=130
        ),
        MenuItem(
            restaurant_id=11,
            name="Mango Lassi",
            like_percentage=97,
            description="Refreshing yogurt-based drink blended with ripe mangoes and a hint of cardamom.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961536/Mango_Lassi_ppf96i.jpg",
            quantity=150,
            ratings_count=170
        ),


        # Restaurant 12
        MenuItem(
            restaurant_id=12,
            name="Coq au Vin",
            like_percentage=94,
            description="Classic French dish featuring chicken braised with red wine, mushrooms, and garlic.",
            price=18.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961871/Coq_au_Vin_phrscz.jpg",
            quantity=120,
            ratings_count=140
        ),
        MenuItem(
            restaurant_id=12,
            name="Bouillabaisse",
            like_percentage=92,
            description="Traditional Provençal fish stew made with a variety of fish, shellfish, and a rich saffron broth.",
            price=24.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961875/Bouillabaisse_mb8tpe.jpg",
            quantity=100,
            ratings_count=120
        ),
        MenuItem(
            restaurant_id=12,
            name="Duck à l'Orange",
            like_percentage=93,
            description="Roast duck served with a sweet and tangy orange sauce, a true French delicacy.",
            price=22.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961874/Duck_a_l_Orange_blx8nz.jpg",
            quantity=110,
            ratings_count=130
        ),
        MenuItem(
            restaurant_id=12,
            name="Ratatouille",
            like_percentage=90,
            description="A hearty vegetable stew made with eggplant, zucchini, bell peppers, and tomatoes, seasoned with herbs de Provence.",
            price=15.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961873/Ratatouille_gnvrna.jpg",
            quantity=140,
            ratings_count=110
        ),
        MenuItem(
            restaurant_id=12,
            name="Beef Bourguignon",
            like_percentage=95,
            description="Slow-cooked beef stew in red wine, with carrots, onions, and mushrooms.",
            price=20.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961872/Beef_Bourguignon_eu18c8.jpg",
            quantity=130,
            ratings_count=150
        ),
        MenuItem(
            restaurant_id=12,
            name="Quiche Lorraine",
            like_percentage=89,
            description="Savory quiche with a filling of eggs, cream, bacon, and Swiss cheese in a flaky pastry crust.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961873/Quiche_Lorraine_hww6to.jpg",
            quantity=160,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=12,
            name="Escargots de Bourgogne",
            like_percentage=91,
            description="Garlic and parsley butter-baked snails, served in their shells for a true French experience.",
            price=14.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961871/Escargots_de_Bourgogne_axpahr.jpg",
            quantity=90,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=12,
            name="Crème Brûlée",
            like_percentage=97,
            description="A creamy vanilla custard topped with a layer of caramelized sugar.",
            price=7.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961870/Creme_Brulee_dtofv6.jpg",
            quantity=150,
            ratings_count=170
        ),
        MenuItem(
            restaurant_id=12,
            name="Tarte Tatin",
            like_percentage=96,
            description="Upside-down caramelized apple tart with a buttery pastry crust.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961870/Tarte_Tatin_dnwrls.jpg",
            quantity=120,
            ratings_count=160
        ),
        MenuItem(
            restaurant_id=12,
            name="Kir Royale",
            like_percentage=98,
            description="A classic French aperitif made with crème de cassis and Champagne.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723961869/Kir_Royale_rn11i6.jpg",
            quantity=140,
            ratings_count=180
        ),


        # Restaurant 13
        MenuItem(
            restaurant_id=13,
            name="Moussaka",
            like_percentage=95,
            description="Classic Greek dish with layers of eggplant, minced meat, and béchamel sauce, baked to perfection.",
            price=14.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962232/Moussaka_eqaetj.jpg",
            quantity=120,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=13,
            name="Souvlaki",
            like_percentage=93,
            description="Grilled skewers of marinated meat, typically served with pita bread, tomatoes, and tzatziki sauce.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962231/Souvlaki_kzwoer.jpg",
            quantity=130,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=13,
            name="Spanakopita",
            like_percentage=92,
            description="Savory Greek pastry filled with spinach, feta cheese, and herbs, wrapped in flaky phyllo dough.",
            price=8.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962236/Spanakopita_regdtj.jpg",
            quantity=140,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=13,
            name="Dolmades",
            like_percentage=90,
            description="Grape leaves stuffed with a mixture of rice, pine nuts, and herbs, served with a lemon sauce.",
            price=7.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962238/Dolmades_cwqcfe.jpg",
            quantity=100,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=13,
            name="Greek Salad",
            like_percentage=94,
            description="Fresh salad with cucumbers, tomatoes, olives, red onions, and feta cheese, dressed with olive oil and oregano.",
            price=9.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962235/Greek_Salad_fm2ijr.jpg",
            quantity=130,
            ratings_count=110
        ),
        MenuItem(
            restaurant_id=13,
            name="Baklava",
            like_percentage=96,
            description="Sweet pastry made of layers of phyllo dough, filled with nuts and honey syrup.",
            price=5.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962234/Baklava_ab5o8h.jpg",
            quantity=120,
            ratings_count=120
        ),
        MenuItem(
            restaurant_id=13,
            name="Kleftiko",
            like_percentage=91,
            description="Slow-cooked lamb marinated in garlic, lemon, and herbs, wrapped in parchment paper for a tender, flavorful dish.",
            price=16.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962234/Kleftiko_p08ijq.jpg",
            quantity=110,
            ratings_count=88
        ),
        MenuItem(
            restaurant_id=13,
            name="Pastitsio",
            like_percentage=93,
            description="Baked pasta dish with layers of pasta, spiced ground meat, and béchamel sauce, topped with cheese and baked until golden.",
            price=13.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962232/Pastitsio_khzgv3.jpg",
            quantity=125,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=13,
            name="Retsina",
            like_percentage=92,
            description="Traditional Greek white wine flavored with pine resin, offering a unique and refreshing taste.",
            price=7.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962233/Retsina_iq8nhg.jpg",
            quantity=150,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=13,
            name="Greek Yogurt with Honey",
            like_percentage=94,
            description="Creamy Greek yogurt drizzled with honey and topped with walnuts for a simple yet delicious dessert.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962237/Greek_Yogurt_with_Honey_gscttr.jpg",
            quantity=140,
            ratings_count=105
        ),


        # Restaurant 14
        MenuItem(
            restaurant_id=14,
            name="Kung Pao Chicken",
            like_percentage=95,
            description="Spicy stir-fried chicken with peanuts, bell peppers, and a tangy sauce.",
            price=13.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962534/Kung_Pao_Chicken_l2wlrk.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=14,
            name="Beef and Broccoli",
            like_percentage=92,
            description="Tender beef and crisp broccoli stir-fried in a savory soy sauce.",
            price=12.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962533/Beef_and_Broccoli_f6gnkc.jpg",
            quantity=110,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=14,
            name="General Tso's Chicken",
            like_percentage=95,
            description="Crispy fried chicken pieces coated in a sweet and spicy sauce, garnished with steamed broccoli.",
            price=13.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962538/General_Tso_s_Chicken_olui1l.jpg",
            quantity=115,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=14,
            name="Sweet and Sour Pork",
            like_percentage=94,
            description="Crispy pork chunks in a sweet and tangy sauce with pineapple and bell peppers.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962531/Sweet_and_Sour_Pork_lzk8l6.jpg",
            quantity=130,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=14,
            name="Mapo Tofu",
            like_percentage=91,
            description="Spicy tofu dish with ground pork and a fragrant, spicy sauce.",
            price=10.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962530/Mapo_Tofu_caxkei.jpg",
            quantity=140,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=14,
            name="Spring Rolls",
            like_percentage=89,
            description="Crispy rolls filled with vegetables and served with a sweet and sour dipping sauce.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962536/Spring_Rolls_xkrzaa.jpg",
            quantity=150,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=14,
            name="Peking Duck",
            like_percentage=96,
            description="Crispy duck served with pancakes, hoisin sauce, and scallions.",
            price=22.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962532/Peking_Duck_xcafo0.jpg",
            quantity=80,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=14,
            name="Moo Shu Pork",
            like_percentage=93,
            description="Stir-fried pork with mushrooms and cabbage, served with Mandarin pancakes.",
            price=14.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962537/Moo_Shu_Pork_kiibap.jpg",
            quantity=100,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=14,
            name="Sesame Balls",
            like_percentage=96,
            description="Deep-fried glutinous rice balls filled with sweet red bean paste and coated in sesame seeds.",
            price=5.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962534/Sesame_Balls_jspxf2.jpg",
            quantity=120,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=14,
            name="Mango Pudding",
            like_percentage=94,
            description="Smooth and creamy mango-flavored pudding topped with fresh mango slices.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962530/Mango_Pudding_nt9m7q.jpg",
            quantity=150,
            ratings_count=110
        ),


        # Restaurant 15
        MenuItem(
            restaurant_id=15,
            name="Shoyu Ramen",
            like_percentage=95,
            description="Classic ramen in a soy-based broth with tender pork slices, bamboo shoots, and a soft-boiled egg.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962836/Shoyu_Ramen_wpp3vp.jpg",
            quantity=150,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=15,
            name="Miso Ramen",
            like_percentage=93,
            description="Rich miso-based broth with ramen noodles, sweet corn, mushrooms, and pork belly.",
            price=13.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962832/Miso_Ramen_cxfllh.jpg",
            quantity=140,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=15,
            name="Tonkotsu Ramen",
            like_percentage=94,
            description="Creamy pork bone broth ramen with garlic, green onions, and bamboo shoots.",
            price=14.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962834/Tonkotsu_Ramen_wjuirr.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=15,
            name="Shio Ramen",
            like_percentage=92,
            description="Clear, salty broth ramen with chicken, fish cake, and a hint of seaweed.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962835/Shio_Ramen_hx1oxr.jpg",
            quantity=130,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=15,
            name="Tempura Udon",
            like_percentage=91,
            description="Thick udon noodles in a savory broth topped with crispy tempura shrimp and vegetables.",
            price=13.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962837/Tempura_Udon_e79khg.jpg",
            quantity=100,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=15,
            name="Gyoza",
            like_percentage=94,
            description="Pan-fried dumplings filled with seasoned pork and vegetables.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962839/Gyoza_cfyajs.jpg",
            quantity=150,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=15,
            name="Edamame",
            like_percentage=89,
            description="Steamed young soybeans lightly salted.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962838/Edamame_nmd0fk.jpg",
            quantity=140,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=15,
            name="Matcha Cheesecake",
            like_percentage=97,
            description="Creamy cheesecake infused with vibrant matcha green tea.",
            price=6.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962831/Matcha_Cheesecake_e0lhpm.jpg",
            quantity=120,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=15,
            name="Mochi Ice Cream",
            like_percentage=95,
            description="Delicious, chewy mochi with a variety of ice cream fillings including matcha, mango, and red bean.",
            price=5.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962833/Mochi_Ice_Cream_wxeytz.jpg",
            quantity=130,
            ratings_count=110
        ),
        MenuItem(
            restaurant_id=15,
            name="Japanese Green Tea",
            like_percentage=92,
            description="Refreshing, lightly brewed green tea served hot or iced.",
            price=3.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723962830/Japanese_Green_Tea_tmmzzo.jpg",
            quantity=180,
            ratings_count=95
        ),

        MenuItem(
            restaurant_id=16,
            name="Croque Monsieur",
            like_percentage=95,
            description="Classic French sandwich with ham and melted cheese, grilled to perfection.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963498/Croque_Monsieur_ljinlf.jpg",
            quantity=120,
            ratings_count=100
        ),
        MenuItem(
            restaurant_id=16,
            name="Beef Wellington",
            like_percentage=93,
            description="Tender beef fillet wrapped in puff pastry with a layer of mushroom duxelles.",
            price=22.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963499/Beef_Wellington_y7k5ud.jpg",
            quantity=80,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=16,
            name="Quiche Lorraine",
            like_percentage=91,
            description="Savory tart filled with creamy custard, bacon, and Swiss cheese.",
            price=10.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963501/Quiche_Lorraine_qtigef.jpg",
            quantity=150,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=16,
            name="Ratatouille",
            like_percentage=90,
            description="Vegetable stew with zucchini, eggplant, and bell peppers in a tomato sauce.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963500/Ratatouille_jgawru.jpg",
            quantity=130,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=16,
            name="Duck Confit",
            like_percentage=94,
            description="Slow-cooked duck leg served with crispy skin and a side of roasted potatoes.",
            price=19.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963493/Duck_Confit_lcphbd.jpg",
            quantity=100,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=16,
            name="French Onion Soup",
            like_percentage=92,
            description="Classic soup with caramelized onions, beef broth, and melted cheese.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963495/French_Onion_Soup_apmaoj.jpg",
            quantity=140,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=16,
            name="Crème Brûlée",
            like_percentage=96,
            description="Rich vanilla custard topped with a caramelized sugar crust.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963492/Creme_Brulee_k8gakq.jpg",
            quantity=120,
            ratings_count=105
        ),
        MenuItem(
            restaurant_id=16,
            name="Tarte Tatin",
            like_percentage=93,
            description="Upside-down caramelized apple tart served warm.",
            price=7.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963496/Tarte_Tatin_adoxzf.jpg",
            quantity=110,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=16,
            name="French 75",
            like_percentage=89,
            description="Classic cocktail with gin, lemon juice, and champagne.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963494/French_75_ugegmv.jpg",
            quantity=150,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=16,
            name="Parisian Coffee",
            like_percentage=91,
            description="Rich and bold coffee blend served with a touch of French elegance.",
            price=3.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963491/Parisian_Coffee_oebip8.jpg",
            quantity=180,
            ratings_count=95
        ),


        # Restaurant 17
        MenuItem(
            restaurant_id=17,
            name="Lamb Gyro",
            like_percentage=94,
            description="Pita bread filled with tender lamb, tomatoes, onions, and tzatziki sauce.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963203/Lamb_Gyro_uhgtpn.jpg",
            quantity=120,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=17,
            name="Moussaka",
            like_percentage=92,
            description="Baked dish with layers of eggplant, potatoes, ground beef, and béchamel sauce.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963204/Moussaka_ns60oq.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=17,
            name="Spanakopita",
            like_percentage=93,
            description="Phyllo pastry filled with spinach and feta cheese.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963205/Spanakopita_hn0iuk.jpg",
            quantity=130,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=17,
            name="Greek Salad",
            like_percentage=91,
            description="Fresh salad with tomatoes, cucumbers, olives, and feta cheese, dressed with olive oil.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963202/Greek_Salad_eptbwp.jpg",
            quantity=140,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=17,
            name="Baklava",
            like_percentage=96,
            description="Sweet dessert made with layers of phyllo pastry, nuts, and honey syrup.",
            price=5.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963210/Baklava_p1phf6.jpg",
            quantity=150,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=17,
            name="Souvlaki",
            like_percentage=93,
            description="Grilled meat skewers served with pita bread and tzatziki sauce.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963209/Souvlaki_awrrjg.jpg",
            quantity=110,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=17,
            name="Dolmades",
            like_percentage=89,
            description="Grape leaves stuffed with rice and herbs.",
            price=6.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963206/Dolmades_gp9zeb.jpg",
            quantity=140,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=17,
            name="Tzatziki",
            like_percentage=91,
            description="Creamy yogurt dip with cucumbers, garlic, and olive oil.",
            price=4.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963207/Tzatziki_zljhes.jpg",
            quantity=160,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=17,
            name="Falafel",
            like_percentage=90,
            description="Deep-fried balls made from ground chickpeas and spices, served with pita bread.",
            price=7.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963212/Falafel_vtakka.jpg",
            quantity=100,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=17,
            name="Kleftiko",
            like_percentage=94,
            description="Slow-cooked lamb seasoned with herbs and lemon, served with potatoes.",
            price=14.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963208/Kleftiko_rtcjdd.jpg",
            quantity=90,
            ratings_count=85
        ),

    # Restaurant 18
        MenuItem(
            restaurant_id=18,
            name="Pad Thai",
            like_percentage=94,
            description="Stir-fried rice noodles with shrimp, tofu, and peanuts in a tamarind sauce.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723924762/Pad_Thai_ee4tzk.jpg",
            quantity=120,
            ratings_count=65
        ),
        MenuItem(
            restaurant_id=18,
            name="Green Curry",
            like_percentage=92,
            description="Spicy green curry with chicken, bamboo shoots, and basil.",
            price=12.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723924756/Green_Curry_rwynwc.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=18,
            name="Tom Yum Soup",
            like_percentage=90,
            description="Hot and sour Thai soup with shrimp, mushrooms, and lemongrass.",
            price=7.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723924772/Tom_Yum_Soup_uiqhyb.jpg",
            quantity=130,
            ratings_count=50
        ),
        MenuItem(
            restaurant_id=18,
            name="Massaman Curry",
            like_percentage=89,
            description="Rich and creamy curry with beef, potatoes, and peanuts.",
            price=13.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723924759/Massaman_Curry_lh2agr.jpg",
            quantity=100,
            ratings_count=55
        ),
        MenuItem(
            restaurant_id=18,
            name="Spring Rolls",
            like_percentage=93,
            description="Crispy spring rolls filled with vegetables and served with sweet chili sauce.",
            price=5.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723924775/Spring_Rolls_p3bcrh.jpg",
            quantity=90,
            ratings_count=60
        ),
        MenuItem(
            restaurant_id=18,
            name="Sticky Rice with Mango",
            like_percentage=95,
            description="Sweet sticky rice served with fresh mango slices.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723924767/Sticky_Rice_with_Mango_m7k1ds.jpg",
            quantity=140,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=18,
            name="Papaya Salad",
            like_percentage=91,
            description="Fresh papaya salad with lime, chili, and peanuts.",
            price=9.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723924764/Papaya_Salad_kuyv7m.jpg",
            quantity=150,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=18,
            name="Thai Iced Tea",
            like_percentage=96,
            description="Sweet and creamy Thai iced tea.",
            price=3.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723924769/Thai_Iced_Tea_mlihrv.jpg",
            quantity=160,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=18,
            name="Fried Rice",
            like_percentage=87,
            description="Classic Thai fried rice with chicken, eggs, and vegetables.",
            price=10.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723924754/Fried_Rice_o6gyap.jpg",
            quantity=120,
            ratings_count=45
        ),
        MenuItem(
            restaurant_id=18,
            name="Coconut Soup",
            like_percentage=93,
            description="Creamy coconut soup with chicken and galangal.",
            price=7.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723924752/Coconut_Soup_hgdcxh.jpg",
            quantity=100,
            ratings_count=75
        ),

        # Restaurant 19
        MenuItem(
            restaurant_id=19,
            name="General Tso's Chicken",
            like_percentage=94,
            description="Crispy chicken chunks in a tangy, sweet, and spicy sauce.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963893/General_Tso_s_Chicken_vevprb.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=19,
            name="Beef and Broccoli",
            like_percentage=92,
            description="Tender beef stir-fried with fresh broccoli in a savory brown sauce.",
            price=13.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963892/Beef_and_Broccoli_p6vagj.jpg",
            quantity=110,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=19,
            name="Kung Pao Shrimp",
            like_percentage=90,
            description="Spicy shrimp stir-fried with peanuts, bell peppers, and onions.",
            price=14.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963887/Kung_Pao_Shrimp_rawmdd.jpg",
            quantity=100,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=19,
            name="Sweet and Sour Pork",
            like_percentage=91,
            description="Crispy pork pieces coated in a sweet and tangy sauce with pineapple.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963885/Sweet_and_Sour_Pork_r6rkxv.jpg",
            quantity=130,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=19,
            name="Lo Mein",
            like_percentage=89,
            description="Stir-fried egg noodles with vegetables and your choice of meat.",
            price=10.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963888/Lo_Mein_ex5aek.jpg",
            quantity=140,
            ratings_count=70
        ),
        MenuItem(
            restaurant_id=19,
            name="Egg Drop Soup",
            like_percentage=92,
            description="Classic Chinese soup with egg ribbons and a light, savory broth.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963890/Egg_Drop_Soup_rz80u0.jpg",
            quantity=150,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=19,
            name="Mongolian Beef",
            like_percentage=93,
            description="Savory beef cooked with scallions and a rich soy-based sauce.",
            price=13.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963884/Mongolian_Beef_yvftiq.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=19,
            name="Fried Rice",
            like_percentage=88,
            description="Flavorful fried rice with vegetables and your choice of protein.",
            price=9.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963882/Fried_Rice_nqumfj.jpg",
            quantity=160,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=19,
            name="Chinese Almond Cookies",
            like_percentage=94,
            description="Crunchy almond cookies with a delightful nutty flavor.",
            price=5.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963881/Chinese_Almond_Cookies_azkkw1.jpg",
            quantity=140,
            ratings_count=95
        ),
        MenuItem(
            restaurant_id=19,
            name="Bubble Tea",
            like_percentage=96,
            description="Refreshing tea with chewy tapioca pearls in a variety of flavors.",
            price=4.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723963880/Bubble_Tea_x3jhr0.jpg",
            quantity=180,
            ratings_count=100
        ),


        # Restaurant 20
        MenuItem(
            restaurant_id=20,
            name="Clam Chowder",
            like_percentage=94,
            description="Creamy soup with tender clams, potatoes, and celery, served in a bread bowl.",
            price=9.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723964211/Clam_Chowder_f3oiww.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=20,
            name="Lobster Roll",
            like_percentage=96,
            description="Fresh lobster meat mixed with mayo and served in a buttery roll.",
            price=16.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723964218/Lobster_Roll_xpsep7.jpg",
            quantity=100,
            ratings_count=90
        ),
        MenuItem(
            restaurant_id=20,
            name="Fish Tacos",
            like_percentage=92,
            description="Crispy fish tacos topped with cabbage slaw and a tangy lime crema.",
            price=11.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723964207/Fish_Tacos_i9l0dz.jpg",
            quantity=130,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=20,
            name="Grilled Salmon",
            like_percentage=94,
            description="Perfectly grilled salmon fillet with a lemon-dill sauce.",
            price=14.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723964214/Grilled_Salmon_f8omtc.jpg",
            quantity=110,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=20,
            name="Crab Cakes",
            like_percentage=93,
            description="Pan-seared crab cakes made with fresh lump crab meat and seasoned to perfection.",
            price=12.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723964213/Crab_Cakes_r0t5az.jpg",
            quantity=110,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=20,
            name="Oysters Rockefeller",
            like_percentage=90,
            description="Baked oysters with a rich topping of butter, herbs, and Parmesan cheese.",
            price=15.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723964216/Oysters_Rockefeller_vbka3z.jpg",
            quantity=120,
            ratings_count=85
        ),
        MenuItem(
            restaurant_id=20,
            name="Pan-Seared Tuna",
            like_percentage=91,
            description="Tender tuna steak seared to perfection and served with a soy-ginger glaze.",
            price=16.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723964210/Pan-Seared_Tuna_bkryzl.jpg",
            quantity=100,
            ratings_count=80
        ),
        MenuItem(
            restaurant_id=20,
            name="Baked Cod",
            like_percentage=90,
            description="Baked cod fillet with a crunchy herb topping, served with roasted vegetables.",
            price=13.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723964208/Baked_Cod_b91rsh.jpg",
            quantity=120,
            ratings_count=75
        ),
        MenuItem(
            restaurant_id=20,
            name="Key Lime Pie",
            like_percentage=97,
            description="Tart and creamy key lime pie with a graham cracker crust and whipped cream.",
            price=6.99,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723964205/Key_Lime_Pie_rlrgyx.jpg",
            quantity=150,
            ratings_count=105
        ),
        MenuItem(
            restaurant_id=20,
            name="Classic Mojito",
            like_percentage=94,
            description="Refreshing cocktail made with rum, lime, mint, and soda water.",
            price=8.49,
            image_url="https://res.cloudinary.com/dw0k7r34f/image/upload/v1723964204/Classic_Mojito_dylkxn.jpg",
            quantity=160,
            ratings_count=100
        ),

    ]

    db.session.bulk_save_objects(menu_items)
    db.session.commit()

def undo_menu_items2():
    db.session.execute(f'TRUNCATE table {SCHEMA}.menu_items RESTART IDENTITY CASCADE;')
    db.session.commit()
