from django.conf import settings
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import ProviderSerializer, BankSerializer
from prometeo import Client
from json import dumps

class ProviderViewset(viewsets.ViewSet):
    serializer_class = ProviderSerializer

    def list(self, request):
        client = Client(settings.PROMETEO_API_KEY, settings.PROMETEO_ENVIRONMENT)
        providers = client.banking.get_providers()
        serializer = ProviderSerializer(providers, many=True)
        return Response(serializer.data)

class BankViewset(viewsets.ViewSet):
    serializer_class = BankSerializer

    def create(self, request):
        username, password, provider = request.data["username"], request.data["password"], request.data["provider"]
        client = Client(settings.PROMETEO_API_KEY, settings.PROMETEO_ENVIRONMENT)
        print(settings.PROMETEO_API_KEY)
        session = client.banking.login(username=username, password=password, provider=provider)
        print('session key:', session.get_session_key())
        print('status:', session.get_status())

        response = session._client.call_api("GET", "/account/", params={
        "key": session.get_session_key(),
        })
        print(dumps(response, indent=4))