import json
from flask import Flask, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route("/addProduct", methods=["POST"])
def add_product():
    product_infos = request.get_json()
    with open("products.json", "r", encoding="utf-8") as f:
        result_base = json.load(f)
    result_base["list"].append(product_infos)
    with open("products.json", "w", encoding="utf-8") as f:
        json.dump(result_base, f)
    return {"status": "success"}

app.run("0.0.0.0", port=80)