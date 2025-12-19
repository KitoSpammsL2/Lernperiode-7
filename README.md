# Lern-Periode 7

## Mein Projekt

Hinweis: Das Video enthält Ton.

https://github.com/user-attachments/assets/b0117485-c2d3-4148-8be4-94e4fa98552c


## Technische Features & Inhalt
SoundCloud-Integration: Nutzung des SoundCloud-Widgets als Audio-Engine, gesteuert über eine eigene JavaScript-Logik.

Dynamische Playlist: Die Songs werden aus einer Datenstruktur geladen, wodurch die Liste jederzeit einfach erweiterbar ist.

Echtzeit-Suche: Filterfunktion, die das Grid sofort nach Songtiteln oder Künstlern durchsucht.

Smart State (LocalStorage): Die App merkt sich den aktuellen Song, die Lautstärke und die Abspielposition, sodass der Nutzer beim Neuladen der Seite genau dort fortfahren kann, wo er aufgehört hat.

Responsive Full-Screen Player: Ein immersives Overlay mit Fortschrittsbalken, Lautstärkeregelung und einem Lyrics-Panel.

Theme-Switch: Vollständige Unterstützung von Dark- und Light-Mode über CSS-Variablen.

## Reflexion

Problemlösung (Beispiel Symmetrie): Anfangs gab es Schwierigkeiten bei der Ausrichtung der Steuerknöpfe. Ein einfaches Flexbox-Layout reichte nicht aus, um die Play-Taste mathematisch genau zu zentrieren. Durch den Wechsel auf ein komplexeres CSS-Grid-System konnte dieses Problem gelöst werden.

Umgang mit Komplexität (Beispiel Lyrics): Während der Entwicklung wurde versucht, ein synchronisiertes Lyrics-System einzubauen. Dabei wurde klar, dass das manuelle Mapping von Timestamps bei einer grossen Anzahl von Songs sehr aufwendig ist. Als Lösung wurde ein statisches Lyrics-Panel implementiert, das die Information sauber anzeigt, ohne die Code-Komplexität unnötig aufzublähen. Dies war eine wichtige Lektion in "Scope-Management" also zu entscheiden, welche Features sinnvoll und mit dem verfügbaren Zeitaufwand umsetzbar sind.


## 24.10. bis 19.12.2025

Grob-Planung
Ich habe vor, eine eigene Musik-Webseite namens WhiteRice zu entwickeln, die Songs über SoundCloud abspielt. Die Seite soll eine Playlist enthalten, aus der man einzelne Tracks auswählen kann. Dazu nutze ich ein verstecktes SoundCloud-Widget, das über einen eigenen Player gesteuert wird. Dieser bietet bereits Funktionen wie Play, Pause, Vor/Zurück sowie eine Fortschrittsanzeige mit Zeit, die man per Schieberegler verändern kann. Das Projekt soll später erweitert werden, z. B. um mehr Songs, Albenübersichten und ein eigenes Design.

## 24.10.

<img width="248" height="407" alt="image" src="https://github.com/user-attachments/assets/bf56181f-68d6-4a1f-acc1-bdaf82544f96" />

<img width="702" height="655" alt="image" src="https://github.com/user-attachments/assets/496a9739-c14f-4e4d-b425-ad0b81e43dc2" />


Heute habe ich schon ziemlich viel geschafft. Ich habe eine erste Version meiner Musik-Webseite erstellt, auf der aktuell zwei Songs eingebunden sind. Die Basisfunktionen funktionieren bereits: Ich kann die Musik abspielen, pausieren, das Lied fortsetzen und zwischen den Songs hin- und herspringen (skippen). Damit habe ich die Grundlagen meines eigenen Players erfolgreich umgesetzt.

☝️ Vergessen Sie nicht, einen ersten Code und Skizzen auf github hochzuladen!

## 31.10.


- [x] Mehr Songs hinzufügen und Playlist erweitern
- [x] Buttons automatisch für jeden Song erstellen lassen
- [x] Design etwas verbessern (z. B. Farben, Schrift, Ausrichtung)
- [x] Songtitel anzeigen und aktuell laufenden Track hervorheben
      
Heute war echt ein richtig guter Tag. Ich hab voll viel geschafft und einige neue Songs zur Seite hinzugefügt. Alle Aufgaben, die ich mir vorgenommen hatte, sind durch und es läuft richtig gut. Da Bilder sowieso mehr sagen als tausend Worte, zeige ich einfach, was ich heute so hinbekommen habe. Ich hab die Webseite auch schon online gestellt, um zu sehen, wie sie auf dem Handy aussiehtmund ich muss sagen, ich bin echt zufrieden damit, wie alles geworden ist.

https://dancing-selkie-3ea80e.netlify.app/


<img width="606" height="508" alt="image" src="https://github.com/user-attachments/assets/75dda522-1c07-4b9e-a8a5-28f59a7f140e" />
<img width="309" height="497" alt="image" src="https://github.com/user-attachments/assets/063958c6-9e83-45d6-be96-bb3966891d0e" />

## 7.11

