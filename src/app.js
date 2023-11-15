let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".org"];
let result = [];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let e of extension) {
        let suma = p + a + n + e;
        result.push(suma);
      }
    }
  }
}

console.log(result);
