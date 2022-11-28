// For this task we have 2 classes: Product and Basket.
// Add as many products as you want: each product should have a name, price and quantity.
// 1.   Display the available products in the html - include at least the name and the quantity.
// 2.   When the user clicks on one product, you should add the product to the basked (Hint: create a method in the
//      Basket class that pushes the product into the products array).
// 3.   When a user adds a product to the basket, the total quantity of this product should decrease (should this
//      be a method of the Basket or of the Product class?)
// 4.   Everytime a user adds something in its basket, show the content of the basket in the html and show the
//      decreased amount of the product.
// 5.   If a product goes to 0, show that is sold out and don't let anyone clicking on it.
// 6.   Show the total price of the basket (when a user adds something in the basket, the total should be updated).
// 7.   Apply some discount: if a user buys 4 products of the same kind, one is free.
// 8.   Add as many features as you want

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  removeOne() {
    if (this.quantity > 0) {
      this.quantity -= 1
    }
  }
}

class Basket {
  constructor() {
    this.products = [];
  }

  addProduct(toAdd) {
    this.products.push(toAdd);
  }
}

let myProducts = [
  new Product("apples", 40, 2),
  new Product("lemons", 32, 38),
  new Product("mangos", 44, 67),
  new Product("pineapples", 32, 88),
];

window.onload = () => {
  let basket = new Basket();
  console.log(basket);

  const productsContainer = document.getElementById("products-container");
  myProducts.forEach((product) => {
    const itemDiv = document.createElement('div');
    productsContainer.appendChild(itemDiv);
    const itemName = document.createElement('h4');
    itemName.innerHTML = `Product: ${product.name}`;
    itemDiv.appendChild(itemName);
    const itemPrice = document.createElement('p');
    itemPrice.innerHTML = `Price: $${product.price}`
    itemDiv.appendChild(itemPrice);
    const itemQuantity = document.createElement('p');
    itemQuantity.innerHTML = `Quantity: ${product.quantity}`;
    itemDiv.appendChild(itemQuantity);
    const addOneButton = document.createElement('button');
    addOneButton.innerHTML = 'Add one'
    itemDiv.appendChild(addOneButton);

    addOneButton.addEventListener("click", () => {
      removeFromProduct(product, itemQuantity, basket);
      if (product.quantity === 0) {
        addOneButton.setAttribute('disabled', '');
      }
      addToBasket(product, basket);
    })
  })
}

const removeFromProduct = (product, itemQuanity) => {
  product.removeOne();
  itemQuanity.innerHTML = `Quantity: ${product.quantity}`;
}

const addToBasket = (product, basket) => {
  basket.addProduct(product);
  const basketTable = document.getElementById('basket-table');
  const existingRow = document.getElementById(product.name);
  if (!existingRow) {
    const newRow = document.createElement('tr');
    newRow.setAttribute('id', product.name);
    basketTable.appendChild(newRow);
    const productCell = document.createElement('td');
    productCell.innerHTML = product.name;
    const quantityCell = document.createElement('td');
    quantityCell.innerHTML = product.quantity;
    newRow.append(productCell, quantityCell);
  }
  

}

