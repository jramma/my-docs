---
title: Mount ISO on USB
description: Graba ISOs en USB fácilmente.
lastUpdated: 2026-06-26
---

## Métodos rápidos

### 1. dd (terminal)
```bash
# Identificar USB
lsblk

# Grabar ISO (¡cuidado con el dispositivo!)
sudo dd if=archivo.iso of=/dev/sdb bs=4M status=progress
```

### 2. cp (más simple)
```bash
sudo cp archivo.iso /dev/sdb
```

### 3. Balena Etcher (gráfico)
Descargar desde [etcher.balena.io](https://etcher.balena.io/), seleccionar ISO y USB, hacer clic en Flash.

### 4. Ventoy (múltiples ISOs)
```bash
# Descargar e instalar en USB
./Ventoy2Disk.sh -i /dev/sdb

# Copiar ISOs al USB como archivos normales
```

---

## Errores comunes

| Problema | Solución |
|----------|----------|
| Permiso denegado | Usar `sudo` |
| Dispositivo ocupado | `sudo umount /dev/sdb*` |
| No bootea | Desactivar Secure Boot |

---


> Usa **Ventoy** para varias ISOs, **dd** para una ISO simple, **Etcher** si prefieres interfaz gráfica.