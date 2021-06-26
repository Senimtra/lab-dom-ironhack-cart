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
  let totalSum = 0;
  for (i = 0; i < productRows.length; i++) {
    updateSubtotal(productRows[i]);
    totalSum += updateSubtotal(productRows[i]);
  }

  // ########################
  // ## Iteration 3: Total ##
  // ########################

  const totalSumElement = document.querySelector('#total-value span');
  totalSumElement.innerHTML = totalSum;
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
