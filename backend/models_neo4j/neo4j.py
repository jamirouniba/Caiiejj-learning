from backend.models import cdl
from backend.models import corso
from backend.models import dipartimento
from backend.models import lezione
from backend.models import media
from backend.models import syllabo

#POP
dip1 = dipartimento.Dipartimento(nome='dip1', codice='dip1').save()
dip2 = dipartimento.Dipartimento(nome='dip2', codice='dip2').save()
cdl1 = cdl.Cdl(nome='cdl1', codice='cdl1').save()
cdl2 = cdl.Cdl(nome='cdl2', codice='cdl2').save()
corso1 = corso.Corso(nome='cor1', anno='2019').save()
corso2 = corso.Corso(nome='cor2', anno='2018').save()
syllabo1 = syllabo.Syllabo(nome='dip1', descrizione='cdcs').save()
lez1 = lezione.Lezione(nome='lez2').save()
lez2 = lezione.Lezione(nome='lez1').save()
audio = media.MediaFiles(nome='audio', tipo='Audio', path='/Media/audio.mp3').save()
video = media.MediaFiles(nome='video', tipo='Video', path='/Media/video.mp4').save()
pdf = media.MediaFiles(nome='pdf', tipo='Pdf', path='/Media/pdf.pdf').save()
#REL
dip1.cdl.connect(cdl1)
dip1.cdl.connect(cdl2)
cdl1.corso.connect(corso1)
cdl1.corso.connect(corso2)
corso1.syllabo.connect(syllabo1)
corso1.lezione.connect(lez1)
corso1.lezione.connect(lez2)
lez1.media.connect(audio)
lez1.media.connect(video)
lez1.media.connect(pdf)
