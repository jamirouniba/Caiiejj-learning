from django_neomodel import DjangoNode
from neomodel import UniqueIdProperty, StringProperty


class Syllabo(DjangoNode):
    uid = UniqueIdProperty()
    nome = StringProperty(max_length=40)
    descrizione = StringProperty(max_length=4000)

    class Meta:
        app_label = 'backend'

    def __str__(self):
        return str(self.nome) + " " + str(self.corso)
