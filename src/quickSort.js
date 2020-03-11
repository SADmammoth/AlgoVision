function quickSort(array) {
    let arr = [...array];
    let temp;
    let i;
    let j;
    let mid;
    function sort(arr, left, right) {
      i = left;
      j = right;
      mid = arr[Number.parseInt((left + right) / 2)];
      do {
        while (arr[i] < mid) i++;
        while (arr[j] > mid) j--;
  
        if (i <= j) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
        }
      } while (i <= j);
  
      if (i < right) sort(arr, i, right);
      if (j > left) sort(arr, left, j);
    }
    sort(arr, 0, arr.length - 1);
    return arr;
  }