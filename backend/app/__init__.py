from flask import Flask
from .config import Configuration


app = Flask(__name__)
app.config.from_object(Configuration)

@app.route('/api')
def index():
    return { "message" : "hello" }