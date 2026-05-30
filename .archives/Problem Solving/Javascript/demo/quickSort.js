const arr = [1, 5, 2, 6, 7, 2, 4, 6, 8, 9, 1, 2];

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const getPartition = (arr, low, high) => {
  let pivotValue = arr[low];
  let left = low + 1;
  let right = high;

  while (left <= right) {
    while (left <= right && arr[left] <= pivotValue) {
      left++;
    }

    while (left <= right && arr[right] >= pivotValue) {
      right--;
    }

    if (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  swap(arr, low, right);

  return right;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    let partitionIndex = getPartition(arr, low, high);

    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
};

quickSort(arr, 0, arr.length - 1);
console.log(arr);
