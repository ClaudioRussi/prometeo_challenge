from rest_framework import serializers

class ProviderSerializer(serializers.Serializer):
    code = serializers.CharField()
    country = serializers.CharField()
    name=serializers.CharField()

class BankSerializer(serializers.Serializer):
    pass