function drawStairs(n) {
  let blueprint = [];
  let stairs = '*';
  let spaces = ' ';
  let xSpacer = n;
  let yStairs = n;
  let reduceNum = 0;

  do {
    xSpacer = xSpacer - 1; //4, 3, 2, 1,
    //  spaces.repeat(xSpacer)
  } while (xSpacer >= 1);

  do {
    reduceNum += 1;
    yStairs = n - reduceNum; // 5 - 1// 5 - 2//...
    console.log(yStairs);
  } while (yStairs >= 1);
  // console.log(spaces.repeat(xSpacer) + stairs.repeat(yStairs)).repeat(n)
}
drawStairs(5);
