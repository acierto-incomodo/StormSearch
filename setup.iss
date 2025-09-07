[Setup]
AppName=StormSearch Installer
AppVersion=1.2.0
DefaultDirName={userappdata}\StormGamesStudios\StormPack\StormSearch
DefaultGroupName=StormGamesStudios
OutputDir=C:\Users\mapsp\Documents\GitHub\StormSearch\Output
OutputBaseFilename=StormSearch_Installer
Compression=lzma
SolidCompression=yes
AppCopyright=Copyright © 2025 StormGamesStudios. All rights reserved.
VersionInfoCompany=StormGamesStudios
AppPublisher=StormGamesStudios
SetupIconFile=icono.ico
VersionInfoVersion=1.2.0.0
DisableDirPage=yes
DisableProgramGroupPage=yes

[Files]
; Archivos del lanzador
Source: "C:\Users\mapsp\Documents\GitHub\StormSearch\Export\StormSearch Installer.deps.json"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\mapsp\Documents\GitHub\StormSearch\Export\StormSearch Installer.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\mapsp\Documents\GitHub\StormSearch\Export\StormSearch Installer.dll.config"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\mapsp\Documents\GitHub\StormSearch\Export\StormSearch Installer.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\mapsp\Documents\GitHub\StormSearch\Export\StormSearch Installer.pdb"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\mapsp\Documents\GitHub\StormSearch\Export\StormSearch Installer.runtimeconfig.json"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\mapsp\Documents\GitHub\StormSearch\csharp-game-launcher-master\GameLauncher\images\icono.png"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\mapsp\Documents\GitHub\StormSearch\csharp-game-launcher-master\GameLauncher\images\icono.ico"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\mapsp\Documents\GitHub\StormSearch\csharp-game-launcher-master\GameLauncher\images\fondo.png"; DestDir: "{app}"; Flags: ignoreversion

; Agregar el instalador de .NET Core 3.1.32
Source: "C:\Users\mapsp\Documents\GitHub\StormSearch\windowsdesktop-runtime-3.1.32-win-x64.exe"; DestDir: "{tmp}"; Flags: ignoreversion

[Icons]
; Acceso directo en el escritorio
Name: "{userdesktop}\StormSearch"; Filename: "{app}\StormSearch Installer.exe"; IconFilename: "{app}\icono.ico"

; Acceso directo en el menú de inicio dentro de la carpeta StormSearch_HMCL-Edition
Name: "{commonprograms}\StormGamesStudios\StormSearch"; Filename: "{app}\StormSearch Installer.exe"; IconFilename: "{app}\icono.ico"
Name: "{commonprograms}\StormGamesStudios\Desinstalar StormSearch"; Filename: "{uninstallexe}"; IconFilename: "{app}\icono.ico"

[Registry]
; Guardar ruta de instalación para poder desinstalar
Root: HKCU; Subkey: "Software\StormSearch Installer"; ValueType: string; ValueName: "Install_Dir"; ValueData: "{app}"

[UninstallDelete]
; Eliminar carpeta del appdata y acceso directo
Type: filesandordirs; Name: "{app}"

[UninstallRun]
; Forzar cierre del juego si está abierto antes de desinstalar
Filename: "taskkill"; Parameters: "/IM StormSearch.exe /F"; Flags: runhidden

[Run]
; Ejecutar el lanzador después de la instalación
Filename: "{app}\StormSearch Installer.exe"; Description: "Ejecutar StormSearch Installer"; Flags: nowait postinstall skipifsilent

; Ejecutar el instalador de .NET Core 3.1.32
Filename: "{tmp}\windowsdesktop-runtime-3.1.32-win-x64.exe"; Parameters: "/quiet /norestart"; Flags: waituntilterminated skipifsilent
