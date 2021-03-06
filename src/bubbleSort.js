async function bubbleSort(arr, onCompare = (array, left, right) => {}, onSwap = (array, left, right) => {}) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      await onCompare(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        await onSwap(arr, arr[j], arr[j + 1]);
      }
    }
  }
  return arr;
}
