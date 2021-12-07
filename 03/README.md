> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e07-react-redux-enhancement` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03`  React i Redux: Rozszerzenie


Napisz rozwiązanie, które pozwoli:
- wyświetlić wszystkie repozytoria danego użytkownika GitHuba 
- przefiltrować je, czyli wyświetlić tylko te, które zawierają dany ciąg znaków. 

Do pobrania danych wykorzystaj [GitHub API](https://developer.github.com/v3/). Nazwę użytkownika i wyszukiwaną frazę (repozytorium) odbieraj z inputów.

Stan aplikacji przechowuj w `state` zarządzanym przez Redux. Przygotuj sobie jego konfigurację oraz DevTools.

Ponieważ chcesz, aby Twoje rozwiązanie dało się łatwo przenieść do innego projektu, wszystkie pliki utworzonej wyszukiwarki przechowuj w katalogu `./src/modules/github`:

* index.js – import/eksport niezbędnych elementów
* github.js – główny komponent
* github.reducer.js – Reduktor dla Reduxa
* github.actions.js – Akcje dla Reduxa
* github.types.js – nazwy dla Akcji
* github.api.js – zarządzanie API (częściowo napisane).


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:
