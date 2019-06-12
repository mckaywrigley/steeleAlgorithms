function same(arr1, arr2) {
  // check if arr1 and arr2 are the same length
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] * arr1[i] !== arr2[i]) {
        console.log(false);
        return false;
      }
    }
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

let arr1 = [1, 2, 3];
let arr2 = [1, 4, 9];

same(arr1, arr2);
same(arr1, [1, 4]);
