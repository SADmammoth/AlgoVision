async function quickSort(
  array,
  onСompare = (array, left, right) => {},
  onSwap = (array, fst, snd) => {},
  onMidChange = (array, mid) => {},
  onGroupChange = (array, left, right),
) {
  let arr = [...array];
  let temp;
  let i;
  let j;
  let mid;
  async function sort(arr, left, right) {
    i = left;
    j = right;
    mid = arr[Number.parseInt((left + right) / 2)];
    onMidChange(arr, mid);
    onGroupChange(arr, left, right);
    do {
      while (arr[i].valueOf() < mid.valueOf()) {
        await onСompare(arr, arr[i], mid);
        onMidChange(arr, mid);
        onGroupChange(arr, left, right);
        i++;
      }
      while (arr[j].valueOf() > mid.valueOf()) {
        await onСompare(arr, arr[j], mid);
        onMidChange(arr, mid);
        onGroupChange(arr, left, right);
        j--;
      }

      if (i <= j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        await onSwap(arr, arr[i], arr[j]);

        onMidChange(arr, mid);
        onGroupChange(arr, left, right);
        i++;
        j--;
      }
    } while (i <= j);

    if (i < right) await sort(arr, i, right);
    if (j > left) await sort(arr, left, j);
  }
  await sort(arr, 0, arr.length - 1);
  onGroupChange(arr);
  onMidChange(arr);
  return arr;
}
