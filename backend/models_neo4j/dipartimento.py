from django_neomodel import DjangoNode
from neomodel import StringProperty, UniqueIdProperty, RelationshipTo


class Dipartimento(DjangoNode):
    nome = StringProperty(max_length=30)
    codice = StringProperty(max_length=7)
    uid = UniqueIdProperty()
    cdl = RelationshipTo('.cdl.Cdl','CORSO_DI_LAUREA')

    class Meta:
        app_label = 'backend'

    def __str__(self):
        return str(self.nome) + " " + str(self.codice)
