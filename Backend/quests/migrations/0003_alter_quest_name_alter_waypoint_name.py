# Generated by Django 5.0.4 on 2024-04-11 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quests', '0002_quest_creator'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quest',
            name='name',
            field=models.CharField(max_length=80),
        ),
        migrations.AlterField(
            model_name='waypoint',
            name='name',
            field=models.CharField(max_length=60),
        ),
    ]
