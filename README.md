# Dibekhana Mekteb Online

Ovo je web stranica za online mekteb nastavu, organizirana po predmetima (Kur'an, Akaid, Ibadat, Ahlak, Povijest).

## Struktura Projekta

Projekt je organiziran u direktorije koji odgovaraju glavnim predmetima:

- **Root**: Sadrži glavnu `index.html` stranicu.
- **`kuran/`**: Sadrži lekcije i pitanja vezana za Kur'an (sure, dove).
- **`akaid/`**: Sadrži lekcije o vjerovanju (Imanski šarti, Islamski šarti, itd.).
- **`css/`**: Sadrži globalne stilove (`style.css`).
- **`js/`**: Sadrži JavaScript logiku, primarno za generiranje menija (`menu.js`).

## Tehnologije

- **HTML5**: Semantička struktura stranica.
- **CSS3**: 
  - **Bootstrap 5**: Za responsive layout (grid sistem, kartice, navigacija).
  - **Custom CSS**: Prilagodbe boja (zelena tema) i specifični stilovi.
- **JavaScript**:
  - **jQuery**: Za manipulaciju DOM-om (sidebar toggle).
  - **Custom Menu Script (`js/menu.js`)**: Centralizirana logika koja generira sidebar navigaciju na svim stranicama. Koristi `window.projectRoot` varijablu za ispravno rješavanje relativnih putanja.
- **FontAwesome**: Za ikone u meniju i na stranicama.

## Kako dodati novu lekciju

1.  **Kreirajte HTML datoteku**: Kopirajte postojeću lekciju (npr. `akaid/islam_musliman.html`) u odgovarajući folder.
2.  **Podesite putanje**: Osigurajte da `window.projectRoot` varijabla ispravno pokazuje na root direktorij (npr. `../` za datoteke u podfolderima).
3.  **Uredite sadržaj**: Promijenite naslov, tekst lekcije i eventualno dodajte "Materijali" sekciju ako je potrebno.
4.  **Ažurirajte Meni**: Dodajte novi unos u `js/menu.js` u odgovarajuću kategoriju.
    *   Možete dodati `icon` svojstvo za prikaz ikone pored linka.

## Status Projekta

- [x] **Osnovna struktura i dizajn** (Responsive sidebar, zelena tema).
- [x] **Kur'an sekcija**: Popunjena većina sura i pitanja.
- [x] **Akaid sekcija**: Početna stranica, Pitanja, i lekcija "Islam i Musliman".
- [ ] **Ibadat sekcija**: U pripremi.
- [ ] **Ahlak i Povijest**: Planirano.

## Git Repozitorij

Projekt je inicijaliziran kao Git repozitorij.
- Glavna grana: `master`
