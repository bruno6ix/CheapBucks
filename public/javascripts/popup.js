document.addEventListener('DOMContentLoaded', function() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'block'; // Muestra la ventana emergente al cargar la página
  setTimeout(function() {
    window.location.href = '/'; // Redirecciona al inicio después de 2 segundos
  }, 5000); // Cambia este valor a 5000 (5 segundos) para ajustar el tiempo de espera
});
