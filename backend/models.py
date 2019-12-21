from django.contrib.auth.models import User

from django.db import models


class Dipartimento(models.Model):
    nome = models.CharField(max_length=30)
    codice = models.CharField(max_length=7, unique=True)

    class Meta:
        db_table = 'Dipartimento'

    def __str__(self):
        return self.nome


class Cdl(models.Model):
    nome = models.CharField(max_length=30)
    codice = models.CharField(max_length=7, unique=True)
    dipartimento = models.ForeignKey(Dipartimento, on_delete=models.CASCADE)

    class Meta:
        db_table = 'Cdl'

    def __str__(self):
        return self.nome + " " + self.codice + " " + str(self.dipartimento)


class Corso(models.Model):
    nome = models.CharField(max_length=30)
    anno = models.IntegerField()
    cdl = models.ForeignKey('Cdl', on_delete=models.CASCADE)
    corso = models.CharField(max_length=7, unique=True)

    class Meta:
        db_table = 'Corso'

    def __str__(self):
        return self.nome + " " + self.corso + " " + str(self.cdl)


class Lezione(models.Model):
    nome = models.CharField(max_length=30)
    corso = models.ForeignKey('Corso', on_delete=models.CASCADE)

    class Meta:
        db_table = 'Lezione'

    def __str__(self):
        return self.nome + " " + str(self.corso)


class Syllabo(models.Model):
    nome = models.CharField(max_length=40)
    descrizione = models.CharField(max_length=400)
    corso = models.ForeignKey('Corso', on_delete=models.CASCADE)

    class Meta:
        db_table = 'Syllabo'

    def __str__(self):
        return self.nome + " " + str(self.corso)


class MediaFiles(models.Model):
    MEDIA_TYPE_CHOICES = [
        ('Audio', 'Audio'),
        ('Video', 'Video'),
        ('Pdf', 'Pdf'),
    ]
    nome = models.CharField(max_length=40)
    path = models.CharField(max_length=400)
    tipo = models.CharField(max_length=5, choices=MEDIA_TYPE_CHOICES, default='Pdf')
    lezione = models.ForeignKey('Lezione', on_delete=models.CASCADE)

    class Meta:
        db_table = 'MediaFiles'

    def __str__(self):
        return self.nome + " " + str(self.lezione) + " " + str(self.tipo)
