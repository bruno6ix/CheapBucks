function openCheckoutPopup(stripeCheckoutLink) {
    var popupWindow = window.open(stripeCheckoutLink, "StripeCheckout", "width=600,height=600");
    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert("Por favor, habilita las ventanas emergentes en tu navegador para completar el pago.");
    }
}
