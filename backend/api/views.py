from rest_framework import viewsets

from .serializers import *


class DipViewSet(viewsets.ModelViewSet):
    serializer_class = DipSerializer
    queryset = Dipartimento.objects.all()
    print("dipartimenti: ", queryset)


class CdlViewSet(viewsets.ModelViewSet):
    serializer_class = CdlSerializer

    def get_queryset(self):
        uid = self.request.query_params.get('id', None)
        print(uid)
        if uid is not None:
            queryset = Cdl.objects.filter(dipartimento=uid)
            print("Cdl", queryset)
            return queryset


class CorsoViewSet(viewsets.ModelViewSet):
    serializer_class = CorsoSerializer

    def get_queryset(self):
        id = self.request.query_params.get('id', None)

        if id is not None:
            queryset = Corso.objects.filter(cdl=id)
            print("Corso", queryset)
            return queryset


class SyllaboViewSet(viewsets.ModelViewSet):
    serializer_class = SyllaboSerializer

    def get_queryset(self):
        id = self.request.query_params.get('id', None)

        if id is not None:
            queryset = Syllabo.objects.filter(corso=id)
            print("syllabo", queryset)
            return queryset


class LezioneViewSet(viewsets.ModelViewSet):
    serializer_class = LezioneSerializer

    def get_queryset(self):
        id = self.request.query_params.get('id', None)

        if id is not None:
            queryset = Lezione.objects.filter(corso=id)
            print("Lezione", queryset)
            return queryset


class MediaViewSet(viewsets.ModelViewSet):
    serializer_class = MediaSerializer

    def get_queryset(self):
        id = self.request.query_params.get('id', None)

        if id is not None:
            queryset = MediaFiles.objects.filter(lezione=id)
            print("medialist", queryset)
            return queryset


class FileViewSet(viewsets.ModelViewSet):
    serializer_class = MediaSerializer

    def get_queryset(self):
        uid = self.request.query_params.get('id', None)
        print(uid)
        if uid is not None:
            queryset = MediaFiles.objects.filter(id=uid)
            print("file", queryset)
            return queryset


