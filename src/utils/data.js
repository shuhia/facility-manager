export function sliceData(data, size = 100) {
  const copy = JSON.parse(JSON.stringify(data));
  const copies = [];
  while (copy.length > 0) {
    copies.push(copy.splice(0, size));
  }
  return copies;
}
