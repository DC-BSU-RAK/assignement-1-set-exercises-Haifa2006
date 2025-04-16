// It will run the function when the window finishes loading
window.onload = () => {
    const inputs = document.querySelectorAll("input");

     // We'll add a 'change' event listener to each input field
    // So the calculation updates automatically when the user changes any input
    inputs.forEach(input => {
        input.addEventListener('change', calculate)
    })
}
// Function to calculate the total petrol cost
function calculate () {
    // It will get the values entered by the user
    const Petrol_Price = document.querySelector('#Petrol_Price').value;
    const liters = document.querySelector('#liters').value;

    if (!Petrol_Price || !liters) return;
// Calculate total amount and update the result element on the page
    document.querySelector('#totalAmount').innerText = Petrol_Price * liters;
}