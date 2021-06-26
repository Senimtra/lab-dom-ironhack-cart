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

// ###########################################
// ## Bonus Iteration 4: Removing a product ##
// ###########################################

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  target.parentNode.removeChild(target);
  calculateAll();
}

// ##############################################
// ## Bonus Iteration 5: Creating new products ##
// ##############################################

function createProduct() {
  const prodListElement = document.querySelector('tbody');

  // get Product name + price
  const prodName = document.querySelector('#product-name').value;
  const prodPrice = document.querySelector('#product-price').value;

  // new Product row
  prodListElement.innerHTML += `<tr class="product"><td class="name"><span> ${prodName} </span></td>
  <td class="price">$<span> ${prodPrice} </span></td><td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td>
  <td class="action"><button class="btn btn-remove">Remove</button></td></tr>`;

  // re-add EventListeners to remove buttons
  const removeBtnsElements = document.querySelectorAll('.btn-remove');
  for (button of removeBtnsElements) {
    button.addEventListener('click', removeProduct);
  }
  console.log(prodListElement);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // add remove buttons EventListeners
  const removeBtnsElements = document.querySelectorAll('.btn-remove');
  for (button of removeBtnsElements) {
    button.addEventListener('click', removeProduct);
  }
  // add create product EventListener
  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
