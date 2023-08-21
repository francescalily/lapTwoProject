const findLargest = (arr) => {
  if (!arr || arr.length == 0) {
    return -1;
  }
  let largest = arr[0];
  let largestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
      largestIndex = i;
    }
  }
  return largestIndex;
};

module.exports = {
  findLargest,
};
