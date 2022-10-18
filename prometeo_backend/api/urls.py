from rest_framework import routers
from .views import AccountViewset, ProviderViewset, SessionViewset
router = routers.SimpleRouter()

router.register(r'providers', ProviderViewset, basename='providers')
router.register(r'accounts', AccountViewset, basename='accounts')
router.register(r'login', SessionViewset, basename='login')
urlpatterns = router.urls