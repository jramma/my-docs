---
title: Firmar PDFs en Linux
description: Firmar pdfs gratis con DNIe
lastUpdated: 2026-11-25
---

# Firmar PDFs en Linux

**Firmar PDFs gratis con DNIe** — la alternativa libre a Adobe Acrobat (que, por cierto, existe desde antes que Adobe, aunque la mayoría de la gente siga usando el de siempre).

## Requisitos

- **AutoFirma** (paquete `autofirma`).
- **pcsc_scan** (paquetes `pcsc-tools`, `pcsclite` y `ccid`).
- La **contraseña del DNIe** que te entregan al expedirlo. Si la has perdido, puedes renovarla presencialmente en las máquinas de comisaría **sin cita previa**.

## Pasos

1. **Desactiva JMulticard** en AutoFirma: `Herramientas → Preferencias`.
   > ⚠️ **AutoFirma da problemas en Linux**: JMulticard entra en conflicto con los paquetes anteriores (`pcsc-tools`, `pcsclite`, `ccid`). Desactivarlo es imprescindible para que el lector funcione.

2. **Ejecuta `pcsc_scan`** en una terminal.

3. **Comprueba la detección del DNIe**:
   - Si `pcsc_scan` muestra `Unresponsive card`, **reinserta el DNIe** o **cambia su orientación** hasta que aparezca `DNI electronico`.
   - Cuando lo veas, ya puedes firmar con AutoFirma.

---

## Nota sobre la visualización

Para ver los PDFs puedes usar **Firefox** o cualquier lector de PDFs, como el lector de GNOME si usas ese entorno de escritorio.