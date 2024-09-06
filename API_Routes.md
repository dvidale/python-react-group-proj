# DashDine API Routes


### GET ALL CATEGORIES
* Purpose : This fetch populates the front page categories currently represented by the listed restaurants.
* Method: `GET`
* URL: `/restaurants/categories`

* Successful Response: HTTP Status 200
    ```python
    {
        'id': INT,
        'categ_name':STRING,
        'img_url':STRING
    }
    ```

* Error Response: HTTP Status 404
    ```python
        {
            'error': 'No restaurant categories found'. 
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
            'error': 'No restaurants found.'
        }
    ```
    
    
### GET RESTAURANT DETAILS

* Purpose : This fetch gathers detailed information for a specific restaurant.
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

* Error Response: HTTP Status 404
    ```python
        {
            'error': 'Restaurant not found.'
        }
    ```


### CREATE A NEW RESTAURANT

* Purpose : This request creates a new restaurant listing owned by the current logged in user.
* Method: `POST`
* URL: `/restaurants/new`

* Request Body
```python
    {
        'owner_id': INT,
        'name': STRING,
        'address': STRING,
        'phone_number': STRING,
        'description': STRING,
        'categories': [],
        'open_time': STRING,
        'close_time': STRING,
        'delivery_time': STRING,
        'delivery_fee': STRING,
        'banner_img': STRING
    }
```


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

* Error Response: HTTP Status 400
``` python
    {
        'name': ['Name is required.', 'This field requires 2 - 50 characters'],
        'address': ['Address is required.', 'This field requires 2 - 50 characters'],
        'phone_number': ['Phone number is required.', 'This field requires 10 characters'],
        'description': ['Description is required.', 'This field requires 20 - 70 characters'],
        'open_time': ['This field requires 5 characters'],
        'close_time': ['This field requires 5 characters'],
        'delivery_time': ['Delivery time is required.'],
        'delivery_fee': ['Delivery fee is required.'],
        'banner_img': ['Banner image is required.'],
        'categories': ['Category is required.']
    }
```

### UPDATE A RESTAURANT

Purpose : This request updates an existing restaurant listing owned by the current logged in user.
* Method: `PUT`
* URL: `/restaurants/:id`

* Request Body
```python
    {
        'owner_id': INT,
        'name': STRING,
        'address': STRING,
        'phone_number': STRING,
        'description': STRING,
        'categories': [],
        'open_time': STRING,
        'close_time': STRING,
        'delivery_time': STRING,
        'delivery_fee': STRING,
        'banner_img': STRING
    }
```

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

* Error Response: HTTP Status 400
``` python
    {
        'name': ['Name is required.', 'This field requires 2 - 50 characters'],
        'address': ['Address is required.', 'This field requires 2 - 50 characters'],
        'phone_number': ['Phone number is required.', 'This field requires 10 characters'],
        'description': ['Description is required.', 'This field requires 20 - 70 characters'],
        'open_time': ['This field requires 5 characters'],
        'close_time': ['This field requires 5 characters'],
        'delivery_time': ['Delivery time is required.'],
        'delivery_fee': ['Delivery fee is required.'],
        'banner_img': ['Banner image is required.'],
        'categories': ['Category is required.']
    }
```

### DELETE A RESTAURANT

* Purpose : This request allows the current logged in user to delete a restaurant listing they created.
* Method: `DELETE`
* URL: `/restaurants/:id`


* Successful Response: HTTP Status 200
``` python
    {
        "message" : "Delete Successful"
    }
```

* Error Response: HTTP Status 500
``` python
    {
        'error': 'Error deleting restaurant'
    }
```