# Generated by Django 3.2.4 on 2021-07-19 11:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_occupationcategory_options'),
        ('users', '0003_remove_usermodel_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='joboffer',
            name='position',
        ),
        migrations.AddField(
            model_name='joboffer',
            name='job_title',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='job_offers', to='core.occupation'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='jobseekerprofile',
            name='profession_aka_activity',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='job_seekers', to='core.occupation'),
            preserve_default=False,
        ),
    ]
