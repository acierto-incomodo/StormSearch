const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', async () => {
    // Obtener la versión de la aplicación desde el proceso principal
    const appVersion = await ipcRenderer.invoke('get-app-version');

    // Hacer invisible el footer de la página cargada
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.style.display = 'none'; // Ocultar el footer existente
    }

    // Hacer invisible el div con id "cse-footer"
    const cseFooter = document.getElementById('cse-footer');
    if (cseFooter) {
        cseFooter.style.display = 'none'; // Ocultar el div con id "cse-footer"
    }

    // Crear un footer personalizado
    const footer = document.createElement('footer');
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.left = '0';
    footer.style.width = '100%';
    footer.style.backgroundColor = '#f1f1f1';
    footer.style.color = '#333';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    footer.style.boxShadow = '0 -2px 5px rgba(0, 0, 0, 0.1)';
    footer.innerHTML = `© 2025 StormSearch - By StormGamesStudios | Versión: ${appVersion}`;

    // Agregar el footer al cuerpo del documento
    document.body.appendChild(footer);

    // Aplicar esquinas redondeadas al div con id "cse-body"
    // const cseBody = document.getElementById('cse-body');
    // if (cseBody) {
    //     cseBody.style.borderRadius = '15px'; // Esquinas redondeadas
    //     cseBody.style.overflow = 'hidden'; // Asegurar que el contenido no sobresalga
    //     cseBody.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)'; // Agregar sombra para un diseño más limpio
    // }

    // Cambiar el texto del elemento con id "gs_tti50"
    const inputBox = document.getElementById('gs_tti50');
    if (inputBox) {
        inputBox.textContent = 'Buscar en StormSearch...'; // Cambiar el texto del input box
    }
});