[Setup]
AppName=Lethal Company - Launcher by StormGamesStudios
AppVersion=1.0.3
DefaultDirName={userappdata}\StormGamesStudios\NewGameDir\LethalCompany_Launcher
DefaultGroupName=StormGamesStudios
OutputDir=C:\Users\melio\Desktop\Lethal Company - Launcher\output
OutputBaseFilename=LethalCompany_Launcher_Installer
Compression=lzma
SolidCompression=yes
AppCopyright=Copyright © 2025 StormGamesStudios. All rights reserved.
VersionInfoCompany=StormGamesStudios
AppPublisher=StormGamesStudios
SetupIconFile=icono-lethal.ico
VersionInfoVersion=1.0.3.0
DisableDirPage=yes
DisableProgramGroupPage=yes

[Files]
; Archivos del lanzador
Source: "C:\Users\melio\Desktop\Lethal Company - Launcher\publish\Lethal Company - Launcher.deps.json"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\melio\Desktop\Lethal Company - Launcher\publish\Lethal Company - Launcher.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\melio\Desktop\Lethal Company - Launcher\publish\Lethal Company - Launcher.dll.config"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\melio\Desktop\Lethal Company - Launcher\publish\Lethal Company - Launcher.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\melio\Desktop\Lethal Company - Launcher\publish\Lethal Company - Launcher.pdb"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\melio\Desktop\Lethal Company - Launcher\publish\Lethal Company - Launcher.runtimeconfig.json"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\melio\Desktop\Lethal Company - Launcher\images\icono-lethal.png"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\melio\Desktop\Lethal Company - Launcher\images\icono-lethal.ico"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Users\melio\Desktop\Lethal Company - Launcher\images\fondo-lethal.jpg"; DestDir: "{app}"; Flags: ignoreversion

; Agregar el instalador de .NET Core 3.1.32
Source: "C:\Users\melio\Desktop\Lethal Company - Launcher\windowsdesktop-runtime-3.1.32-win-x64.exe"; DestDir: "{tmp}"; Flags: ignoreversion

[Icons]
; Acceso directo en el escritorio
Name: "{userdesktop}\Lethal Company - Launcher"; Filename: "{app}\Lethal Company - Launcher.exe"; IconFilename: "{app}\icono-lethal.ico"

; Acceso directo en el menú de inicio dentro de la carpeta StormLauncher_HMCL-Edition
Name: "{commonprograms}\StormGamesStudios\Lethal Company - Launcher"; Filename: "{app}\Lethal Company - Launcher.exe"; IconFilename: "{app}\icono-lethal.ico"
Name: "{commonprograms}\StormGamesStudios\Desinstalar Lethal Company - Launcher"; Filename: "{uninstallexe}"; IconFilename: "{app}\icono-lethal.ico"

[Registry]
; Guardar ruta de instalación para poder desinstalar
Root: HKCU; Subkey: "Software\Lethal Company - Launcher"; ValueType: string; ValueName: "Install_Dir"; ValueData: "{app}"

[UninstallDelete]
; Eliminar carpeta del appdata y acceso directo
Type: filesandordirs; Name: "{app}"

[Run]
; Ejecutar el lanzador después de la instalación
Filename: "{app}\Lethal Company - Launcher.exe"; Description: "Ejecutar Lethal Company - Launcher"; Flags: nowait postinstall skipifsilent

; Ejecutar el instalador de .NET Core 3.1.32
Filename: "{tmp}\windowsdesktop-runtime-3.1.32-win-x64.exe"; Parameters: "/quiet /norestart"; Flags: waituntilterminated skipifsilent
