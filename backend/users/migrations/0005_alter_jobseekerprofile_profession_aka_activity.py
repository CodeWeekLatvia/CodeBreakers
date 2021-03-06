# Generated by Django 3.2.4 on 2021-07-26 12:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_occupationcategory_options'),
        ('users', '0004_auto_20210719_1223'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobseekerprofile',
            name='profession_aka_activity',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='job_seekers', to='core.occupation'),
        ),
    ]
