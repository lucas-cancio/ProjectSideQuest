# Generated by Django 5.0.4 on 2024-04-11 21:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('quests', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('xp', models.IntegerField(default=0, verbose_name='XP')),
                ('date_created', models.DateField()),
                ('quests_completed', models.ManyToManyField(related_name='completed_by', to='quests.quest')),
            ],
        ),
    ]
