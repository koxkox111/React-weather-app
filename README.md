Projekt stworzony w ramach przedmiotu Języki i narzędzia programowania II na Uniwersytecie Warszawskim.

## Opis projektu
Aplikacja webowa, która umożliwia użytkownikowi wyświetlanie informacji o pogodzie dla wybranego miasta. Aplikacja korzysta z zewnętrznego API, aby pobierać dane pogodowe oraz obrazy związane z warunkami pogodowymi.

Możliwości wyświetlania aktualnej, godzinowej oraz prognozy pogody na 3 dni. Użytkownik może również wyświetlić informacje o pogodzie dla swojej lokalizacji.

## Korzystanie z aplikacji
```shell
npm install
npm start
```
Możliwe jest że trzeba zainstalować nodejs, npm i moduły z package.json.
Aby działało na students trzeba dodać:
```shell
npm i @reduxjs/toolkit
npm install axios
npm i react-loader-spinner
```

## API
W pliku src/config.js są klucze API do weatherapi.com oraz tenor.com.
Można je zmienić na własne, aby uniknąć limitu zapytań, ale dopóki repozytorium jest prywatne, to nie ma takiej potrzeby.

## Cache
W cache zapamiętujemy zapytania i odpowiedzi z weatherapi.com
Co skutkuje tym, że zapytanie o [Warszawa, Poland] rózni się od [Warszawa], i oba będą zapamiętywane w cache.

## Stopień "nice" pogody
Dla każdego dnia patrzymy na dzienny opis pogody i temperatury [min, avg, max] oraz sprawdzamy warunki z treści zadania.