    // Load the final total price
    let finalTotal = localStorage.getItem('finalTotal') || 0;
    document.getElementById('order-total').innerText = `Total: $${finalTotal}`;

    document.getElementById('buy-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your purchase!');
      localStorage.removeItem('cart');
      window.location.href = 'index.html'; // Redirect to homepage
    });


  function getDeliveryDate() {
    const today = new Date();
    today.setDate(today.getDate() + 3); // adds 3 days from today
    return today.toDateString(); // returns something like "Tue Apr 15 2025"
  }
  
  document.getElementById('buy-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const postal = document.getElementById('postal').value.trim();
    const card = document.getElementById('card').value.trim();
    const expiry = document.getElementById('expiry').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    // Basic field check
    if (!name || !email || !address || !city || !postal || !card || !expiry || !cvv) {
      alert('Please fill in all the required fields.');
      return;
    }

    const deliveryDate = getDeliveryDate();
    alert(`Thank you for your purchase, ${name}!\nYour order will be delivered by ${deliveryDate}.`);
});