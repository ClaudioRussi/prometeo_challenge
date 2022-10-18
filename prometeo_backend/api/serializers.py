from rest_framework import serializers

class ProviderSerializer(serializers.Serializer):
    code = serializers.CharField()
    country = serializers.CharField()
    name=serializers.CharField()

class BankSerializer(serializers.Serializer):
    pass

class SessionSerializer(serializers.Serializer):
    key = serializers.CharField()
    status = serializers.CharField()

class AccountSerializer(serializers.Serializer):
    id = serializers.CharField()
    name = serializers.CharField()
    number = serializers.CharField()
    branch = serializers.CharField()
    currency = serializers.CharField()
    balance = serializers.IntegerField()