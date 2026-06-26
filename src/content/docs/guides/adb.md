---
title: ADB 
description: The android Debug Bridge for Android Devices
lastUpdated: 2026-06-26
---

The android Debug Bridge for Android Devices

## 🔌 CONFIGURACIÓN INICIAL

### Habilitar Depuración USB
1. Ve a **Ajustes → Acerca del teléfono**
2. Toca 7 veces sobre **Número de compilación** hasta que aparezca *"Ya eres desarrollador"*
3. Ve a **Ajustes → Sistema → Opciones de desarrollador**
4. Activa **Depuración USB** y **Depuración inalámbrica** (si está disponible)

### Comandos Básicos
```bash
adb devices                    # Lista dispositivos conectados
adb devices -l                 # Lista con más detalles (modelo, producto)
adb version                    # Versión de ADB instalada
adb start-server               # Inicia el servidor ADB
adb kill-server                # Detiene el servidor ADB
adb help                       # Muestra todos los comandos disponibles
```

### Conectar un Dispositivo Específico
```bash
adb -s <serial_number> <command>   # Envía comando a dispositivo específico
adb -d <command>                   # Envía al único dispositivo USB
adb -e <command>                   # Envía al único emulador
```
*Ejemplo: `adb -s emulator-5554 install app.apk`*

---

## 🌐 CONEXIÓN POR WI-FI

### Método Estándar (Primera Vez)
```bash
# 1. Conectar por USB primero
adb tcpip 5555                    # Habilita TCP/IP en puerto 5555

# 2. Desconectar USB y conectar por IP
adb connect <ip_dispositivo>:5555  # Ejemplo: adb connect 192.168.1.100:5555

# 3. Desconectar
adb disconnect <ip_dispositivo>:5555
```

### Wi-Fi 2.0 (Android 11+)
```bash
# 1. En dispositivo: Ajustes → Opciones desarrollador → Depuración inalámbrica
# 2. Seleccionar "Emparejar con código de emparejamiento"
# 3. Anotar IP, puerto y código
adb pair <ip>:<puerto>             # Ejemplo: adb pair 192.168.1.100:39939
# Introducir el código cuando se solicite
# El dispositivo se conectará automáticamente cuando esté en la misma red
```

---

## 📦 GESTIÓN DE APLICACIONES

### Instalación
```bash
adb install <ruta_apk>             # Instalar APK
adb install -r <ruta_apk>          # Reinstalar (conserva datos)
adb install -d <ruta_apk>          # Permite downgrade
adb install -t <ruta_apk>          # Instalar APK de prueba
adb install --abi arm64-v8a <apk>  # Instalar para arquitectura específica
```

### Desinstalación
```bash
adb uninstall <package_name>       # Desinstalar app
adb uninstall -k <package_name>    # Desinstalar pero conservar datos/caché
adb shell pm uninstall <package>   # Desde shell
adb shell pm uninstall -k --user 0 <package>  # Deshabilitar app de sistema (sin root)
```

### Listar Paquetes
```bash
adb shell pm list packages         # Todos los paquetes
adb shell pm list packages -3      # Solo apps de terceros
adb shell pm list packages -s      # Solo apps de sistema
adb shell pm list packages | grep <nombre>  # Buscar paquete específico
adb shell pm path <package>        # Ruta del APK en el dispositivo
```

### Limpiar Datos
```bash
adb shell pm clear <package>       # Borra datos y caché de la app
adb shell am force-stop <package>  # Forzar detención de la app
```

---

## 📂 OPERACIONES CON ARCHIVOS

### Transferir Archivos
```bash
adb push <local> <remoto>          # Copiar archivo al dispositivo
adb push -p <local> <remoto>       # Copiar con barra de progreso
adb pull <remoto> <local>          # Copiar archivo desde el dispositivo
adb pull /sdcard/DCIM/ ./fotos/    # Copiar carpeta completa
```

### Comandos de Shell para Archivos
```bash
adb shell ls /sdcard/              # Listar archivos
adb shell mkdir /sdcard/nueva_carpeta  # Crear directorio
adb shell rm /sdcard/archivo.txt   # Eliminar archivo
adb shell rm -r /sdcard/carpeta    # Eliminar directorio
adb shell mv /origen /destino      # Mover/Renombrar
adb shell cp /origen /destino      # Copiar
adb shell find /sdcard -name "*.jpg"  # Buscar archivos
adb shell du -sh /sdcard/DCIM      # Tamaño de carpeta
```

---

## 🖥️ CAPTURAS DE PANTALLA Y GRABACIÓN

### Capturas
```bash
# Capturar y guardar en el dispositivo
adb shell screencap -p /sdcard/captura.png

# Capturar y descargar directamente al PC (más rápido)
adb exec-out screencap -p > captura.png

# Descargar después de capturar
adb shell screencap -p /sdcard/captura.png && adb pull /sdcard/captura.png
```

### Grabación de Pantalla
```bash
adb shell screenrecord /sdcard/video.mp4           # Grabar hasta Ctrl+C
adb shell screenrecord --time-limit 30 /sdcard/v.mp4  # Límite de 30 segundos
adb shell screenrecord --size 720x1280 /sdcard/v.mp4  # Resolución personalizada
adb shell screenrecord --bit-rate 4000000 /sdcard/v.mp4  # Calidad
```

