from django.contrib import admin
from .models import Pokemon, Type

admin.site.register(Type)

@admin.register(Pokemon)
class PokemonAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'description', 'attack')
