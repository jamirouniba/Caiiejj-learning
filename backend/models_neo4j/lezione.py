from django_neomodel import DjangoNode
from neomodel import UniqueIdProperty, StringProperty, RelationshipTo


class Lezione(DjangoNode):
    uid = UniqueIdProperty()
    nome = StringProperty(max_length=30)
    media = RelationshipTo('.media.MediaFiles', 'FILES')

    class Meta:
        app_label = 'backend'

    def __str__(self):
        return str(self.nome) + " " + str(self.corso)