---

## 🎮 CONTROL DE PANTALLA Y ENTRADA

### Toques y Gestos
```bash
adb shell input tap <x> <y>        # Tocar en coordenadas (ej: 500 1000)
adb shell input swipe <x1> <y1> <x2> <y2>  # Deslizar
adb shell input swipe <x1> <y1> <x2> <y2> <duración_ms>  # Deslizar con duración
adb shell input text "texto"       # Escribir texto (escapar espacios con \)
```

### Eventos de Teclas (Key Events)
```bash
adb shell input keyevent 26        # Encender/Apagar pantalla
adb shell input keyevent 3         # Botón Inicio
adb shell input keyevent 4         # Botón Atrás
adb shell input keyevent 24        # Subir volumen
adb shell input keyevent 25        # Bajar volumen
adb shell input keyevent 82        # Menú
adb shell input keyevent 187       # Aplicaciones recientes
adb shell input keyevent KEYCODE_CAMERA  # También se puede usar el nombre
```

---

## 📊 INFORMACIÓN DEL DISPOSITIVO

### Propiedades del Sistema
```bash
adb shell getprop                   # Todas las propiedades
adb shell getprop ro.product.model  # Modelo del dispositivo
adb shell getprop ro.build.version.release  # Versión de Android
adb shell getprop ro.build.version.sdk  # Nivel de API
adb shell getprop ro.serialno       # Número de serie
adb shell getprop ro.product.cpu.abi  # Arquitectura del procesador
adb shell getprop persist.sys.locale  # Idioma/configuración regional
```

### Pantalla y Resolución
```bash
adb shell wm size                   # Resolución actual
adb shell wm density                # Densidad de píxeles (DPI)
adb shell wm size 1080x1920         # Cambiar resolución (requiere reinicio)
adb shell wm size reset             # Restaurar resolución original
adb shell wm density 420            # Cambiar DPI
adb shell wm density reset          # Restaurar DPI
```

### Memoria y Almacenamiento
```bash
adb shell cat /proc/meminfo | head -5   # Información de RAM
adb shell df -h /data               # Espacio de almacenamiento
adb shell dumpsys meminfo <package> # Uso de memoria de una app
adb shell top -n 1 | head -20       # Procesos principales
adb shell ps -A | grep <nombre>     # Buscar proceso
```

---

## 🔋 BATERÍA

```bash
adb shell dumpsys battery           # Estado completo de la batería
adb shell dumpsys battery set level <n>  # Simular nivel (0-100)
adb shell dumpsys battery set status <n>  # 1=desconocido, 2=cargando, 3=descargando, 4=no cargando, 5=completo
adb shell dumpsys battery set ac 1  # Simular cargador AC conectado
adb shell dumpsys battery set ac 0  # Simular cargador desconectado
adb shell dumpsys battery set usb 1 # Simular USB conectado
adb shell dumpsys battery reset     # Restaurar estado real de la batería
```

---

## 🔍 LOGS Y DEPURACIÓN

### Logcat
```bash
adb logcat                         # Mostrar logs en tiempo real
adb logcat -c                      # Limpiar logs
adb logcat -d > logs.txt           # Guardar logs a archivo
adb logcat *:E                     # Solo errores (E=Error, W=Warning, I=Info, D=Debug, V=Verbose)
adb logcat -s <tag>                # Filtrar por tag
adb logcat --pid=<pid>             # Logs de un proceso específico
adb logcat -G 16M                  # Aumentar tamaño del buffer
```

### Dumpsys (Información Detallada)
```bash
adb shell dumpsys                  # Todo el estado del sistema
adb shell dumpsys activity         # Estado del Activity Manager
adb shell dumpsys activity activities | grep mResumedActivity  # Actividad en primer plano
adb shell dumpsys package <package>  # Información detallada de un paquete
adb shell dumpsys wifi             # Información de Wi-Fi
adb shell dumpsys battery          # Información de batería

# Informe completo de errores
adb bugreport                      # Genera informe completo (puede tardar)
```

---

## 🔧 CONFIGURACIÓN DEL SISTEMA

### Settings (Ajustes)
```bash
# Ver/Modificar ajustes del sistema
adb shell settings list system     # Listar ajustes del sistema
adb shell settings list global     # Listar ajustes globales
adb shell settings list secure     # Listar ajustes seguros

# Obtener un valor
adb shell settings get system <clave>

# Cambiar un valor
adb shell settings put system <clave> <valor>
```

### Ejemplos Útiles
```bash
adb shell settings put system screen_brightness 128  # Brillo (0-255)
adb shell settings put system screen_brightness_mode 0  # Brillo manual (0) / automático (1)
adb shell settings put global airplane_mode_on 1     # Modo avión ON
adb shell settings put global wifi_on 0              # Desactivar Wi-Fi
adb shell settings put system font_scale 0.85        # Tamaño de fuente
adb shell settings put global development_settings_enabled 1  # Activar opciones desarrollador
adb shell settings put secure location_mode 3        # Alta precisión GPS
```

