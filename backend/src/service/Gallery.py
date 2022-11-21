import infraestructure.S3 as Storage
from datetime import datetime
from infraestructure.db_mongo import mongo
from bson.objectid import ObjectId

class ServiceGallery:
    def ___init___(self) -> None:
        self.uri = ''

    def get_images(self, param):
        try:
            print('chegou auqi')
            images = list(mongo.gallery.gallery.find({"status": "not_approved"})) if param =='true' else list(mongo.gallery.gallery.find({"status": "approved"}))
            return Storage.InfraestructureStorage().get_obj(images)
        except Exception as err:
            print(err, flush=True)

    def upload_image(self, image):
        data = { "filename": image.filename, "date": datetime.now(), "status": 'not_approved'}
        Storage.InfraestructureStorage().upload_obj(image)
        mongo.gallery.gallery.insert_one(data)
        return data

    def approve_image(self, id):
        query_filter = {"_id": ObjectId(id)}
        new_values = {"$set":{ "status": "approved" }}
        mongo.gallery.gallery.update_one(query_filter, new_values)