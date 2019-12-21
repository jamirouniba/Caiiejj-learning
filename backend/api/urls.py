from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')
router.register('Dips', DipViewSet, 'Dips')
router.register('Cdls', CdlViewSet, 'Cdls')
router.register('Corso', CorsoViewSet, 'Corso')
router.register('Syllabo', SyllaboViewSet, 'Syllabo')
router.register('Lezione', LezioneViewSet, 'Lezione')
router.register('Media', MediaViewSet, 'Media')
router.register('File', FileViewSet, 'File')
urlpatterns = router.urls
