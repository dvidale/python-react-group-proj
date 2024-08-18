"""init migration

Revision ID: ad15dd5996cb
Revises: 0abc4a4cecf9
Create Date: 2024-08-13 18:37:54.772861

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")



# revision identifiers, used by Alembic.
revision = 'ad15dd5996cb'
down_revision = '0abc4a4cecf9'
branch_labels = None
depends_on = None


def upgrade():
    pass
    # ### end Alembic commands ###


def downgrade():
    pass
