function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swapInPlace(array, j);
      }
    }
  }
  return array;
}

function swapInPlace(array, index) { // side effects
  let temp = array[index];
  array[index] = array[index + 1];
  array[index + 1] = temp;
}
