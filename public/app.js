document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const matricNumber = document.getElementById('matric-number').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation (more robust validation should be implemented in a real application)
    if (!name || !matricNumber || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all fields.');
        return;
    }

    // Here you would normally send the data to the server
    alert('Payment submitted successfully!');
});
