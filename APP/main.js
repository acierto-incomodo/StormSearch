const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const packageJson = require(path.join(__dirname, 'package.json')); // Importar el archivo package.json

let mainWindow;

app.on('ready', () => {
    // Crear la ventana principal
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        title: 'StormSearch', // Establecer el título inicial de la ventana
        icon: path.join(__dirname, 'new_search_engine/icons/icon.png'), // Establecer el icono de la ventana
        webPreferences: {
            nodeIntegration: true, // Habilitar nodeIntegration para usar IPC
            contextIsolation: false, // Deshabilitar el aislamiento del contexto
            enableRemoteModule: false, // Deshabilitar el módulo remoto
            preload: `${__dirname}/preload.js` // Usar un script preload para inyectar contenido
        }
    });

    // Cargar el motor de búsqueda personalizado
    mainWindow.loadURL('https://cse.google.com/cse?cx=d6ef5bea99c11e0ad');

    // Evitar que el título de la ventana cambie
    mainWindow.on('page-title-updated', (event) => {
        event.preventDefault(); // Prevenir el cambio del título
    });

    // Manejar el cierre de la ventana
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // Crear el menú personalizado
    const menu = Menu.buildFromTemplate([
        {
            label: '🏠 Inicio',
            click: () => {
                mainWindow.loadURL('https://cse.google.com/cse?cx=d6ef5bea99c11e0ad');
            }
        },
        {
            label: '← Atrás',
            click: () => {
                if (mainWindow.webContents.canGoBack()) {
                    mainWindow.webContents.goBack();
                }
            }
        },
        {
            label: '→ Adelante',
            click: () => {
                if (mainWindow.webContents.canGoForward()) {
                    mainWindow.webContents.goForward();
                }
            }
        },
        {
            label: '🔄️ Recargar',
            click: () => {
                mainWindow.webContents.reload();
            }
        },
        //{
        //    label: 'CardinalAI',
        //    click: () => {
        //        const cardinalWindow = new BrowserWindow({
        //            width: 400,
        //            height: 600,
        //            title: 'CardinalAI',
        //            webPreferences: {
        //                nodeIntegration: false, // Deshabilitar nodeIntegration por seguridad
        //                contextIsolation: true // Habilitar aislamiento del contexto
        //            }
        //        });
        //        cardinalWindow.loadURL('https://cardinal-ai-h4rt.vercel.app');
        //    }
        //},
        {
            label: 'ℹ️ Otros',
            submenu: [
                {
                    label: 'Acerca de StormSearch',
                    click: () => {
                        const aboutWindow = new BrowserWindow({
                            width: 400,
                            height: 300,
                            title: 'Acerca de StormSearch',
                            webPreferences: {
                                nodeIntegration: true
                            }
                        });
                        aboutWindow.loadURL('data:text/html;charset=utf-8,' +
                            encodeURIComponent(`
                                <h1>StormSearch</h1>
                                <p>Motor de búsqueda personalizado desarrollado por StormGamesStudios.</p>
                                <p><strong>Versión:</strong> ${packageJson.version}</p>
                            `));
                    }
                },
                {
                    label: 'Inspeccionar pestaña',
                    click: () => {
                        mainWindow.webContents.openDevTools(); // Abrir las herramientas de desarrollo
                    }
                }
            ]
        }
    ]);

    // Establecer el menú en la ventana principal
    Menu.setApplicationMenu(menu);

    // Crear el menú contextual (clic derecho)
    const contextMenu = Menu.buildFromTemplate([
        { role: 'undo', label: 'Deshacer' },
        { role: 'redo', label: 'Rehacer' },
        { type: 'separator' },
        { role: 'cut', label: 'Cortar' },
        { role: 'copy', label: 'Copiar' },
        { role: 'paste', label: 'Pegar' },
        { role: 'delete', label: 'Eliminar' },
        { type: 'separator' },
        { role: 'selectAll', label: 'Seleccionar todo' }
    ]);

    // Mostrar el menú contextual al hacer clic derecho
    mainWindow.webContents.on('context-menu', (event) => {
        contextMenu.popup(mainWindow);
    });
});

// Enviar la versión de la aplicación al proceso de renderizado
ipcMain.handle('get-app-version', () => {
    return packageJson.version;
});

// Salir de la aplicación cuando todas las ventanas estén cerradas
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        // Volver a crear la ventana si se activa la aplicación en macOS
        mainWindow = new BrowserWindow({
            width: 1200,
            height: 800,
            title: 'StormSearch', // Establecer el título inicial de la ventana
            icon: path.join(__dirname, 'new_search_engine/icons/icon.png'), // Establecer el icono de la ventana
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: false,
                preload: `${__dirname}/preload.js`
            }
        });

        mainWindow.loadURL('https://cse.google.com/cse?cx=d6ef5bea99c11e0ad');

        // Evitar que el título de la ventana cambie
        mainWindow.on('page-title-updated', (event) => {
            event.preventDefault(); // Prevenir el cambio del título
        });
    }
});