# Generated by Django 3.2.4 on 2021-08-19 18:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0012_remove_position_position_languages'),
    ]

    operations = [
        migrations.RenameField(
            model_name='position',
            old_name='position_languages2',
            new_name='position_languages',
        ),
    ]
