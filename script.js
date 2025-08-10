// Elenco delle immagini nella cartella 'immagini'
const immagini = [
  'immagini/tessa1.jpg',
  'immagini/tessa2.jpg',
  'immagini/tessa3.jpg',
  'immagini/tessa4.jpg'
];

// Scegli una immagine casuale
const randomIndex = Math.floor(Math.random() * immagini.length);
const img = document.getElementById('tessa-image');
img.src = immagini[randomIndex];