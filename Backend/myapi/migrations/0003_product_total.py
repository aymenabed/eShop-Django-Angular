# Generated by Django 3.1.5 on 2021-01-08 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0002_auto_20210108_1600'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='total',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
