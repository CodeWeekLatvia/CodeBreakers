# Generated by Django 3.2.4 on 2021-08-19 18:05

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_rename_interests2_jobseekerprofile_interests'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jobseekerprofile',
            name='languages',
        ),
        migrations.AddField(
            model_name='jobseekerprofile',
            name='languages2',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, default=list, size=None),
        ),
    ]
