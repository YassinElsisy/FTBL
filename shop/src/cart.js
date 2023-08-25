let basket = JSON.parse(localStorage.getItem("data")) || [];
let cart = document.getElementById("shopping-cart");
let totalPrice = document.getElementById("total-price");

let calculation = () => {
  let cartQty = document.getElementById("cart-Qty");
  cartQty = basket.map((x) => x.qty).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItem = () => {
  if (basket.length !== 0) {
    return (cart.innerHTML = basket
      .map((x) => {
        let { id, qty } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        let { img, name, price } = search;
        return `
        <div class="cart-box">
          <img src=${img} alt="" class="cart-img">
        <div class="details">
            <div class="product-cart-title">${name}</div>
            <div class="product-cart-price">$ ${price}</div>
            <div class="cart-buttons">
                <span onclick="decrement(${id})">-</span>
                <div class="quantity" id=${id}>${qty}</div>
                <span onclick="increment(${id})">+</span>
            </div><i onclick="removeItem(${id})" class='bx bx-trash-alt'></i>
        </div>
        
    </div>`;
      })
      .join(""));
  } else {
    return (cart.innerHTML = `
        <div class="cart-box">
            <div class="details">
                <div class="product-cart-title">Cart is empty</div>
            </div>
        </div>
        `);
  }
};

generateCartItem();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      qty: 1,
    });
  } else {
    search.qty += 1;
  }
  generateCartItem();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.qty === 0) {
    return;
  } else {
    search.qty -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.qty !== 0);
  generateCartItem();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.qty;
  calculation();
  totalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItem();
  totalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];
  generateCartItem();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
  totalAmount();
};

let totalAmount = () => {
  if (basket.length !== 0) {
    let total = basket
      .map((x) => {
        let { id, qty } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return search.price * qty;
      })
      .reduce((x, y) => x + y, 0);
    totalPrice.innerHTML = `$ ${total}`;
  } else {
    return (totalPrice.innerHTML = `$ 0`);
  }
};

totalAmount();
