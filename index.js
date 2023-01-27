const arr1 = [1, 2, 2, 4, 5];

function isInclude(arr1) {
  let prewNumber;
  arr1.length > 0
    ? arr1.filter((e) =>
        e === prewNumber ? console.log(true) : (prewNumber = e && console.log(false))
      )
    : console.log(false);
}

isInclude(arr1);
