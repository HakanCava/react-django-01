from django.db import models

# Create your models here.


class Tutorial(models.Model):
    title=models.CharField(max_length=128)
    description=models.TextField()
    is_Done=models.BooleanField(default=False)

    def __str__(self):
        return self.title