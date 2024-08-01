from rest_framework import serializers
from .models import Pokemon

class PokemonSerializer(serializers.ModelSerializer):
    # https://stackoverflow.com/questions/17280007/retrieving-a-foreign-key-value-with-django-rest-framework-serializers
    display_type = serializers.ReadOnlyField()

    class Meta:
        model = Pokemon
        fields = ('id', 'name', 'display_type', 'description', 'attack')