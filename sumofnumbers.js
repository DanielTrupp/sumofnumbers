function sumFor(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

function sumWhile(nums) {
  let sum = 0;
  let pos = 0;
  while (pos < nums.length) {
    sum += nums[pos];
    pos++;
  }
  return sum;
}

function sumRecursion (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, (memo, num) => memo + num, 0);
}

const numarr = [1, 2, 3, 4, 5];

console.log(sumFor(numarr));
console.log(sumWhile(numarr));
console.log(sumRecursion(numarr));
console.log(sumTheSimpleWay(numarr));