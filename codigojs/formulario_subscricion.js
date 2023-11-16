function redirectPage() {
    var subscriptionValue = document.querySelector('input[name="subscription"]:checked');

    if (subscriptionValue) {
      if (subscriptionValue.value === "si") {
        window.location.href = "./moda/subscripcion.html";
      } 
      else {
        alert("Gracias por visitarnos");
      }
    } 
    else {
      alert("Por favor, selecciona una opción de suscripción");
    }
  }