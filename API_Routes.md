# DashDine API Routes


### GET ALL CATEGORIES
* Purpose : This fetch populates the front page categories currently represented by the listed restaurants.
* Method: `GET`
* URL: `/restaurants/categories`

* Successful Response: HTTP Status 200
    ```json
    {
        'id': INT,
        'categ_name':STRING,
        'img_url':STRING
    }
    ```

* Error Response: HTTP Status 404
    ```json
        {
            'error': No restaurant categories found. 
        }
    ```

### GET ALL RESTAURANTS

* Purpose : This fetch populates the home page with all the restaurants currently offering delivery.
* Method: `GET`
* URL: `/restaurants`

* Successful Response: HTTP Status 200
    ```python
    {
            'id':INT,
            'owner_id':INT,
            'name':STRING,
            'address':STRING,
            'phone_number':STRING,
            'description':STRING,
            'banner_img':STRING,
            'day_of_week':STRING,
            'open_time':STRING,
            'close_time':STRING,
            'delivery_time':STRING,
            'delivery_fee': FLOAT,
            'categories': [...],
            'average_rating': FLOAT
        }

    ```
* Error Response: HTTP Status 404
    ```python
        {
            'error': No restaurant categories found. 
        }
    ```
    
    
### GET RESTAURANT DETAILS

* Purpose : This fetch populates the home page with all the restaurants currently offering delivery.
* Method: `GET`
* URL: `/restaurants/:id`

* Successful Response: HTTP Status 200
    ```python
    {
            'id':INT,
            'owner_id':INT,
            'name':STRING,
            'address':STRING,
            'phone_number':STRING,
            'description':STRING,
            'banner_img':STRING,
            'day_of_week':STRING,
            'open_time':STRING,
            'close_time':STRING,
            'delivery_time':STRING,
            'delivery_fee': FLOAT,
            'categories': [...],
            'average_rating': FLOAT
        }

    ```


### CREATE A NEW RESTAURANT

* Purpose : This fetch populates the home page with all the restaurants currently offering delivery.
* Method: `POST`
* URL: `/restaurants/new`

* Successful Response: HTTP Status 201
 ```python
    {
            'id':INT,
            'owner_id':INT,
            'name':STRING,
            'address':STRING,
            'phone_number':STRING,
            'description':STRING,
            'banner_img':STRING,
            'day_of_week':STRING,
            'open_time':STRING,
            'close_time':STRING,
            'delivery_time':STRING,
            'delivery_fee': FLOAT,
            'categories': [...],
            'average_rating': FLOAT
        }

    ```
