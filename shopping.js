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

  returnOne() {
    this.quantity += 1
  }
}

class Basket {
  constructor() {
    this.products = [];
  }

  addProduct(toAdd) {
    this.products.push(toAdd);
  }

  removeProduct(toRemove) {
    const remove = this.products.findIndex((e) => e.name === toRemove.name);
    this.products.splice(remove, 1);
  }
}

let myProducts = [
  new Product("apples", 0.80, 2),
  new Product("lemons", 0.60, 38),
  new Product("mangos", 1.20, 67),
  new Product("pineapples", 3.00, 88),
];

window.onload = () => {
  let basket = new Basket();
  const productsContainer = document.getElementById("products-container");

  myProducts.forEach((product) => {
    const itemDiv = document.createElement('div');
    productsContainer.appendChild(itemDiv);
    const itemName = document.createElement('h4');
    itemName.innerHTML = product.name;
    const itemPrice = document.createElement('p');
    itemPrice.innerHTML = `Price: $${product.price}`
    const itemQuantity = document.createElement('p');
    itemQuantity.innerHTML = `Stock: ${product.quantity}`;
    const addOneButton = document.createElement('button');
    const removeOneButton = document.createElement('button');
    addOneButton.innerHTML = '+';
    removeOneButton.innerHTML = '-';
    removeOneButton.setAttribute('disabled', '');
    itemDiv.append(itemName, itemPrice, itemQuantity, addOneButton, removeOneButton);

    addOneButton.addEventListener("click", () => {
      removeFromProduct(product, itemQuantity, basket);
      if (product.quantity === 0) {
        addOneButton.setAttribute('disabled', '');
      }
      addToBasket(product, basket);
      if (!basket.products.includes(product)) {
        removeOneButton.setAttribute('disabled', '');
      } else {
        removeOneButton.removeAttribute('disabled');
      }
    })

    removeOneButton.addEventListener("click", () => {
      returnProduct(product, itemQuantity, basket);
      if (product.quantity > 0) {
        addOneButton.removeAttribute('disabled')
      }
      removeFromBasket(product, basket);
      if (!basket.products.includes(product)) {
        removeOneButton.setAttribute('disabled', '');
      }
    })
  })

  displayTotal(basket);
}

const removeFromProduct = (product, itemQuanity) => {
  product.removeOne();
  itemQuanity.innerHTML = `Stock: ${product.quantity}`;
}

const returnProduct = (product, itemQuanity) => {
  product.returnOne();
  itemQuanity.innerHTML = `Stock: ${product.quantity}`;
}

const addToBasket = (product, basket) => {
  basket.addProduct(product);
  displayBasket(basket);
  displayTotal(basket);
}

const removeFromBasket = (product, basket) => {
  basket.removeProduct(product);
  displayBasket(basket);
  displayTotal(basket);
}

const displayBasket = (basket) => {
  const basketContent = {};
  basket.products.forEach((product) => {
    basketContent[product.name] = (basketContent[product.name] || 0) + 1
  })
  const contentArray = Object.entries(basketContent);
  const basketTable = document.getElementById('basket-table');
  basketTable.innerHTML = "";
  contentArray.forEach((e) => {
    const row = document.createElement('tr');
    basketTable.appendChild(row);
    const nameCell = document.createElement('td');
    const quantityCell = document.createElement('td');
    row.append(nameCell, quantityCell);
    nameCell.innerHTML = e[0];
    quantityCell.innerHTML = e[1];
  })
}

const displayTotal = (basket) => {
  const totalSpan = document.getElementById("total");
  let total = 0;
  for (let i = 0; i < basket.products.length; i++) {
    total += basket.products[i].price * 10;
  }
  total /= 10;
  totalSpan.innerHTML = total.toString();
}

