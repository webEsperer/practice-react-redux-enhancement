> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e07-react-redux-enhancement` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03`  React i Redux: Rozszerzenie


Twoim zadaniem jest napisać rozwiązanie, które pozwoli wyświetlić wszystkie repozytoria danego użytkownika na GitHubie oraz móc je przefiltrować tj. wyświetlić tylko takie, które zawierają dany ciąg znaków. 

Do pobrania danych będziesz musiał wykorzystać [GitHub API](https://developer.github.com/v3/), a nazwę użytkownika i wyszukiwarkę pobierasz z inputa.

Stan aplikacji masz przechowywać w `state` zarządzanym przez Redux-a dlatego będziesz musiał przygotować sobie jego konfigurację oraz DevTools.

Ponieważ chcesz, aby Twoje rozwiązanie dało się w łatwy sposób przenieść do innego projektu wszystkie pliki dot. tego rozwiązania będziesz przechowywał w katalogu `./src/modules/github`:

* index.js - import/export niezbędnych elementów
* github.js - główny komponent
* github.reducer.js - Reduktor dla Redux-a
* github.actions.js - Akcje dla Redux-a
* github.types.js - nazwy dla Akcji
* github.api.js - zarządzenia API (częściowo napisane)


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:
