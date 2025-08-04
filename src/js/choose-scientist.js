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
  for (let i = 0; i < scientists.length; i++) {
    const scientist = scientists[i];
    const card = document.getElementById(scientist.id);

    if (scientist.born >= 1801 && scientist.born <= 1900) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
});

einsteinBirthYear.addEventListener('click', () => {
  const einstein = scientists.find(
    scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein'
  );
  alert(`Albert Einstein was born in ${einstein.born}`);
});

sortAlphabet.addEventListener('click', () => {
  const container = document.querySelector('.scientists__container');
  const sorted = scientists
    .slice()
    .sort((a, b) => a.surname.localeCompare(b.surname));

  for (let i = 0; i < sorted.length; i++) {
    const card = document.getElementById(sorted[i].id);
    container.appendChild(card);
  }
});

startsC.addEventListener('click', () => {
  for (let i = 0; i < scientists.length; i++) {
    const scientist = scientists[i];
    const card = document.getElementById(scientist.id);
    card.style.display = scientist.surname.startsWith('C') ? 'block' : 'none';
  }
});

removeStartsA.addEventListener('click', () => {
  for (let i = 0; i < scientists.length; i++) {
    const scientist = scientists[i];
    const card = document.getElementById(scientist.id);
    if (scientist.name.startsWith('A')) {
      card.style.display = 'none';
    }
  }
});

sortByLifespan.addEventListener('click', () => {
  const container = document.querySelector('.scientists__container');

  scientists
    .sort((a, b) => a.surname.localeCompare(b.surname))
    .forEach(s => {
      container.appendChild(document.getElementById(s.id));
    });
});

youngestScientist.addEventListener('click', () => {
  let youngest = scientists[0];

  for (let i = 1; i < scientists.length; i++) {
    if (scientists[i].born > youngest.born) {
      youngest = scientists[i];
    }
  }

  for (let i = 0; i < scientists.length; i++) {
    const card = document.getElementById(scientists[i].id);
    if (scientists[i].id === youngest.id) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
});

longestShortestLife.addEventListener('click', () => {
  let longest = scientists[0];
  let shortest = scientists[0];

  scientists.forEach(scientist => {
    const age = scientist.dead - scientist.born;
    const longestAge = longest.dead - longest.born;
    const shortestAge = shortest.dead - shortest.born;

    if (age > longestAge) longest = scientist;
    if (age < shortestAge) shortest = scientist;
  });

  scientists.forEach(scientist => {
    const card = document.getElementById(scientist.id);
    card.style.display =
      scientist.id === longest.id || scientist.id === shortest.id
        ? 'block'
        : 'none';
  });
});


sameLetters.addEventListener("click", () => {
  const match = scientists.filter(scientist => {
    const nameFirst = scientist.name[0];
    const surnameFirst = scientist.surname[0];
    return nameFirst === surnameFirst;
  });

  scientists.forEach(scientist => {
    const card = document.getElementById(scientist.id);
    card.style.display = match.includes(scientist) ? "block" : "none";
  });
});
