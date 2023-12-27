# Vejleding

Testet med Node version: 16.17.0

## Konfiguration

### Spillere
Tilføj spillere i _players_ array i filen: _/guesswho/src/views/Intro.vue_

### Billeder

Tilføj nye billeder til _images_ array i filen: _guesswho/src/composables/image.ts_

Applikation forventer billederne ligger i mappen: _guesswho/public/images_

## Applikation

```sh
npm install
```

```sh
npm run dev
```

* Tilgå http://127.0.0.1:5173/
* klik space til at vise holdopstillingen.
* Klik "Start Quiz" for at starte quizzen.

## Keyboard

Forside:

Tryk SPACE for at vise hold

Quiz:

| Key    | Action |
| -------- | ------- |
| ENTER  | Afslør svar (bør kun brugs ved debug)    |
| PIL VENSTRE  | Forrige billede   |
| PIL HOEJRE  | Næste billede    |
| SPACE |  Reducér blur værdi (tasten bør holdes nede) |
| HOLD 1 |
| 1  | Afslør svar, og tildel hold 1 aktuelle antal point    |
| Q | point + 1     |
| A    | point - 1    |
| Hold 2 |
| 3  | Afslør svar, og tildel hold 2 aktuelle antal point    |
| E | point + 1     |
| D    | point - 1    |
