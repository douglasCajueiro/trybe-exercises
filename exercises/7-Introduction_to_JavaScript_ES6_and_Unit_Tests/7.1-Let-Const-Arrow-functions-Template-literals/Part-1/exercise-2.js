const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortNumbers = (array) => {
  const sorted = array.sort();
  for (let i = 0; i < array.length; i += 1) {
    oddsAndEvens[i] = sorted[i];
  }
};

sortNumbers(oddsAndEvens);

console.log(oddsAndEvens);
