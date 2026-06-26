---
title: iwctl
description: Conexión WiFi en Arch Linux desde terminal. Útil cuando la red inalámbrica no funciona.
lastUpdated: 2026-06-26
---

Para conectarte a WiFi desde la terminal de Arch Linux antes de usar `archinstall`, puedes usar `iwctl` (Intel Wireless daemon). Aquí los pasos:

---

## 1. Verificar que el servicio iwd esté activo

```bash
systemctl start iwd
```

---

## 2. Iniciar iwctl (interfaz interactiva)

```bash
iwctl
```

## 3. Dentro de iwctl:

```bash
# Listar dispositivos de red
device list

# Escanear redes disponibles (reemplaza wlan0 por tu dispositivo)
station wlan0 scan
station wlan0 get-networks

# Conectarte a una red
station wlan0 connect "NOMBRE_DE_RED"

# Te pedirá la contraseña (si tiene)
```

---

## Método alternativo rápido (sin interfaz interactiva)

```bash
# Escanear
iwctl station wlan0 scan
iwctl station wlan0 get-networks

# Conectar
iwctl station wlan0 connect "SSID" --passphrase="contraseña"
```

---

## Verificar conexión

```bash
ping -c 3 google.com
ip a show wlan0
```

---

## Si no tienes iwd instalado (en el ISO de Arch viene incluido)

También puedes usar **nmcli** (NetworkManager):

```bash
nmcli device wifi list
nmcli device wifi connect "SSID" password "contraseña"
```

---

## Notas importantes

- Reemplaza `wlan0` por tu interfaz WiFi (puedes verla con `ip link`)
- El ISO de Arch Linux actual incluye `iwd` por defecto
- Después de conectarte, ya puedes ejecutar `archinstall` con acceso a internet