# Generated by Django 3.2.4 on 2021-09-22 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0022_usermodel_has_premium'),
        ('companies', '0017_position_seen'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='position',
            name='seen',
        ),
        migrations.AddField(
            model_name='position',
            name='accepted',
            field=models.ManyToManyField(related_name='accepted_posts', to='users.JobSeekerProfile'),
        ),
        migrations.AddField(
            model_name='position',
            name='denied',
            field=models.ManyToManyField(related_name='denied_posts', to='users.JobSeekerProfile'),
        ),
    ]
