from app.models import db, environment, SCHEMA
from sqlalchemy.sql import text
from ..models import Review
from datetime import datetime, timedelta
import random

def random_date(start, end):
    return start + timedelta(days=random.randint(0, (end - start).days),
                             hours=random.randint(0, 23),
                             minutes=random.randint(0, 59))

start_date = datetime(2018, 1, 1)
end_date = datetime(2024, 8, 10)

def seed_reviews():
    print(">>>> inside reviews seeder")
    reviews = [

        Review(user_id=7, restaurant_id=1, rating=4, comments="The Gourmet Kitchen offers a delightful dining experience. The modern twist on traditional dishes is impressive. I particularly enjoyed the ambience, which made the meal even more enjoyable. The service was attentive and friendly, adding to the overall positive experience.", created_at=random_date(start_date, end_date)),
        Review(user_id=9, restaurant_id=1, rating=5, comments="The food at The Gourmet Kitchen was excellent! The flavors were well-balanced and every dish was a treat. I loved the creative presentation and the freshness of the ingredients. Definitely a place I would visit again.", created_at=random_date(start_date, end_date)),
        Review(user_id=14, restaurant_id=1, rating=3, comments="The Gourmet Kitchen is a decent spot but didn’t live up to the hype. The food was good but not exceptional. I expected more based on the reviews, and the service was a bit slow. It’s okay for an occasional visit.", created_at=random_date(start_date, end_date)),
        Review(user_id=11, restaurant_id=1, rating=2, comments="My experience at The Gourmet Kitchen was underwhelming. The food lacked flavor and the service was mediocre. The ambiance was nice, but it didn’t make up for the poor meal. I wouldn’t recommend it based on my visit.", created_at=random_date(start_date, end_date)),
        Review(user_id=16, restaurant_id=1, rating=4, comments="The Gourmet Kitchen is a great place with a unique menu. The dishes were flavorful and the service was generally good. The atmosphere was pleasant and made for a nice dining experience. I would definitely come back.", created_at=random_date(start_date, end_date)),

        Review(user_id=3, restaurant_id=2, rating=4, comments="Spice Symphony offers an exciting range of spicy dishes. The flavors were bold and the spice levels were just right. The restaurant’s ambiance was lively and added to the overall experience. I enjoyed my meal and would return.", created_at=random_date(start_date, end_date)),
        Review(user_id=5, restaurant_id=2, rating=2, comments="Spice Symphony was not quite what I expected. The spice was overwhelming and some dishes were too hot to enjoy. The service was fine, but the food didn’t impress me. I wouldn’t recommend it for those not used to heavy spices.", created_at=random_date(start_date, end_date)),
        Review(user_id=10, restaurant_id=2, rating=5, comments="Spice Symphony is a must-visit for spice lovers. The dishes were flavorful and had just the right amount of heat. The ambiance was vibrant and the service was attentive. I had a great experience and will definitely be coming back.", created_at=random_date(start_date, end_date)),
        Review(user_id=8, restaurant_id=2, rating=3, comments="Spice Symphony has an interesting menu but some dishes were too spicy for my taste. The flavors were good, but not all were balanced. The environment was lively, though it could be quite noisy. It’s a mixed experience overall.", created_at=random_date(start_date, end_date)),
        Review(user_id=15, restaurant_id=2, rating=4, comments="Spice Symphony is perfect if you enjoy bold flavors. The variety of spices used in the dishes was impressive. The restaurant has a fun atmosphere and the staff is friendly. I enjoyed my visit and would recommend it to others who like spicy food.", created_at=random_date(start_date, end_date)),

        Review(user_id=9, restaurant_id=3, rating=4, comments="Pasta Paradise offers a variety of pasta dishes. The flavors were rich and satisfying, though some dishes were better than others. The restaurant has a warm ambiance and the service was good. Overall, it was a pleasant dining experience.", created_at=random_date(start_date, end_date)),
        Review(user_id=4, restaurant_id=3, rating=5, comments="Pasta Paradise exceeded my expectations. The pasta was cooked perfectly and the sauces were delicious. The restaurant had a cozy atmosphere that made the meal even more enjoyable. I would definitely come back again.", created_at=random_date(start_date, end_date)),
        Review(user_id=12, restaurant_id=3, rating=2, comments="Pasta Paradise was disappointing. The pasta was overcooked and lacked flavor. I was expecting more based on the reviews, but it didn’t meet my expectations. The service was average and didn’t improve the experience.", created_at=random_date(start_date, end_date)),
        Review(user_id=18, restaurant_id=3, rating=3, comments="Pasta Paradise serves decent pasta but nothing extraordinary. The flavors were okay but lacked creativity. The restaurant had a nice ambiance but the food didn’t stand out. It’s an average place for a quick pasta meal.", created_at=random_date(start_date, end_date)),
        Review(user_id=6, restaurant_id=3, rating=4, comments="Pasta Paradise has a good selection of pasta dishes. The food was flavorful and well-prepared. The atmosphere was relaxed and the service was friendly. I enjoyed my meal and will likely return.", created_at=random_date(start_date, end_date)),

        Review(user_id=7, restaurant_id=4, rating=5, comments="Sushi World offers some of the freshest sushi I've had. The variety was impressive and the quality was top-notch. The restaurant’s ambiance was pleasant and the service was excellent. I highly recommend it to sushi lovers.", created_at=random_date(start_date, end_date)),
        Review(user_id=2, restaurant_id=4, rating=3, comments="Sushi World has fresh ingredients, but the sushi lacked finesse. The rolls were simple and didn’t stand out. The restaurant had a nice atmosphere but the food was just average. It’s a decent place if you want basic sushi.", created_at=random_date(start_date, end_date)),
        Review(user_id=14, restaurant_id=4, rating=4, comments="Sushi World provides a satisfying sushi experience. The ingredients were fresh and the flavors were good. The service was friendly and the ambiance was nice. I would recommend it for a casual sushi outing.", created_at=random_date(start_date, end_date)),
        Review(user_id=13, restaurant_id=4, rating=2, comments="Sushi World was underwhelming. The sushi was not as fresh as I hoped and the rolls were uninspired. The service was slow and the restaurant’s atmosphere was average. I wouldn’t return based on my visit.", created_at=random_date(start_date, end_date)),
        Review(user_id=17, restaurant_id=4, rating=5, comments="Sushi World exceeded my expectations. The sushi was fresh and flavorful with creative rolls. The ambiance was upscale and the service was attentive. I had a great dining experience and will definitely be coming back.", created_at=random_date(start_date, end_date)),

        Review(user_id=16, restaurant_id=5, rating=4, comments="Burger Haven is a great spot for burgers. The patties were juicy and the toppings were fresh. The service was friendly and the environment was casual. I enjoyed my meal and would definitely return.", created_at=random_date(start_date, end_date)),
        Review(user_id=12, restaurant_id=5, rating=2, comments="Burger Haven was a disappointment. The burgers were overcooked and the ingredients seemed stale. The fries were soggy and the overall meal was unappetizing. I don’t think I will return.", created_at=random_date(start_date, end_date)),
        Review(user_id=15, restaurant_id=5, rating=3, comments="Burger Haven serves decent burgers but the experience was average. The meat was okay but not exceptional. The restaurant had a nice vibe, but it didn’t impress me overall. It’s a decent place for a quick burger.", created_at=random_date(start_date, end_date)),
        Review(user_id=9, restaurant_id=5, rating=5, comments="Burger Haven has fantastic burgers. The patties were cooked to perfection and the toppings were generous. The service was good and the atmosphere was relaxed. I had a great time and would recommend it to others.", created_at=random_date(start_date, end_date)),
        Review(user_id=11, restaurant_id=5, rating=3, comments="Burger Haven is okay for a burger craving. The food was decent but not outstanding. The environment was casual and the service was average. It’s a good spot for a quick bite but not remarkable.", created_at=random_date(start_date, end_date)),

        Review(user_id=7, restaurant_id=6, rating=4, comments="Pizza Palace has a great variety of pizzas. The crust was crispy and the toppings were plentiful. The service was prompt and the atmosphere was relaxed. I enjoyed my visit and would come back for more.", created_at=random_date(start_date, end_date)),
        Review(user_id=19, restaurant_id=6, rating=5, comments="Pizza Palace is fantastic for pizza lovers. The flavors were bold and the ingredients were fresh. The ambiance was cozy and the service was excellent. It’s a place I would highly recommend.", created_at=random_date(start_date, end_date)),
        Review(user_id=2, restaurant_id=6, rating=3, comments="Pizza Palace offers decent pizza but doesn’t stand out. The crust was a bit too crispy and the toppings were average. The service was fine but the overall experience was just okay. It’s a good spot for a casual pizza meal.", created_at=random_date(start_date, end_date)),
        Review(user_id=15, restaurant_id=6, rating=4, comments="Pizza Palace is a solid choice for pizza. The variety was great and the taste was enjoyable. The restaurant had a good atmosphere and the staff was friendly. I had a pleasant experience and would return.", created_at=random_date(start_date, end_date)),
        Review(user_id=13, restaurant_id=6, rating=2, comments="Pizza Palace did not meet my expectations. The pizza was bland and lacked flavor. The ambiance was nice, but the food didn’t impress me. I wouldn’t recommend it based on my experience.", created_at=random_date(start_date, end_date)),

        Review(user_id=8, restaurant_id=7, rating=5, comments="Taco Town is a great spot for tacos. The variety and quality of the fillings were impressive. The atmosphere was casual and the service was friendly. I thoroughly enjoyed my meal and will definitely be back.", created_at=random_date(start_date, end_date)),
        Review(user_id=17, restaurant_id=7, rating=3, comments="Taco Town has good tacos but some were too bland. The service was fine and the environment was casual. It’s a decent place for tacos but not exceptional. I might return to try different options.", created_at=random_date(start_date, end_date)),
        Review(user_id=4, restaurant_id=7, rating=2, comments="Taco Town was disappointing. The tacos lacked flavor and the fillings were underwhelming. The service was average and the restaurant was not very clean. I don’t think I’ll be coming back.", created_at=random_date(start_date, end_date)),
        Review(user_id=11, restaurant_id=7, rating=4, comments="Taco Town offers a good selection of tacos with fresh ingredients. Some were a bit mild but overall, the taste was good. The staff was friendly and the atmosphere was relaxed. It’s worth checking out if you enjoy tacos.", created_at=random_date(start_date, end_date)),
        Review(user_id=12, restaurant_id=7, rating=5, comments="Taco Town serves some of the best tacos in town. The fillings were flavorful and the tacos were well-made. The restaurant’s vibe was fun and the service was great. I had an excellent experience and will definitely return.", created_at=random_date(start_date, end_date)),

        Review(user_id=14, restaurant_id=8, rating=5, comments="BBQ Barn is a must-visit for BBQ enthusiasts. The meat was tender and flavorful, and the sides were equally impressive. The restaurant has a great atmosphere and the service was attentive. I highly recommend this place for a BBQ fix.", created_at=random_date(start_date, end_date)),
        Review(user_id=19, restaurant_id=8, rating=4, comments="BBQ Barn offers delicious BBQ with a good variety of options. The ribs were particularly tasty and the sides complemented the meal well. The staff was friendly and the environment was casual. A solid choice for BBQ lovers.", created_at=random_date(start_date, end_date)),
        Review(user_id=9, restaurant_id=8, rating=2, comments="BBQ Barn was a letdown. The BBQ was overly charred and lacked flavor. The sides were also underwhelming and the service was slow. I was expecting more based on the reviews.", created_at=random_date(start_date, end_date)),
        Review(user_id=5, restaurant_id=8, rating=4, comments="BBQ Barn is great for a casual BBQ meal. The meat was well-cooked and the sauces were flavorful. The atmosphere was lively and the staff was accommodating. I enjoyed my visit and will likely return.", created_at=random_date(start_date, end_date)),
        Review(user_id=15, restaurant_id=8, rating=3, comments="BBQ Barn has decent BBQ but not the best I’ve had. The flavors were good but the meat was a bit tough. The sides were average and the service was acceptable. It’s a decent spot for BBQ but not outstanding.", created_at=random_date(start_date, end_date)),

        Review(user_id=7, restaurant_id=9, rating=4, comments="Salad Stop is perfect for a light and healthy meal. The salads were fresh and the variety was good. The atmosphere was pleasant and the service was quick. I enjoyed my visit and would recommend it for a healthy option.", created_at=random_date(start_date, end_date)),
        Review(user_id=13, restaurant_id=9, rating=5, comments="Salad Stop offers excellent salads with fresh ingredients. The combinations were creative and satisfying. The restaurant had a bright and welcoming environment. I had a great meal and will definitely come back.", created_at=random_date(start_date, end_date)),
        Review(user_id=20, restaurant_id=9, rating=2, comments="Salad Stop was not what I expected. The salads were bland and lacked flavor. The service was slow and the restaurant was not very clean. I don’t think I will be returning.", created_at=random_date(start_date, end_date)),
        Review(user_id=10, restaurant_id=9, rating=3, comments="Salad Stop provides healthy options but the taste was average. The salads were fresh but lacked excitement. The service was fine and the ambiance was pleasant. It’s an okay place for a quick, healthy meal.", created_at=random_date(start_date, end_date)),
        Review(user_id=6, restaurant_id=9, rating=4, comments="Salad Stop is a great choice for fresh salads. The ingredients were high quality and the portions were generous. The restaurant was clean and the service was friendly. I had a good experience and will return.", created_at=random_date(start_date, end_date)),

        Review(user_id=12, restaurant_id=10, rating=5, comments="Steak House offers an exceptional steak dining experience. The meat was cooked to perfection and the sides were delicious. The service was attentive and the ambiance was upscale. It’s an excellent place for a special occasion.", created_at=random_date(start_date, end_date)),
        Review(user_id=4, restaurant_id=10, rating=3, comments="Steak House serves good steaks but the experience was average. The food was fine but didn’t wow me. The atmosphere was nice but the service was slow. It’s a decent place for steak but not extraordinary.", created_at=random_date(start_date, end_date)),
        Review(user_id=16, restaurant_id=10, rating=4, comments="Steak House is a solid choice for steak lovers. The quality of the meat was high and the cooking was well-done. The ambiance was classy and the service was good. I had a pleasant dining experience.", created_at=random_date(start_date, end_date)),
        Review(user_id=18, restaurant_id=10, rating=2, comments="Steak House was disappointing. The steak was overcooked and lacked flavor. The service was slow and the restaurant didn’t have a great vibe. I wouldn’t recommend it based on my visit.", created_at=random_date(start_date, end_date)),
        Review(user_id=15, restaurant_id=10, rating=4, comments="Steak House is a great spot for a quality steak. The meat was tender and flavorful, and the sides were well-prepared. The service was attentive and the ambiance was upscale. I enjoyed my meal and would come back.", created_at=random_date(start_date, end_date)),

        Review(user_id=13, restaurant_id=11, rating=4, comments="Curry Corner offers a variety of flavorful Indian dishes. The curries were rich and satisfying, though some were spicier than expected. The restaurant had a cozy atmosphere and the service was good. I enjoyed my meal and would visit again.", created_at=random_date(start_date, end_date)),
        Review(user_id=8, restaurant_id=11, rating=5, comments="Curry Corner is fantastic for Indian food. The spices were perfectly balanced and the dishes were full of flavor. The restaurant had a warm and inviting atmosphere. I highly recommend it for anyone craving Indian cuisine.", created_at=random_date(start_date, end_date)),
        Review(user_id=4, restaurant_id=11, rating=2, comments="Curry Corner was a letdown. The curries were bland and lacked depth. The service was slow and the ambiance was not very comfortable. I expected more based on the reviews but won’t be returning.", created_at=random_date(start_date, end_date)),
        Review(user_id=11, restaurant_id=11, rating=3, comments="Curry Corner serves decent Indian food but the experience was average. The dishes were okay but not remarkable. The service was adequate and the atmosphere was pleasant. It’s an average place for Indian cuisine.", created_at=random_date(start_date, end_date)),
        Review(user_id=10, restaurant_id=11, rating=4, comments="Curry Corner provides a good variety of Indian dishes. The flavors were robust and the meal was enjoyable. The restaurant had a nice setting and the service was attentive. I had a positive experience and would return.", created_at=random_date(start_date, end_date)),

        Review(user_id=5, restaurant_id=12, rating=4, comments="Maison de Saveurs offers a delightful range of classic French dishes. The quality of the food was impressive, with rich flavors and authentic preparation. Although some dishes were more memorable than others, the overall dining experience was pleasant. The restaurant had a cozy ambiance and the service was attentive. I enjoyed my visit and would recommend it to anyone looking for French cuisine.", created_at=random_date(start_date, end_date)),
        Review(user_id=17, restaurant_id=12, rating=3, comments="Maison de Saveurs provides a decent French dining experience, but some dishes missed the mark. While the menu had a good variety, a few items lacked the depth of flavor I was expecting. The ambiance of the restaurant was charming and the service was satisfactory. It's a reasonable choice if you're in the mood for French food but not exceptional.", created_at=random_date(start_date, end_date)),
        Review(user_id=12, restaurant_id=12, rating=5, comments="Maison de Saveurs is a fantastic spot for French cuisine enthusiasts. The quality of the dishes was top-notch with exquisite flavors and elegant presentation. The atmosphere was sophisticated yet welcoming, and the service was impeccable. My dining experience was exceptional, and I look forward to returning.", created_at=random_date(start_date, end_date)),
        Review(user_id=14, restaurant_id=12, rating=2, comments="Maison de Saveurs did not meet my expectations. The French dishes lacked the authentic taste I was hoping for and the service was slower than anticipated. The restaurant's ambiance was average and did not make up for the disappointing food. I don't think I will be coming back.", created_at=random_date(start_date, end_date)),
        Review(user_id=20, restaurant_id=12, rating=4, comments="Maison de Saveurs provides a solid French dining experience with a good variety of dishes. The flavors were well-balanced and the ambiance was pleasant. The service was friendly and the meal was enjoyable. It’s a good place for a French meal, and I would recommend it to others.", created_at=random_date(start_date, end_date)),

        Review(user_id=6, restaurant_id=13, rating=5, comments="Olympian Delights is a fantastic spot for Greek cuisine. The menu features a wonderful selection of traditional dishes, all of which were flavorful and expertly prepared. The ambiance was warm and inviting, creating a perfect setting for a delightful meal. The service was top-notch, making the overall dining experience truly enjoyable. I highly recommend this restaurant for anyone craving authentic Greek food.", created_at=random_date(start_date, end_date)),
        Review(user_id=10, restaurant_id=13, rating=4, comments="Olympian Delights provides a great Greek dining experience with a diverse menu. The food was rich in flavor and beautifully presented, capturing the essence of Greek cuisine. The service was attentive, and the restaurant had a pleasant and lively atmosphere. It's a wonderful place to enjoy a meal, and I would definitely return.", created_at=random_date(start_date, end_date)),
        Review(user_id=16, restaurant_id=13, rating=3, comments="Olympian Delights offers a decent Greek dining experience, though some dishes were average. The variety on the menu was good, but not all flavors were as bold as I hoped. The service was adequate, and while the ambiance was charming, it didn't stand out as exceptional. It’s a reasonable choice for Greek food but not extraordinary.", created_at=random_date(start_date, end_date)),
        Review(user_id=7, restaurant_id=13, rating=2, comments="Olympian Delights was a bit of a letdown. The Greek dishes lacked the vibrant flavors I was expecting and the service was slower than ideal. While the restaurant's decor was nice, it didn’t compensate for the mediocre meal. Based on this experience, I would be hesitant to return.", created_at=random_date(start_date, end_date)),
        Review(user_id=12, restaurant_id=13, rating=4, comments="Olympian Delights offers a pleasant dining experience with a focus on Greek cuisine. The menu had a good variety, and the dishes were generally well-prepared and flavorful. The restaurant's atmosphere was cozy and welcoming, and the service was friendly and efficient. I enjoyed my visit and would definitely consider coming back.", created_at=random_date(start_date, end_date)),

        Review(user_id=3, restaurant_id=14, rating=4, comments="Great Wall Gourmet offers a solid selection of Chinese dishes. The flavors were rich and authentic, showcasing a good variety of traditional recipes. The atmosphere was welcoming and the service was attentive. Overall, it was a satisfying meal and I would definitely return for more.", created_at=random_date(start_date, end_date)),
        Review(user_id=18, restaurant_id=14, rating=5, comments="Great Wall Gourmet delivers exceptional Chinese cuisine. The dishes were bursting with authentic flavors and the quality of the food was outstanding. The service was prompt and the ambiance was cozy and pleasant. It’s a fantastic choice for anyone craving delicious Chinese food.", created_at=random_date(start_date, end_date)),
        Review(user_id=5, restaurant_id=14, rating=3, comments="Great Wall Gourmet is a decent option for Chinese food, though some dishes were average. The menu offered a good variety, but not all flavors stood out. The service was adequate and the restaurant had a relaxed vibe. It’s a suitable place for an occasional meal, but not remarkable.", created_at=random_date(start_date, end_date)),
        Review(user_id=11, restaurant_id=14, rating=2, comments="Great Wall Gourmet did not meet my expectations. The flavors in the dishes were quite bland and the service was slower than expected. The restaurant's atmosphere was acceptable, but it didn’t compensate for the underwhelming food. Based on this visit, I wouldn’t recommend it.", created_at=random_date(start_date, end_date)),
        Review(user_id=9, restaurant_id=14, rating=4, comments="Great Wall Gourmet provides a satisfying array of Chinese dishes. The food was flavorful and the ambiance was pleasant. The service was friendly and efficient, adding to the overall positive experience. I enjoyed my visit and would consider returning for more.", created_at=random_date(start_date, end_date)),

        Review(user_id=15, restaurant_id=15, rating=5, comments="Ramen House offers delicious ramen meals that are both healthy and flavorful. The variety was impressive and the food was well-prepared. The atmosphere was inviting and the service was excellent. I highly recommend this place for ramen cuisine.", created_at=random_date(start_date, end_date)),
        Review(user_id=8, restaurant_id=15, rating=4, comments="Ramen House serves good ramen food with a range of options. The dishes were flavorful and the service was attentive. The restaurant had a cozy ambiance that made the meal enjoyable. It’s a great spot for ramen dining.", created_at=random_date(start_date, end_date)),
        Review(user_id=12, restaurant_id=15, rating=3, comments="Ramen House is decent but some dishes were just average. The food was healthy but lacked excitement in terms of flavors. The restaurant had a nice atmosphere and the service was okay. It’s a good option for ramen.", created_at=random_date(start_date, end_date)),
        Review(user_id=14, restaurant_id=15, rating=2, comments="Ramen House was underwhelming. The dishes were bland and didn’t have much flavor. The service was slow and the restaurant wasn’t very clean. I don’t think I’ll be returning based on my experience.", created_at=random_date(start_date, end_date)),
        Review(user_id=10, restaurant_id=15, rating=4, comments="Ramen House provides a good variety of ramen dishes. The food was tasty and the ambiance was pleasant. The service was friendly and the meal was enjoyable. I had a good experience and would recommend it.", created_at=random_date(start_date, end_date)),

        Review(user_id=4, restaurant_id=16, rating=5, comments="Le Parisian Plate offers a delightful blend of French and American cuisine. The dishes were exquisitely prepared, featuring rich flavors and creative presentations. The staff was attentive and the ambiance was elegantly cozy. It was a truly memorable dining experience, and I’m looking forward to my next visit.", created_at=random_date(start_date, end_date)),
        Review(user_id=12, restaurant_id=16, rating=3, comments="Le Parisian Plate serves a range of French-American dishes that are decent but not exceptional. Some items were well-executed, while others fell a bit flat in flavor. The service was competent, though the dining experience didn’t stand out. It’s a good spot for a casual meal, but it didn’t quite impress me.", created_at=random_date(start_date, end_date)),
        Review(user_id=19, restaurant_id=16, rating=2, comments="Le Parisian Plate didn’t quite meet my expectations. The flavors were bland and the service was slower than anticipated. While the atmosphere was pleasant, it couldn’t compensate for the lackluster meal. Based on this visit, I’m uncertain if I would return.", created_at=random_date(start_date, end_date)),
        Review(user_id=7, restaurant_id=16, rating=4, comments="Le Parisian Plate offers a solid selection of French-American dishes. The food was flavorful, and the service was friendly and efficient. The restaurant’s ambiance was charming, making for a pleasant dining experience. I enjoyed my meal and would be happy to return.", created_at=random_date(start_date, end_date)),
        Review(user_id=17, restaurant_id=16, rating=5, comments="Le Parisian Plate is an exceptional choice for a sophisticated meal. The blend of French and American flavors was expertly crafted, and the dishes were beautifully presented. The staff provided excellent service, and the setting was both elegant and welcoming. It’s a wonderful place to enjoy a high-quality dining experience.", created_at=random_date(start_date, end_date)),

        Review(user_id=11, restaurant_id=17, rating=4, comments="Athena's Kitchen is a fantastic place to enjoy Greek cuisine. The variety of dishes was impressive, and each one was filled with authentic flavors. The restaurant had a warm and inviting atmosphere, and the service was attentive. Overall, I had a very satisfying meal and would gladly return.", created_at=random_date(start_date, end_date)),
        Review(user_id=6, restaurant_id=17, rating=5, comments="Athena's Kitchen serves some of the finest Greek food in town. The dishes were bursting with traditional Greek flavors and beautifully presented. The ambiance was cozy and the service was exemplary. I highly recommend this place for anyone craving a true taste of Greece.", created_at=random_date(start_date, end_date)),
        Review(user_id=13, restaurant_id=17, rating=3, comments="Athena's Kitchen offers a decent selection of Greek dishes, but it didn’t fully impress me. While some of the food was flavorful, other dishes fell short of my expectations. The service was average, and the ambiance was pleasant but not outstanding. It’s a fair choice for Greek cuisine but didn’t wow me.", created_at=random_date(start_date, end_date)),
        Review(user_id=15, restaurant_id=17, rating=2, comments="Athena's Kitchen was a letdown. The Greek food lacked the depth of flavor I was hoping for, and the service was rather slow. The restaurant's atmosphere was fine, but it couldn’t make up for the mediocre meal. Based on my visit, I wouldn’t recommend it.", created_at=random_date(start_date, end_date)),
        Review(user_id=9, restaurant_id=17, rating=4, comments="Athena's Kitchen has a solid range of Greek dishes. The flavors were authentic and well-executed, and the service was friendly and efficient. The restaurant’s atmosphere was enjoyable, making for a pleasant dining experience. I had a great time and would be happy to visit again.", created_at=random_date(start_date, end_date)),

        Review(user_id=14, restaurant_id=18, rating=5, comments="Thai Terrace is fantastic for thai food enthusiasts. The patties were juicy and the toppings were fresh. The restaurant had a great atmosphere and the service was fast. I highly recommend this place for a great thai food experience.", created_at=random_date(start_date, end_date)),
        Review(user_id=10, restaurant_id=18, rating=4, comments="Thai Terrace serves excellent thai food with a variety of options. The flavors were rich and the portions were generous. The service was good and the setting was casual. I enjoyed my meal and would return.", created_at=random_date(start_date, end_date)),
        Review(user_id=18, restaurant_id=18, rating=3, comments="Thai Terrace is decent but didn’t exceed my expectations. The thai food was good but not extraordinary. The service was fine and the ambiance was casual. It’s an okay spot for a thai food but not exceptional.", created_at=random_date(start_date, end_date)),
        Review(user_id=12, restaurant_id=18, rating=2, comments="Thai Terrace was underwhelming. The thai food was average and the service was slow. The restaurant had a nice atmosphere but the meal didn’t impress me. I’m not sure if I’ll be coming back.", created_at=random_date(start_date, end_date)),
        Review(user_id=3, restaurant_id=18, rating=4, comments="Thai Terrace offers a good thai food experience with a variety of options. The food was tasty and the service was friendly. The restaurant had a nice vibe that made for a pleasant visit. I would recommend it for a Pad Thai craving.", created_at=random_date(start_date, end_date)),

        Review(user_id=16, restaurant_id=19, rating=5, comments="Panda Palace Grill is a top-notch spot for Chinese-American cuisine. The dishes were incredibly flavorful and well-prepared, reflecting a perfect blend of traditional and Americanized flavors. The atmosphere was lively and inviting, and the service was outstanding. I had an excellent dining experience and will definitely be coming back.", created_at=random_date(start_date, end_date)),
        Review(user_id=5, restaurant_id=19, rating=4, comments="Panda Palace Grill offers a fantastic selection of Chinese-American dishes. The food was delicious, with a good mix of classic and contemporary flavors. The service was prompt and courteous, and the ambiance added to the enjoyable meal. I had a great time and would recommend this place for a satisfying dining experience.", created_at=random_date(start_date, end_date)),
        Review(user_id=14, restaurant_id=19, rating=3, comments="Panda Palace Grill is decent but not exceptional. The Chinese-American dishes were okay, though some lacked a bit of flavor. The service was adequate, and the restaurant had a casual, comfortable vibe. It's a good spot for a casual meal but didn't leave a lasting impression.", created_at=random_date(start_date, end_date)),
        Review(user_id=13, restaurant_id=19, rating=2, comments="Panda Palace Grill was somewhat disappointing. The dishes lacked the vibrant flavors I was expecting, and the service was slower than anticipated. The restaurant's atmosphere was average and didn’t enhance the dining experience. Based on this visit, I would hesitate to recommend it.", created_at=random_date(start_date, end_date)),
        Review(user_id=19, restaurant_id=19, rating=4, comments="Panda Palace Grill provides a solid Chinese-American dining experience. The food was flavorful and enjoyable, with a variety of tasty options. The atmosphere was lively, and the service was friendly and efficient. Overall, I had a pleasant meal and would definitely consider returning.", created_at=random_date(start_date, end_date)),

        Review(user_id=11, restaurant_id=20, rating=5, comments="Fish Fry is exceptional for seafood lovers. The quality of the fish was top-notch and the variety was impressive. The restaurant had a nice atmosphere and the service was attentive. I highly recommend it for a great seafood experience.", created_at=random_date(start_date, end_date)),
        Review(user_id=7, restaurant_id=20, rating=4, comments="Fish Fry serves delicious seafood with a good variety. The flavors were fresh and the presentation was great. The service was friendly and the ambiance was pleasant. I enjoyed my meal and would return.", created_at=random_date(start_date, end_date)),
        Review(user_id=15, restaurant_id=20, rating=3, comments="Fish Fry is decent but not exceptional. The seafood was good but didn’t stand out. The service was average and the restaurant had a nice ambiance. It’s an okay choice for seafood but not extraordinary.", created_at=random_date(start_date, end_date)),
        Review(user_id=2, restaurant_id=20, rating=2, comments="Fish Fry was disappointing. The seafood lacked flavor and the service was slow. The restaurant had a nice setting but didn’t make up for the underwhelming food. I’m not sure if I’ll return.", created_at=random_date(start_date, end_date)),
        Review(user_id=8, restaurant_id=20, rating=4, comments="Fish Fry provides a good seafood experience with fresh ingredients. The variety was nice and the service was good. The ambiance was relaxed and made for a pleasant meal. I had a positive experience and would recommend it.", created_at=random_date(start_date, end_date))

    ]

    db.session.bulk_save_objects(reviews)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
