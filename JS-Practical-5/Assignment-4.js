let array = [111, 21, 13, 40, 25];

for (let i = 0; i < array.length; i++) {
  if (array[i] > array[i - 1]) {
    console.log(array[i]);
  }
}
