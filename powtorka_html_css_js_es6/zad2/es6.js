const kursy = [
  { nazwa: "React", godziny: 30, aktywny: true },
  { nazwa: "Node.js", godziny: 20, aktywny: false },
  { nazwa: "MySQL", godziny: 15, aktywny: true },
  { nazwa: "Bootstrap", godziny: 10, aktywny: true }
];

const nazwyAktywnych = (tablica) => {
  const wynik = [];
  for (let i = 0; i < tablica.length; i++) {
    if (tablica[i].aktywny === true) {
      wynik.push(tablica[i].nazwa);
    }
  }
  return wynik;
};

const sumaGodzin = (tablica) => {
  let suma = 0;
  for (let i = 0; i < tablica.length; i++) {
    suma = suma + tablica[i].godziny;
  }
  return suma;
};

const opis = (kurs) => {
  return "Kurs " + kurs.nazwa + " trwa " + kurs.godziny + " godzin";
};

export { kursy, nazwyAktywnych, sumaGodzin, opis };
