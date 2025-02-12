console.log("Math!");

function quadraticFormula(a, b, c) {
  const sqrtParts = b ** 2 - 4 * a * c;
  const plusParts = -b + Math.sqrt(sqrtParts);
  const minusParts = -b - Math.sqrt(sqrtParts);

  return [(plusParts / 2) * a, minusParts / (2 * a)];
}

module.exports = {
  quadraticFormula,
};
