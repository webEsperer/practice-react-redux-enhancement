# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React i Redux: Podstawy #03

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Twoim zadaniem jest napisać rozwiązanie, które pozwoli wyświetlić wszystkie repozytoria danego użytkownika na GitHub-ie oraz móc je przefiltrować tj. wyświetlić tylko takie, które zawierają dany ciąg znaków. 

Do pobrania danych będziesz musiał wykorzystać [GitHub API](https://developer.github.com/v3/), a nazwę użytkownika i wyszukiwarkę pobierasz z input-a.

Stan aplikacji masz przechowywać w `state` zarządzanym przez Redux-a dlatego będziesz musiał przygotować sobie jego konfigurację oraz DevTools.

Ponieważ chcesz, aby Twoje rozwiązanie dało się w łatwy sposób przenieść do innego projektu wszystkie pliki dot. tego rozwiązania będziesz przechowywał w katalogu `./src/modules/github`:

* index.js - import/export niezbędnych elementów
* github.js - główny komponent
* github.reducer.js - Reduktor dla Redux-a
* github.actions.js - Akcje dla Redux-a
* github.types.js - nazwy dla Akcji
* github.api.js - zarządzenia API (częściowo napisane)

&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl)

