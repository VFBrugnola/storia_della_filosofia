# Storia della Filosofia — Hub didattico

Pagina vetrina per i materiali didattici di filosofia per il liceo, dalla Grecia al Novecento.
Raccoglie e linka le dashboard interattive per argomento, ordinate per anno di corso, con indicazione dello stato di ciascuna.

**GitHub Pages:** https://vfbrugnola.github.io/storia_della_filosofia/

## Le dashboard

### Come sono costruite?
I contenuti derivano dalle lezioni dell'autore. Le dashboard sono sviluppate in *vibecoding* con Claude AI. Tutti i contenuti sono riletti e supervisionati.

### Scopo delle dashboard
Le dashboard hanno uno scopo didattico, rivolte agli studenti del liceo.

---

## Dashboard disponibili

| Anno | Argomento | Link | Stato |
|---|---|---|---|
| Quinta | Darwin e il darwinismo | [darwin/](https://vfbrugnola.github.io/storia_della_filosofia/darwin/) | ✅ Disponibile |

---

## Struttura del repo

```
storia_della_filosofia/
├── index.html                  # Pagina hub — navigazione per anno di corso
└── <argomento>/                # Una cartella per dashboard (es. darwin/)
    ├── index.html
    └── assets/img/             # Eventuali immagini locali
```

Ogni dashboard è un file HTML **self-contained**: nessuna dipendenza da file JS o CSS esterni al repo. I dati sono inlineati direttamente nello script.

---

## Aggiungere una nuova dashboard

1. Creare una cartella con il nome dell'argomento (es. `kant/`)
2. Inserire un `index.html` self-contained con dati inline
3. Aggiungere la card nell'`index.html` dell'hub (sostituire il placeholder corrispondente con un link `<a class="card" href="./kant/">` e badge `card-badge--ready`)
4. Aggiornare la tabella qui sopra
5. Fare il push — GitHub Pages deploya automaticamente
