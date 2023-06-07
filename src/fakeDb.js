const addToCart = (id) => {
  let shoppingCart;
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  shoppingCart[id] = 1;
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const deleteFromCart = (id) => {
  let shoppingCart = {};
  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  for (let storedId in storedCart) {
    if (!(parseInt(storedId) === id)) {
      shoppingCart[id] = storedCart[id];
    }
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
export { addToCart, deleteFromCart };
