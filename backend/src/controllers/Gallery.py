import service.Gallery as Gallery
class ControllerGallery:
    def health(self, request):
        return 'ok'

    def get_images(self, request):
        try:
            return Gallery.ServiceGallery().get_images(request.args.get('infos'))
        except Exception as err:
            print(err, flush=True)

    def upload_image(self, request):
        try:
            return Gallery.ServiceGallery().upload_image(request.files['image'])
        except Exception as err:
            print(err, flush=True)

    def approve_image(self, id):
        try:
            return Gallery.ServiceGallery().approve_image(id)
        except Exception as err:
            print(err, flush=True)
