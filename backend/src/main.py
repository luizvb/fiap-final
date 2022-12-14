from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import controllers.Gallery as Gallery
from common.mongoflask import MongoJSONEncoder, ObjectIdConverter

app = Flask(__name__)
CORS(app)

app.json_encoder = MongoJSONEncoder
app.url_map.converters['objectid'] = ObjectIdConverter

@app.route("/api/v1/health", methods=['GET'])
@cross_origin()
def health():
      print('teste', flush=True)
      return Gallery.ControllerGallery().health(request)
      
@app.route("/api/v1/images", methods=['POST'])
@cross_origin()
def upload_images():
      return jsonify(Gallery.ControllerGallery().upload_image(request))

@app.route("/api/v1/images", methods=['GET'])
@cross_origin()
def get_images():
      return jsonify(Gallery.ControllerGallery().get_images(request))

@app.route("/api/v1/images/<id>", methods=['PUT'])
@cross_origin()
def approve_image(id):
    return jsonify(Gallery.ControllerGallery().approve_image(id))

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080, debug=True)