---

## 🌐 RED Y CONECTIVIDAD

### Wi-Fi, Datos, Bluetooth
```bash
adb shell svc wifi enable          # Activar Wi-Fi
adb shell svc wifi disable         # Desactivar Wi-Fi
adb shell svc data enable          # Activar datos móviles
adb shell svc data disable         # Desactivar datos móviles
adb shell svc bluetooth enable     # Activar Bluetooth
adb shell svc bluetooth disable    # Desactivar Bluetooth
adb shell cmd connectivity airplane-mode enable   # Modo avión ON
adb shell cmd connectivity airplane-mode disable  # Modo avión OFF
```

### Redirección de Puertos
```bash
adb forward tcp:<local> tcp:<remoto>  # Reenviar puerto del host al dispositivo
adb forward tcp:8080 tcp:8080         # Ejemplo: acceder a servicio local en dispositivo
adb reverse tcp:<remoto> tcp:<local>  # Reenviar puerto del dispositivo al host
```

---

## 🚀 COMANDOS AVANZADOS

### Activity Manager (am)
```bash
adb shell am start -n <package>/<activity>  # Iniciar actividad específica
adb shell am start -a android.intent.action.VIEW -d <url>  # Abrir URL
adb shell am start com.android.settings     # Abrir Settings (actividad principal)
adb shell am start -n com.android.settings/.Settings$WifiSettings2Activity  # Abrir Wi-Fi
adb shell am force-stop <package>           # Forzar detención
adb shell am kill <package>                 # Matar proceso en segundo plano
adb shell am broadcast -a <intent>          # Enviar broadcast
```

### Package Manager (pm)
```bash
adb shell pm list permissions -g -r  # Listar permisos
adb shell pm grant <package> <permiso>  # Conceder permiso
adb shell pm revoke <package> <permiso>  # Revocar permiso
adb shell pm disable-user <package>  # Deshabilitar app de usuario
adb shell pm enable <package>        # Habilitar app
adb shell cmd package install-existing <package>  # Rehabilitar app de sistema deshabilitada
```

---

## 🔑 ROOT Y COMANDOS AVANZADOS

⚠️ Requieren dispositivo rooteado o bootloader desbloqueado

```bash
adb root                          # Reiniciar adbd con permisos root
adb remount                       # Remontar sistema como escriturable
adb shell su                      # Cambiar a superusuario (desde shell)
adb shell reboot                  # Reiniciar dispositivo
adb reboot recovery               # Reiniciar en modo recovery
adb reboot bootloader             # Reiniciar en modo bootloader (fastboot)
adb reboot edl                    # Reiniciar en modo EDL (Qualcomm)
```

---

## 🔄 FASTBOOT (Bootloader)

```bash
# Primero reiniciar en bootloader
adb reboot bootloader

# Comandos fastboot
fastboot devices                  # Listar dispositivos en fastboot
fastboot oem unlock               # Desbloquear bootloader (borra datos)
fastboot flashing unlock          # Método más nuevo
fastboot flash recovery twrp.img  # Flashear recovery
fastboot flash boot boot.img      # Flashear boot
fastboot boot twrp.img            # Arrancar temporalmente (sin flashear)
fastboot erase userdata           # Borrar datos de usuario
fastboot erase cache              # Borrar caché
fastboot reboot                   # Reiniciar
fastboot reboot recovery          # Reiniciar a recovery
fastboot getvar all               # Mostrar todas las variables
fastboot getvar current-slot      # Mostrar slot A/B activo
```

---

## 🧰 COMANDOS ÚTILES ADICIONALES

### One-Liners Útiles
```bash
# Extraer APK de un paquete instalado
adb pull $(adb shell pm path <package> | cut -d: -f2) ./app.apk

# Listar todas las apps con nombres
adb shell pm list packages -f | sed "s/.*=//" | sort

# Buscar archivos grandes en /sdcard
adb shell find /sdcard -size +100M -exec ls -lh {} \;

# Obtener la actividad en primer plano
adb shell "dumpsys activity activities | grep mResumedActivity | cut -d ' ' -f 8"

# Ver logs filtrados por una app específica
adb logcat --pid=$(adb shell pidof -s <package>)
```

### Emulador
```bash
adb emu geo fix <longitud> <latitud>  # Cambiar ubicación GPS (emulador)
adb emu kill                          # Apagar emulador
```

---

## 📚 REFERENCIA RÁPIDA DE KEYEVENTS

| Código | Tecla | Código | Tecla |
|--------|-------|--------|-------|
| 3 | Home | 4 | Back |
| 26 | Power | 24 | Volumen + |
| 25 | Volumen - | 82 | Menú |
| 187 | Recientes | 66 | Enter |
| 67 | Delete | 111 | Escape |
| 122 | Move home | 123 | Move end |
| 20 | Tecla hacia arriba | 21 | Tecla izquierda |
| 22 | Tecla derecha | 19 | Tecla arriba |

---

**💡 PRO TIP:** Guarda esta cheatsheet para referencia rápida:
```bash
# Crear archivo con este contenido
nano ~/adb_cheatsheet.md
```