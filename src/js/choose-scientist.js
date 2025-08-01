const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const born19Ceuntry = document.getElementById('born-19-century');
const einsteinBirthYear = document.getElementById('einstein-birth-year');
const sortAlphabet = document.getElementById('sort-alphabet');
const startsC = document.getElementById('starts-c');
const removeStartsA = document.getElementById('remove-starts-a');
const sortByLifespan = document.getElementById('sort-by-lifespan');
const youngestScientist = document.getElementById('youngest-scientist');
const longestShortestLife = document.getElementById('longest-shortest-life');
const sameLetters = document.getElementById('same-letters');

born19Ceuntry.addEventListener('click', () => {

  const result = scientists.filter(scientist => scientist.age >= 1801 && scientist.age <= 1900);
    if (result) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  
});

einsteinBirthYear.addEventListener("click", () => {
  const einstein = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein");
  alert(`Albert Einstein was born in ${einstein.born}`);
});


