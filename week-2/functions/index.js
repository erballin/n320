// Two ways to set default values.
function calcTriArea({ base, height } = {}) {
  const baseValue = base || 1;
  const heightValue = height || 1;
  return 0.5 * baseValue * heightValue;
}
function calcSquareArea({ length, width } = {}) {
  const lengthValue = length || 1;
  const widthValue = width || 1;

  return lengthValue * widthValue;
}
module.exports = {
  calcSquareArea,
  calcTriArea,
};
