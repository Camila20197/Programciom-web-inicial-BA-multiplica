function redirectPage() {
    var subscriptionValue = document.querySelector('input[name="Suscribirse"]:checked');

    if (subscriptionValue) {
        alert("Gracias ya estas suscripto");
    } 
    else {
      alert("Por favor, revise sus datos");
    }
  }