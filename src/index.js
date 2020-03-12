function createElement(height, id) {
  console.log(height);
  let div = document.createElement('div');
  div.id = id;
  div.classList.add('element');
  div.style.setProperty('--i', height);
  return div;
}

function generateArray(value_min, value_max, size) {
  return new Array(size).fill(null).map(() => Math.floor(Math.random() * Math.floor(value_max - 1)) + value_min);
}

function renderArray(arr) {
  document.getElementById('diag').innerHTML = '';

  arr.forEach((el) => {
    document.getElementById('diag').appendChild(createElement(el.valueOf(), el.id));
  });
}

function comparedElement(el) {
  document.getElementById(el.id).style.background = 'red';
}

(function() {
  let array_input = document.getElementById('array_input');
  array_input.value = generateArray(2, 20, 10);

  let form = document.getElementById('sort_form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let { array, sort } = event.target.elements;

    if (array.value === '' || sort.value === '' || !/^([0-9]+[, ][ ]?)*([0-9]+)$/.test(array.value)) {
      alert('Wrong input');
      return;
    }

    let sortAlgo = () => {};
    array = array.value.match(/([0-9]+)(?=(?=[, ][ ]?)|$)/g).map((el, i) => ({ id: i, valueOf: () => parseInt(el) }));

    switch (sort.value) {
      case 'quick': {
        sortAlgo = () =>
          VisualQuickSort(
            array,
            renderArray,
            (el) => {
              let normal = document.getElementById(el.id);
              normal.style.opacity = 0.4;
              normal.style.background = 'black';
              return normal;
            },
            (el) => (document.getElementById(el.id).style.background = 'red'),
            (el) => (document.getElementById(el.id).style.background = 'green'),
            (el) => (document.getElementById(el.id).style.background = 'blue'),
            (el) => (document.getElementById(el.id).style.opacity = 1),
          );
        break;
      }
      case 'bubble': {
        sortAlgo = () =>
          VisualBubbleSort(
            array,
            renderArray,
            (el) => (document.getElementById(el.id).style.background = 'black'),
            (el) => (document.getElementById(el.id).style.background = 'red'),
            (el) => (document.getElementById(el.id).style.background = 'green'),
          );
        break;
      }
    }

    sortAlgo();
  });
})();

function VisualQuickSort(
  array,
  renderArray = (array) => array,
  normalElement = (el) => el,
  comparedElement = (el) => el,
  swappedElement = (el) => el,
  pivotElement = (el) => el,
  groopedElement = (el) => el,
) {
  renderArray(array);

  async function onCompare(array, left, right) {
    await new Promise((resolve) => setTimeout(() => resolve(), 500));
    comparedElement(left);
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    normalElement(left);
    renderArray(array);
    return new Promise((resolve) => resolve());
  }

  async function onSwap(array, left, right) {
    await new Promise((resolve) => setTimeout(() => resolve(), 500));
    swappedElement(left);
    swappedElement(right);
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    normalElement(left);
    normalElement(right);
    renderArray(array);
    return new Promise((resolve) => resolve());
  }

  async function onMidChange(array, pivot) {
    array.forEach((el) => normalElement(el));
    pivotElement(pivot);
    return new Promise((resolve) => resolve());
  }

  async function onRegroup(array, left, right) {
    array.slice(left, right + 1).forEach((el) => groopedElement(el));
    return new Promise((resolve) => resolve());
  }

  quickSort(array, onCompare, onSwap, onMidChange, onRegroup);
}

function VisualBubbleSort(
  array,
  renderArray = (array) => array,
  normalElement = (el) => el,
  comparedElement = (el) => el,
  swappedElement = (el) => el,
) {
  renderArray(array);

  async function onCompare(array, left, right) {
    comparedElement(left);
    comparedElement(right);
    await new Promise((resolve) => setTimeout(() => resolve(), 700));
    normalElement(left);
    normalElement(right);
    renderArray(array);
    return new Promise((resolve) => resolve());
  }

  async function onSwap(array, left, right) {
    swappedElement(left);
    swappedElement(right);
    await new Promise((resolve) => setTimeout(() => resolve(), 700));
    normalElement(left);
    normalElement(right);
    renderArray(array);
    return new Promise((resolve) => resolve());
  }

  bubbleSort(array, onCompare, onSwap);
}
