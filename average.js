
function average(list) {
  let sum = 0;
  for (let num of list) {
    sum += num;
  }
  return sum / list.length;
}
const list = [3, 5, 7];
console.log(average(list));


