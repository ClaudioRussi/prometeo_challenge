from email import header
from django.conf import settings
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import ProviderSerializer, AccountSerializer, SessionSerializer
import requests

class ProviderViewset(viewsets.ViewSet):
    serializer_class = ProviderSerializer

    def list(self, request):

        url = settings.PROMETEO_URL+"/provider/"
        headers = {"accept": "application/json", "X-API-Key": settings.PROMETEO_API_KEY}
        response = requests.get(url, headers=headers)
        serializer = ProviderSerializer(response.json()["providers"], many=True)
        return Response(serializer.data)

class SessionViewset(viewsets.ViewSet):
    serializer_class = SessionSerializer

    def create(self, request):
        username, password, provider = request.data["username"], request.data["password"], request.data["provider"]
        url = settings.PROMETEO_URL+"/login/"
        payload = "provider="+provider+"&username="+username+"&password="+password
        headers = {
            "accept": "application/json",
            "content-type": "application/x-www-form-urlencoded",
            "X-API-Key": settings.PROMETEO_API_KEY
        }
        response = requests.post(url, headers=headers, data=payload)
        serializer = SessionSerializer(response.json())
        return Response(serializer.data)

class AccountViewset(viewsets.ViewSet):
    serializer_class = AccountSerializer

    def list(self, request):
        key = request.query_params.get('key')
        url = settings.PROMETEO_URL+"/account/?key="+key
        headers = {
            "accept": "application/json",
            "X-API-Key": settings.PROMETEO_API_KEY
        }
        response = requests.get(url, headers=headers)
        print(response.json())
        serializer = AccountSerializer(response.json()['accounts'], many=True)
        return Response(serializer.data)
