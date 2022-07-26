# TENNIS TDD

## AUFGABE
Ein Tennisspiel hat viele verschiedene Zustände, je nachdem wie ein Spieler punktet. 
Dein Ziel ist es für jeden Zustand einen Test zu schreiben und danach die Funktion zu Programmieren. 

## ZUSTÄNDE
- Jeder Spieler kann einen dieser Punkte in einem Spiel haben "Love" "15" "30" "40"
- Wenn du 40 hast und den Punkt gewinnst, hast du das Spiel gewonnen, aber es gibt besondere Regeln.
  - Wenn beide 40 haben, sind die Spieler "deuce".
  - Wenn das Spiel auf "deuce" steht, hat der Gewinner eines Punktes Vorteil.
  - Wenn der Spieler mit Vorteil den Ball gewinnt, gewinnt er das Spiel.
  - Gewinnt der Spieler ohne Vorteil, sind sie wieder beim Einstand.
