from rest_framework import routers
from .views import BankViewset, ProviderViewset
router = routers.SimpleRouter()

router.register(r'providers', ProviderViewset, basename='providers')
router.register(r'banks', BankViewset, basename='banks')
urlpatterns = router.urls