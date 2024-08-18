"""Resetting Database

Revision ID: 97de268adec4
Revises: 
Create Date: 2024-08-18 13:56:05.824671

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '97de268adec4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('categ_name', sa.String(length=50), nullable=False),
    sa.Column('img_url', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=30), nullable=False),
    sa.Column('last_name', sa.String(length=30), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('address', sa.String(length=100), nullable=False),
    sa.Column('city', sa.String(length=40), nullable=False),
    sa.Column('state', sa.String(length=40), nullable=False),
    sa.Column('zip', sa.Integer(), nullable=False),
    sa.Column('phone_number', sa.BigInteger(), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('address'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('restaurants',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('address', sa.String(length=225), nullable=False),
    sa.Column('phone_number', sa.String(length=10), nullable=False),
    sa.Column('email', sa.String(length=225), nullable=True),
    sa.Column('description', sa.String(length=2000), nullable=False),
    sa.Column('banner_img', sa.String(length=225), nullable=False),
    sa.Column('avg_rating', sa.Numeric(precision=2, scale=1), nullable=True),
    sa.Column('day_of_week', sa.Integer(), nullable=True),
    sa.Column('open_time', sa.String(length=5), nullable=False),
    sa.Column('close_time', sa.String(length=5), nullable=False),
    sa.Column('delivery_time', sa.String(length=5), nullable=False),
    sa.Column('delivery_fee', sa.Float(), nullable=False),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shopping_carts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('menu_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('restaurant_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('like_percentage', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=2000), nullable=True),
    sa.Column('price', sa.Float(precision=2, asdecimal=1), nullable=False),
    sa.Column('image_url', sa.String(length=225), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('ratings_count', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['restaurant_id'], ['restaurants.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('restaurant_categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('restaurant_id', sa.Integer(), nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['category_id'], ['categories.id'], ),
    sa.ForeignKeyConstraint(['restaurant_id'], ['restaurants.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('restaurant_id', sa.Integer(), nullable=True),
    sa.Column('rating', sa.Float(), nullable=True),
    sa.Column('comments', sa.String(length=1000), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['restaurant_id'], ['restaurants.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cart_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('shopping_cart_id', sa.Integer(), nullable=False),
    sa.Column('menu_item_id', sa.Integer(), nullable=False),
    sa.Column('item_quantity', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['menu_item_id'], ['menu_items.id'], ),
    sa.ForeignKeyConstraint(['shopping_cart_id'], ['shopping_carts.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('menu_item_ratings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('vote', sa.Boolean(), nullable=True),
    sa.Column('menu_item_id', sa.Integer(), nullable=False),
    sa.Column('review_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['menu_item_id'], ['menu_items.id'], ),
    sa.ForeignKeyConstraint(['review_id'], ['reviews.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('menu_item_ratings')
    op.drop_table('cart_items')
    op.drop_table('reviews')
    op.drop_table('restaurant_categories')
    op.drop_table('menu_items')
    op.drop_table('shopping_carts')
    op.drop_table('restaurants')
    op.drop_table('users')
    op.drop_table('categories')
    # ### end Alembic commands ###
