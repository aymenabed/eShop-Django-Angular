# Generated by Django 3.1.5 on 2021-01-08 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='caddie',
            name='symbol',
            field=models.CharField(blank=True, max_length=129),
        ),
        migrations.AlterField(
            model_name='product',
            name='symbol',
            field=models.CharField(blank=True, max_length=129),
        ),
    ]
