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

    // Crear un contenedor para el diseño dividido
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.height = '100vh';
    container.style.width = '100vw';
    container.style.margin = '0';
    container.style.padding = '0';

    // Crear el iframe para StormSearch
    const stormsearchIframe = document.createElement('iframe');
    stormsearchIframe.src = 'https://cse.google.com/cse?cx=d6ef5bea99c11e0ad';
    stormsearchIframe.style.flex = '2';
    stormsearchIframe.style.border = 'none';
    stormsearchIframe.style.height = '100%';
    stormsearchIframe.style.width = '100%';

    // Crear el iframe para CardinalAI
    const cardinalIframe = document.createElement('iframe');
    cardinalIframe.src = 'https://cardinal-ai-h4rt.vercel.app';
    cardinalIframe.style.flex = '1';
    cardinalIframe.style.border = 'none';
    cardinalIframe.style.height = '100%';
    cardinalIframe.style.width = '100%';

    // Agregar los iframes al contenedor
    container.appendChild(stormsearchIframe);
    container.appendChild(cardinalIframe);

    // Reemplazar el contenido del cuerpo con el contenedor
    document.body.innerHTML = ''; // Limpiar el contenido existente
    document.body.style.margin = '0'; // Eliminar márgenes
    document.body.appendChild(container);

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
});