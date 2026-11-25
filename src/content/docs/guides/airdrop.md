---
title: LocalSend 
description: Es el "airdrop de linux"
lastUpdated: 2026-11-25
---

# LocalSend

**El "AirDrop de Linux"** — comparte archivos entre dispositivos que estén conectados al **mismo WiFi**, sin cables ni cuentas de por medio.


## Instalación

- **Android** (vía Obtainium): instala `localsend` desde **GitHub** o **F-Droid**.
- **Linux**: el paquete suele llamarse `localsend` (búscalo en el gestor de paquetes de tu distribución).


## Uso

Solo tienes que abrir LocalSend en ambos dispositivos con el **mismo WiFi** y elegir el archivo y el destino. Sencillo y multiplataforma.

**Si tienes un cortafuegos** como `ufw` tendrás que permitir el puerto que tiene `localsend` en ajustes y que puedes modificar para no usar el por defecto. Ya que funciona por conexión htp ctp


## Alternativa: `adb`

Técnicamente se puede hacer lo mismo con **`adb`** desde la terminal, pero **no es recomendable**:

- Puede **comprometer la seguridad** de tu Android.
- Requiere activar la **depuración remota** (y desactivarla después si lo haces).