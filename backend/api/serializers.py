from rest_framework import serializers

from backend.models import *


class DipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dipartimento
        fields = '__all__'


class CdlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cdl
        fields = '__all__'


class CorsoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Corso
        fields = '__all__'


class SyllaboSerializer(serializers.ModelSerializer):
    class Meta:
        model = Syllabo
        fields = '__all__'


class LezioneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lezione
        fields = '__all__'


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaFiles
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
