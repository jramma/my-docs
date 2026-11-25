---
title: Firmar en Linux
description: Firmar pdfs gratis con DNIe
lastUpdated: 2026-11-25
---

- Necesitas **AutoFirma** (paquete `autofirma`) y **pcsc_scan** ( paquetes `pcsc-tools pcsclite ccid`).
- **AutoFirma da problemas en Linux**: desactiva **JMulticard** en Herramientas → Preferencias. Porque JMulticard entra en conflicto con los paquetes anterirores.
- Ejecuta `pcsc_scan` en terminal.
- Si `pcsc_scan` muestra `Unresponsive card`, reinserta el DNIe / cambia la orientación hasta que aparezca `DNI electronico`.
- Necesitas también la contraseña que te dan cuándo te haces el DNIe, en caso de haberla perdido puedes renovarla presencialmente en unas máquinas que hay en comisaría sin pedir cita previa.

Para ver pdfs puedes usar firefox o cualquier lector de pdfs, como el lector de pdfs de gnome si usas ese entorno de escritorio.