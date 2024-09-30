window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", displayValue);
}
    

function displayValue() {
    let value = document.getElementById("email").value;
    alert("Email added: " + value);
}
