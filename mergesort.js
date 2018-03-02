function split(array) {
  let midpoint = Math.floor(array.length / 2);

  let firsthalf = array.slice(0, midpoint);
  let secondhalf = array.slice(midpoint);

  return [firsthalf, secondhalf];
}

function merge(left, right) {
  let merged = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
      if (leftIdx === left.length) {
        merged = merged.concat(right.slice(rightIdx));
      }
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
      if (rightIdx === right.length) {
        merged = merged.concat(left.slice(leftIdx));
      }
    }
  }

  return merged;
}

function mergeSort(array) {
  if (array.length > 1) {
    let splitted = split(array);
    let left = splitted[0];
    let right = splitted[1];
    return merge(mergeSort(left), mergeSort(right));
  } else {
    return array;
  }
}
