# Generated by Django 3.2.4 on 2021-09-05 09:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0018_remove_joboffer_skills'),
    ]

    operations = [
        migrations.RenameField(
            model_name='joboffer',
            old_name='skills2',
            new_name='skills',
        ),
    ]
