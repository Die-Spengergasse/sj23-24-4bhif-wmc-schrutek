# PLÜ

x

## TODOs

* Projekt anlegen
* Ins richtige Verzeichnis wechseln
* Komponente `navigation` in `ui` anlegen
* Komponente `pizza-configurator` in `ui` anlegen
* Komponente `pizza-content` in `ui` anlegen
* Komponente `pizza-price` in `ui` anlegen
* Komponente `pizza-result` in `ui` anlegen
* Service `pizza-calculator` in `services` anlegen
* Service in `app.module.ts` als `Provider` registrieren
* Alle Komponenten folgenbdermaßen stacken
  * `pizza-content` enthält `pizza-configurator`, `pizza-result` und `pizza-price`
* `pizza-result` enthält die Ausgabe für **Salami**, **Schinken**, **Käse** und eine mögliche **Fehlermeldung**
* `pizza-configurator` enthält jeweils +/- Buttons für **Salami**, **Schinken**, **Käse** und ein beschreibendes Label (siehe Bild ganz unten)
* 

## CSS

Folgendes Code-Snipet in alle Komponenten setzen

```css```
.frame {
    margin: 4px;
    padding: 4px;
    border: solid 2px;
}
```

Folgendes Code-Snipet in die Komponente `pizza-configurator` setzen

```css```
label { 
    display: inline-block;
    width: 150px; 
}

button {
    margin: 4px;
}
```

### Ergebnis

Deine App sollte nun so aussehen

![alt text](SC01.png)