# Generated by Django 5.0.7 on 2024-07-31 23:30

import django.db.models.functions.text
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0003_remove_pokemon_title_remove_pokemon_visited_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(help_text='Enter a unique type', max_length=100, unique=True)),
            ],
        ),
        migrations.AddConstraint(
            model_name='type',
            constraint=models.UniqueConstraint(django.db.models.functions.text.Lower('type'), name='type_type_case_insensitive_unique', violation_error_message='Type already exists'),
        ),
        migrations.AddField(
            model_name='pokemon',
            name='type',
            field=models.ManyToManyField(help_text='Select a type for this pokemon', to='pokemon.type'),
        ),
    ]
