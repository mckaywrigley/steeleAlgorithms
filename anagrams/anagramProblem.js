function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }

  let key = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (key[letter]) {
      key[letter] += 1;
    } else {
      key[letter] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!key[letter]) {
      return false;
    } else {
      key[letter] -= 1;
    }
  }
  return true;
}
