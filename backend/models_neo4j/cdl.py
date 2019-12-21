from django_neomodel import DjangoNode
from neomodel import StringProperty, UniqueIdProperty, RelationshipTo


class Cdl(DjangoNode):
    nome = StringProperty(max_length=30)
    codice = StringProperty(max_length=7, unique=True)
    uid = UniqueIdProperty()
    corso = RelationshipTo('.corso.Corso', 'CORSO_DISPONIBILE')

    class Meta:
        app_label = 'backend'

    def __str__(self):
        return str(self.nome) + " " + str(self.codice) + " " + str(self.corso)