// [1,5,2,6,7,2,4,6,8,9,1,2]
// 1. sorting without the sort function
// 2. How many values have changed positions after the sorting

const arr = [1, 5, 2, 6, 7, 2, 4, 6, 8, 9, 1, 2];

// [1,5,2,6,7,2,4,6,8,9,1,2]
// [1, 5] [2, 6]

const merge = function (arr, low, mid, high) {
  const n1 = mid - low;
  const n2 = high - (mid + 1);
  let arr1 = new Array(n1),
    arr2 = new Array(n2);

  for (let i = 0; i <= n1; i++) {
    arr1[i] = arr[i + low];
  }

  for (let i = 0; i <= n2; i++) {
    arr2[i] = arr[i + mid + 1];
  }

  let p = 0,
    q = 0,
    z = low;

  while (p < n1 && q < n2) {
    if (arr1[p] < arr2[q]) {
      arr[z] = arr1[p];
      p++;
    } else {
      arr[z] = arr2[q];
      q++;
    }
    z++;
  }

  while (p < n1) {
    arr[z] = arr1[p];
    p++;
    z++;
  }

  while (q < n2) {
    arr[z] = arr2[q];
    q++;
    z++;
  }
};

const mergeSort = function (arr, low, high) {
  if (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    merge(arr, low, mid, high);
  }
};

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
