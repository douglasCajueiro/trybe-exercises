const longestWord = (word) => {
  let longest = "";
  const splitted = word.split(" ");
  for (let i = 0; i < splitted.length; i += 1) {
    if (splitted[i].length > longest.length) {
      longest = splitted[i];
    }
  }
  return longest;
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);
// retorna 'aconteceu'
