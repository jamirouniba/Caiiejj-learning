from django_neomodel import DjangoNode
from neomodel import UniqueIdProperty, StringProperty, IntegerProperty, RelationshipTo


class Corso(DjangoNode):
    uid = UniqueIdProperty()
    nome = StringProperty(max_length=30)
    anno = StringProperty(max_length=5)
    syllabo = RelationshipTo('.syllabo.Syllabo', 'SYLLABO')
    lezione = RelationshipTo('.lezione.Lezione', 'LEZIONE')

    class Meta:
        app_label = 'backend'

    def __str__(self):
        return str(self.nome) + " " + str(self.anno) + " " + str(self.uid)
