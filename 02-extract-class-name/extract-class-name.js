function extractClassName(sessionTitle) {
  let arr = sessionTitle.toLowerCase().split(" ");
  console.log(arr);
  let year = 0;
  let month = null;
  let str = arr.length;
  //for (let i = 0; i < arr.length; i++)
  for (let i = arr.length - 3; i < arr.length; i++) {
    if (arr[i] === "januar") {
      month = "01";
      //console.log("Here is " + month);
    } else if (str < 4) {
      return null;
    } else if (arr[i] === "februar") {
      month = "02";
      //console.log("Here is " + month);
    } else if (arr[i] === "märz") {
      month = "03";
      //console.log("Here is " + month);
    } else if (arr[i] === "maerz") {
      month = "03";
      //console.log("Here is " + month);
    } else if (arr[i] === "april") {
      month = "04";
      //console.log("Here is " + month);
    } else if (arr[i] === "mai") {
      month = "05";
      //console.log("Here is " + month);
    } else if (arr[i] === "juni") {
      month = "06";
      //console.log("Here is " + month);
    } else if (arr[i] === "juli") {
      month = "07";
      //console.log("Here is " + month);
    } else if (arr[i] === "august") {
      month = "08";
      //console.log("Here is " + month);
    } else if (arr[i] === "september") {
      month = "09";
      //console.log("Here is " + month);
    } else if (arr[i] === "oktober") {
      month = "10";
      //console.log("Here is " + month);
    } else if (arr[i] === "november") {
      month = "11";
      //console.log("Here is " + month);
    } else if (arr[i] === "dezember") {
      month = "12";
      //console.log("Here is " + month);
    } else if (Number(arr[i]) > 1900 && Number(arr[i] < 2100)) {
      year = arr[i];
      //console.log("Year " + year);
    } else if (Number(arr[i] < 1900 || Number(arr[i]) > 2100)) {
      return null;
    }
  }
  console.log(year + "-" + month);
  return `${year}-${month}`;
}
