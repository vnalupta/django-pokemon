from django.db import models
from django.db.models import UniqueConstraint
from django.db.models.functions import Lower

# Create your models here.
class Type(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
        help_text="Enter a unique type"
    )

    def __str__(self):
        return self.name

    class Meta:
        constraints = [
            UniqueConstraint(
                Lower('name'),
                name='type_name_case_insensitive_unique',
                violation_error_message = "Type already exists (case insensitive match)"
            ),
        ]

class Pokemon(models.Model):
    #name: string
    name = models.CharField(
        null=True,
        max_length=200,
        unique=True,
        help_text="Enter this pokemon's name"
    )

    #description
    description = models.TextField()

    #attack: string
    attack = models.CharField(
        default='Quick Attack',
        max_length=200,
        help_text="Enter this pokemon's main attack"
    )

    #type
    type = models.ForeignKey(
        'Type', on_delete=models.SET_NULL, null=True)

    def display_type(self):
        return self.type.name

    def __str__(self):
        """String for representing the Model object."""
        return self.name
