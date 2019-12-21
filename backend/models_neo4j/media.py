from django_neomodel import DjangoNode
from neomodel import StringProperty, UniqueIdProperty


class MediaFiles(DjangoNode):
    MEDIA_TYPE_CHOICES = [
        ('Audio', 'Audio'),
        ('Video', 'Video'),
        ('Pdf', 'Pdf'),
    ]
    uid = UniqueIdProperty()
    nome = StringProperty(max_length=40)
    path = StringProperty(max_length=400)
    tipo = StringProperty(choices=MEDIA_TYPE_CHOICES, default='Pdf')


    class Meta:
        app_label = 'backend'

    def __str__(self):
        return str(self.nome) + " " + " " + str(self.tipo)
