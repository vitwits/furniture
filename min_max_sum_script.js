///////////MAX NUMBER///////////
function max(arr) {
  var maxNumber = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
  console.log(maxNumber);
}

max([1, NaN, null, undefined, 'abc', 3, 5, -3]);




/////////////MIN NUMBER//////////////
function min(arr) {
  var minNumber = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }
  console.log(minNumber);
}

min([4, 12, 3, -3, null, NaN, undefined, 8, 123, 9, 22, 56]);




//////////////SUM OF NUMBERS///////////
function sum(arr) {
  var sumOfNumbers = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      sumOfNumbers += arr[i];
    }
  }
  console.log(sumOfNumbers);
}

sum([1, 100, ,300, NaN, 'sdf', null, undefined, 5, -3]);
