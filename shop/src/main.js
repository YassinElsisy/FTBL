let shop = document.getElementById("shop");

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, img, category } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div class="product-box" id="product-id-${id} category="${category}">
        <img src=${img} class="product-img">
        <h2 class="product-title">${name}</h2>
        <div class="product-price">
            <span class="price">$ ${price}</span>
            <span class="wrapper">
            <i onclick="decrement(${id})" class='bx bxs-minus-circle'></i>
            <div class="quantity" id=${id}>${
        search.qty === undefined ? 0 : search.qty
      }
            </div>
            <i onclick="increment(${id})" class='bx bxs-plus-circle'></i>
            </span>
        </div> 
      </div>
  `;
    })
    .join(""));
};

let basket = JSON.parse(localStorage.getItem("data")) || [];

generateShop();

let filterBtns = document.getElementById("filter-btns");

let generateFilterBtns = () => {
  return (filterBtns.innerHTML = categories
    .map((x) => {
      let { category } = x;
      let search = categories.find((x) => x.category === category) || [];
      return `
    <button id="filter-btn" onchange="filterProducts()">${category}</button>
    `;
    })
    .join(""));
};

generateFilterBtns();

// function filterProduct(category) {
//   let filterBtns = document.querySelectorAll("filter-btn");
//   filterBtns.forEach((button) => {
//     if (category.toUpperCase() === filterBtns.innerText.toUpperCase()) {
//       filterBtns.classList.add("active");
//     } else {
//       filterBtns.classList.remove("active");
//     }
//   });

//   let products = document.querySelectorAll("product-box");
//   products.forEach((product) => {
//     if (value === "all") {
//       products.classList.remove("hide");
//     }
//   });
// }

// filterProduct();

let filteredArray = shopItemsData.filter(function (product) {
  return (product.category = "Football Kits");
});

console.log(filteredArray);

function filterProducts() {
  var filterProd = document.getElementById("filter-btn");
}

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
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.qty;
  calculation();
};

let calculation = () => {
  let cartQty = document.getElementById("cart-Qty");
  cartQty.innerHTML = basket.map((x) => x.qty).reduce((x, y) => x + y, 0);
};

calculation();
