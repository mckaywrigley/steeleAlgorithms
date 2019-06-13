function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return 0;
  }
  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left += 1;
      arr[left] = arr[right];
    }
  }

  return left + 1;
}
