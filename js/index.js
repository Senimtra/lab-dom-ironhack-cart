// #################################
// ## Iteration 1: updateSubtotal ##
// #################################

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const productSum = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = productSum;
  return productSum;
}

// #################################
// ## Iteration 2: calculateAll() ##
// #################################

function calculateAll() {
  const productRows = document.getElementsByClassName('product');
  for (i = 0; i < productRows.length; i++) {
    updateSubtotal(productRows[i]);
  }
  console.log(productRows);

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
