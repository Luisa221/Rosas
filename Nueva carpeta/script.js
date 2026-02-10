function startApp() {
  // Ocultamos la pantalla de bienvenida
  const welcomeScreen = document.getElementById('welcome-screen');
  welcomeScreen.classList.add('hidden');

  // Iniciamos la animación de las flores
  document.body.classList.remove("container");
  
  // Opcional: Eliminar el elemento del DOM después de la animación para limpiar
  setTimeout(() => {
    welcomeScreen.style.display = 'none';
  }, 1500);
}

// Mantenemos esto por si acaso, pero el control ahora lo tiene el botón
window.onload = () => {
  // Aquí puedes añadir alguna música o efecto inicial si quieres
};