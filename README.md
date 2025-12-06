# Mekteb Online

Ovo je osnovni predložak za web stranicu Mekteb Online.

## Struktura

- `index.html`: Glavna stranica koja učitava meni i sadržaj.
- `css/style.css`: Stilovi stranice (boje, raspored).
- `js/menu.js`: Sadrži strukturu menija i logiku za prikazivanje.

## Kako dodati sadržaj

1. Otvorite `index.html` u web pregledniku da vidite stranicu.
2. Kliknite na stavke u meniju. Primijetit ćete da se URL mijenja (npr. `?page=fatiha`).
3. Da biste dodali stvarni sadržaj, imate dvije opcije:

### Opcija A: Uređivanje `js/menu.js` (Preporučeno za jednostavnost)
U datoteci `js/menu.js`, u dijelu gdje se generira HTML (`mainContent.innerHTML = ...`), možete dodati logiku koja učitava različit tekst ovisno o ID-u stranice.

### Opcija B: Kreiranje zasebnih HTML datoteka
Ako želite zasebne datoteke za svaku lekciju:
1. Kopirajte `index.html` i nazovite ga npr. `fatiha.html`.
2. U `js/menu.js` promijenite liniju `a.href = '?page=${item.id}';` u `a.href = '${item.id}.html';`.
3. Uredite `fatiha.html` i upišite tekst lekcije direktno u `#main-content` div.

## Tehnologije
- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (Vanilla + jQuery)
- FontAwesome (Ikone)
