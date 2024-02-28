/*function zipStrings(strA, strB) {
  // Your Code here
  return strA + strB;
}*/

function zipStrings(strA, strB) {
  let a = strA.split("").filter(Boolean);

  let b = strB.split("");

  let mergedString = "";

  for (let i = 0; i < a.length || i < b.length; i++) {
    if (i < a.length) mergedString += a[i];
    if (i < b.length) mergedString += b[i];
  }
  return mergedString;
}

console.log(zipStrings("abc", "123"));
