from rest_framework.views import APIView
from rest_framework.response import Response
from auditApp.models.Chapitre import Chapitre
from auditApp.models.SousChapitre import SousChapitre
from auditApp.serializers.Chapitre import ChapitreSerializer
from auditApp.serializers.SousChapitre import SousChapitreSerializer

class ChapitreList(APIView):
    def get(self, request):
        chapitres = Chapitre.objects.all()
        serializer = ChapitreSerializer(chapitres, many=True)
        return Response(serializer.data)
    
class SousChapitreList(APIView):
    def get(self, request):
        sousChapitres = SousChapitre.objects.all()
        serializer = SousChapitreSerializer(sousChapitres, many=True)
        return Response(serializer.data)