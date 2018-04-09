#+SETUPFILE: /Users/johannes/Documents/myOrg/org-html-themes/setup/theme-bigblow.setup
#+TITLE: Stichworte zu zustandslosen Anwendungen
#+AUTHOR: Johannes Brauer
#+OPTIONS:   H:4
#+OPTIONS: num:0

* Vorbemerkungen
+ Untersuchung der Praktikabilität der Benutzung der Clojure-DOSL für
  die Programmierung nicht-trivialer Anwendungen
+ Musterbeispiel: Programmierung einer Monopoly-Simulation (Codename /NoNopoly/)
  + Gegenstand der Programmiervorlesungen in den
    Informatik-Studiengängen der Nordakademie bis Jahrgang 15
  + Programmiersprache: Smalltalk
  + objektorientierte Lösung mit zustandsbehafteten Objekten in
    vielfältiger Form
+ Zweck der Untersuchung -- Beantwortung der Fragen:
  1. Ist es zweckmäßig bzw. was bedeutet es, eine Anwendung mit
    „natürlicherweise” zustandsbehafteten Objekten in einer Sprache zu
    entwickeln, die nur zustandslose Objekte kennt?
  2. Ist es überhaupt sinnvoll, in einer funktionalen Sprache mit
     „funkionalen Objekten” à la DOSL zu arbeiten?
  3. Oder führt es zu besseren Ergebnissen, wenn man die nativen
     Mittel der Sprache direkt nutzt?

* Antworten
** zur 3. Frage ...
... wurde ansatzweise der Versuch unternommen die Monopoly-Simulation
mithilfe der Sprachen [[http://elm-lang.org][Elm]] zu lösen.

Grund: Elm ist eine strikt funktionale Sprache, die auf die
Entwicklung von Web-Anwendungen spezialisiert ist.

*** Elm
Elm hat ein paar schöne Eigenschaften, z.B.
+ strikt funktional
+ absolut typsicher
+ compilierbare Programme funktionieren auch
+ Weboberflächen einfach herzustellen

Versuch NoNopoly zu implementieren, wurde dennoch abgebrochen.
Hauptgrund: keine adäquate Typhierachie verfügbar, um z. B. die
verschiedenen Feldtypen von Monopoly zu definieren.

Das Problem wird auch in[[https://becoming-functional.com/making-the-elm-model-modular-7c8a8dcdbf3][ Making the Elm Model Modular]] beschrieben.
Vgl. auch Spielbrett.elm

** zur 1. Frage

Es wurde eine Rumpfanwendung NoNopoly in der Clojure-DOSL entwickelt
(vgl. nonopoly.clj).

Vorläufiges Fazit: Es geht. Die „Elm-Probleme” traten erwartungsgemäß
nicht auf, da Polymorphie in der Clojure-DOSL kein Problem ist.

 Weitergehende
Betrachtung folgt ev. nach Beantwortung der 2. Frage.

** zur 2. Frage

Zum Vergleich wurde eine NoNopoly-Variante mit nativen Mitteln von
Clojure erstellt, s. nonopolyclj. Um im Bereich der Teilnehmer (Bank,
Spieler) und der Felder Polymorphie nutzen können, werden hier die
Sprachmittel =defrecord=, =defprotocol= und =extend=
benutzt. Klassenhierarchien im objektorientierten Sinne sind damit
aber nicht möglich. Im Bereich der Felder wurde stattdessen mit
Delegation gearbeitet (Jede Straße *hat* ein Feld.).

Fazit: Die Umsetzung erfordert etwas mehr Schreibaufwand als die
DOSL-Variante. Die Umsetzung war aber durchaus einfacher, weil die
DOSL bislang kaum brauchbare Fehlermeldungen liefert.

*Offene Frage*: Welchen Nutzen hat die Verwendung von =defrecord=
etc. für eine Anwendung dieser Art? Viele „Clojurians“ sind der
Meinung, man braucht nur Hashmaps für Objekte.

*Antwort*: In einer weiteren Variante (nonopolymap) wurde auf die
OO-Erweiterungen von Clojure verzichtet, d.h. alle Datenstrukturen
mithilfe von Hashmaps realisiert. Es hat sich gezeigt, dass dies ohne
Probleme möglich ist und die entstandene Lösung mindestens so elegant
ist wie nonopolyclj. Es ist wohl so, dass die Nutzung von =defrecord=
und =defprotocol= nur dann Vorteile bringt, wenn man auf die
Interoperabilität mit Java angewiesen ist. Für jede mit =defrecord=
erzeugte Struktur wird eine Java-Klasse und für jedes =defprotocol=
ein Java-Interface erzeugt.

# Local Variables:
# lentic-init: lentic-clojure-org-init
# End:
#
