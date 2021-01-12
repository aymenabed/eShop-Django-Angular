# Generated by Django 3.1.5 on 2021-01-08 14:55

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Caddie',
            fields=[
                ('id',
                 models.AutoField(auto_created=True,
                                  primary_key=True,
                                  serialize=False,
                                  verbose_name='ID')),
                ('created_date',
                 models.DateTimeField(default=django.utils.timezone.now)),
                ('symbol', models.CharField(blank=True, max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id',
                 models.AutoField(auto_created=True,
                                  primary_key=True,
                                  serialize=False,
                                  verbose_name='ID')),
                ('symbol', models.CharField(blank=True, max_length=128)),
                ('name', models.CharField(max_length=255)),
                ('short_desc', models.TextField(blank=True, null=True)),
                ('photo', models.TextField(blank=True, null=True)),
                ('qte', models.IntegerField(blank=True, null=True)),
                ('qteDemander', models.IntegerField(blank=True, null=True)),
                ('prix', models.FloatField(default=10, null=True)),
                ('created_date',
                 models.DateTimeField(default=django.utils.timezone.now)),
                ('caddie',
                 models.ForeignKey(on_delete=django.db.models.deletion.CASCADE,
                                   to='myapi.caddie')),
            ],
        ),
    ]
