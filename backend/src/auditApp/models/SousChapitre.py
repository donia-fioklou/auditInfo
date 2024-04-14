from django.db import models

from auditApp.models.Chapitre import Chapitre
from auditApp.models.Annexe import Annexe


class SousChapitre(models.Model):
    annexe = models.ForeignKey(Annexe, on_delete=models.CASCADE)
    chapitre = models.ForeignKey(Chapitre, on_delete=models.CASCADE)
    nom = models.TextField()
    conformite = models.FloatField(default=0)  # pourcentage de conformite
    veracite = models.IntegerField(default=0)  # nombre de veracite
    status = models.IntegerField()

    class Meta:
        verbose_name = 'SousChapitre'
        verbose_name_plural = 'SousChapitres'
