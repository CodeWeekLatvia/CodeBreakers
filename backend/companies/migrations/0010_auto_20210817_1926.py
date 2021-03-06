# Generated by Django 3.2.4 on 2021-08-17 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0009_alter_companyprofile_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='position',
            old_name='position_location',
            new_name='position_city',
        ),
        migrations.RemoveField(
            model_name='companyprofile',
            name='location',
        ),
        migrations.AddField(
            model_name='companyprofile',
            name='city',
            field=models.TextField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='position',
            name='position_country',
            field=models.CharField(default='Latvia', max_length=250),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='companyprofile',
            name='country',
            field=models.TextField(blank=True, max_length=900),
        ),
    ]
