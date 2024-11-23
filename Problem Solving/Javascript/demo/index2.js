const arr = [1, 5, 2, 6, 7, 2, 4, 6, 8, 9, 1, 2];

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const getPartition = (arr, low, high) => {
  let pivotValue = arr[low]; // Select the first element as the pivot
  let left = low + 1; // Start left pointer after pivot
  let right = high; // Start right pointer at the end

  while (left <= right) {
    // Move left up to find an element greater than the pivot
    while (left <= right && arr[left] < pivotValue) {
      left++;
    }

    // Move right down to find an element less than the pivot
    while (left <= right && arr[right] > pivotValue) {
      right--;
    }

    // Swap elements if left is less than or equal to right
    if (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  // Place pivot element in its correct position
  swap(arr, low, right);

  return right; // Return the final position of the pivot
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    let partitionIndex = getPartition(arr, low, high);

    // Apply quickSort to elements before and after partition
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
};

quickSort(arr, 0, arr.length - 1);
console.log(arr);