- [x] Dunkel Hell Modus
- [x] Such Leiste
- [x] Dynamische „Now Playing“ Animation
- [x] Neues Layout

Ich habe in letzter Zeit echt viel geschafft und bin ziemlich zufrieden damit, wie sich meine Seite entwickelt hat. Klar, am Layout will ich noch ein bisschen feilen, aber insgesamt sieht es schon richtig gut aus. Heute habe ich ein paar coole neue Features eingebaut: einen Dunkel-/Hellmodus, mit dem man das Design umschalten kann, eine Suchleiste, um Songs oder Künstler schneller zu finden, und eine dynamische „Now Playing“-Animation, die sich bewegt, wenn Musik läuft. Dadurch wirkt alles viel lebendiger und moderner. Zusammen mit dem neuen Layout fühlt sich das Ganze jetzt schon wie eine kleine Musik-App an. Als Nächstes will ich noch ein paar Details verbessern vielleicht eine Lautstärkeregelung, einen Repeat-Modus oder eine Funktion, um zuletzt gespielte Songs zu speichern.



<img width="702" height="512" alt="image" src="https://github.com/user-attachments/assets/e2ec1da9-d601-44ad-9b07-96a138fe1843" />


## 14.11

Heute habe ich einiges an meiner Webseite weiterentwickelt. Als Erstes habe ich das Layout überarbeitet, sodass der ganze Player-Bereich jetzt sauber symmetrisch aussieht und sowohl auf dem Handy als auch auf dem PC gut passt. Danach habe ich einen Repeat-Bereich eingebaut, mit dem ich Songs oder ganze Playlists wiederholen kann. Außerdem habe ich eine Funktion umgesetzt, die im Hintergrund speichert, welchen Song ich zuletzt gehört habe, inklusive Position, Lautstärke und Einstellungen. Zum Schluss habe ich dafür gesorgt, dass die Musik beim Neuladen automatisch genau dort weitermacht, wo ich aufgehört habe. Dadurch fühlt sich die Seite jetzt deutlich mehr wie eine richtige Musik-App an.

- [x] Automatisches Fortsetzen beim Neuladen
- [x] Repeat-Modus
- [x] Speichern der zuletzt gehörten Songs im Hintergrund
- [x] Alles symetrlich gemacht.


## 21.11

Heute war es ziemlich kompliziert sowohl beim Soft Fade als auch beim Laden von Songs über die URL-Liste. Vor allem der Teil mit den Lyrics war sehr schwierig. Ich habe es immer noch nicht so hinbekommen, wie ich es wollte, und werde nächste Woche noch ein bisschen weiter daran arbeiten. Aber sonst war es heute ein guter Tag.

- [x] Lyrics-Bereich hinzufügen
- [x] Soft Fade Übergang zwischen Songs
- [x] Automatisches Laden von Songs über eine URL-Liste
- [x] Lieder hinzugefügt

## 28.11

- [x] Mini-Player Animation verbessern
- [x] Lyrics-System Anzeige im Player einbauen
- [x] Suchleiste optisch verbessern
- [x] Mehr Lieder hinzufügen

Ich habe es fast geschafft, die Lyrics einzubauen. Momentan habe ich einen Button, der einen kleinen Text anzeigt, aber ich möchte das Ganze noch viel schöner gestalten – am liebsten so wie bei Spotify, wo alles richtig sauber aussieht. Außerdem will ich, dass die Lyrics perfekt zum Timing des Songs passen und sich synchron mit dem Lied bewegen.


## 12.12



Das Thema Lyrics ist viel aufwendiger, als ich am Anfang gedacht habe, und ich glaube, ich habe mich da etwas überschätzt. Zum einen darf man Lyrics wegen dem Urheberrecht eigentlich nicht einfach so verwenden, und zum anderen ist es sehr mühsam, jede Zeile einzeln hinzuzufügen. Das Timing der Lyrics habe ich auch ausprobiert, aber das hat nicht so funktioniert, wie ich es mir vorgestellt habe. Ich habe versucht, die Zeit im Song zu beobachten und dann aufzuschreiben, bei welcher Sekunde welche Zeile kommt, zum Beispiel bei Sekunde 38 diese Bar. Das wäre aber extrem viel Arbeit, selbst nur für ein einziges Lied. Vielleicht gibt es dafür einfachere Lösungen, aber für mich hat es so nicht richtig gepasst. Trotzdem bin ich sehr zufrieden mit dem, was ich bisher erreicht habe.

<img width="325" height="463" alt="image" src="https://github.com/user-attachments/assets/e35657fb-e90a-4807-9d23-a494c5a5142d" />


- [x] versucht Timing vom Lied zu den lyricy
- [x] Animationen besser machen von den Lyrics
- [ ] Von mehr Liedern die Lyrics hinzufügen
- [ ] Mehr Lieder hinzufügen.

## 19.12

- [ ] Hover-Effekte verfeinern
- [ ] Bessere Rückmeldung bei Aktionen
- [ ] Feinschliff bei Schriftgrössen und Abständen


✍️ Heute habe ich... (50-100 Wörter)

☝️ Vergessen Sie nicht, Ihren Code auf github hochzuladen
