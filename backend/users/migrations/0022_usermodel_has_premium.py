# Generated by Django 3.2.4 on 2021-09-18 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0021_alter_jobseekerprofile_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermodel',
            name='has_premium',
            field=models.BooleanField(default=False),
        ),
    ]
