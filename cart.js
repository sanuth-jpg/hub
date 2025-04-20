
    function loadCart() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let tableBody = document.querySelector('#cart-table tbody');
      let finalTotal = 0;
      tableBody.innerHTML = '';

      cart.forEach(item => {
        let total = item.price * item.quantity;
        finalTotal += total;
        let row = `
          <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price}</td>
            <td>$${total}</td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });

      document.getElementById('final-total').innerText = `Total: $${finalTotal}`;
      localStorage.setItem('finalTotal', finalTotal); // Save total to use in checkout
    }

    loadCart();

    function clearCart() {
  localStorage.removeItem('cart'); // Remove the cart from localStorage
  loadCart(); // Reload the cart table to show it's empty
  document.getElementById('final-total').innerText = 'Total: $0.00'; // Reset total
}


function goToCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (!cart.length) {
    alert("Your cart is empty. Please add items before checking out.");
    return;
  }
  window.location.href = "checkout.html";
}





function applyFavouriteOrder() {
  const favourite = JSON.parse(localStorage.getItem("favouriteOrder") || "[]");
  if (!favourite.length) {
    alert("No favourite order saved.");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = [...cart, ...favourite]; // Allow duplicates
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  alert("Favourite order added to cart.");
  location.reload(); // Reload the cart page to show updates
}





function saveAsFavouriteOrder() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  localStorage.setItem("favouriteOrder", JSON.stringify(cart));
  alert("Favourite order saved!");
}



