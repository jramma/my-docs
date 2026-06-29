---
title: Guía de Diagnóstico de Congelamientos en Arch Linux
description: Procedimiento paso a paso para identificar la causa de un sistema congelado usando journalctl, dmesg y otras herramientas.
lastUpdated: 2026-06-29
---

## 1. Identificar el arranque que falló

```bash
# Listar todos los arranques disponibles
sudo journalctl --list-boots
```

- `-1` = arranque anterior al actual
- `-2` = penúltimo, etc.
- `0` = arranque actual

---

## 2. Ver logs del arranque anterior

```bash
# Solo errores graves
sudo journalctl -b -1 -p 3 -xe

# Todos los logs (sin filtro)
sudo journalctl -b -1 -xe
```

Cambiar `-1` por `-2`, `-3`, etc. según el arranque a revisar.

---

## 3. Filtros por palabra clave

### Fallo de hardware genérico
```bash
sudo journalctl -b -1 | grep -i "hardware\|fault\|error\|fail"
```

### Problemas de memoria RAM / OOM Killer
```bash
sudo journalctl -b -1 | grep -i "oom\|kill\|out of memory\|memory pressure"
```

### Fallo de GPU / gráficos
```bash
sudo journalctl -b -1 | grep -i "nvidia\|amdgpu\|i915\|nouveau\|gpu\|drm\|xorg\|wayland"
```

### Problemas de disco / I/O
```bash
sudo journalctl -b -1 | grep -i "i/o error\|ata\|sd.\|nvme\|buffer I/O\|offline device"
```

### Problemas USB / controladores
```bash
sudo journalctl -b -1 | grep -i "usb\|xhci\|ehci\|ohci"
```

### Fallos del kernel (pánico, BUG, Oops)
```bash
sudo journalctl -b -1 | grep -i "panic\|bug\|oops\|kernel BUG"
```

### Problemas con servicios o aplicaciones
```bash
sudo journalctl -b -1 | grep -i "failed\|segfault\|core dumped"
```

### Temperaturas (sobrecalentamiento)
```bash
# Ver logs de temperatura
sudo journalctl -b -1 | grep -i "temp\|thermal\|throttle"

# Ver temperaturas actuales
sensors
```

---

## 4. Ver el momento exacto del reinicio

```bash
sudo journalctl -b -1 | tail -n 100
```

Buscar la línea `-- Reboot --`. **Todo lo que está justo encima** ocurrió antes del cuelgue.

---

## 5. Comprobar el sistema de archivos

```bash
# Estado de los discos
lsblk -f

# Verificar si hay sistemas de archivos montados como readonly
mount | grep "ro,"

# Verificar integridad del sistema de archivos raíz (desmontado o desde live USB)
sudo fsck -f /dev/sdaX  # CAMBIAR sdaX por tu partición raíz
```

---

## 6. Revisar logs del kernel actual (dmesg)

```bash
dmesg | grep -i "error\|fail\|warn\|bug\|panic"
```

---

## 7. Monitorización en tiempo real (fallos intermitentes)

```bash
# Dejar corriendo en una terminal
sudo journalctl -f -p 4
```
- `-p 4` = warnings y errores
- Cuando se congele, se verán los últimos mensajes antes del crash

---

## 8. Información del sistema para buscar ayuda

```bash
# Kernel y arquitectura
uname -a

# Distribución
cat /etc/os-release

# Hardware
lspci -v | grep -i "vga\|usb\|ata"
lsusb
sudo dmidecode -t memory

# Carga de memoria y swap
free -h

# Espacio en disco
df -h
```

---

## 9. Si no hay logs (cuelgue total sin escritura)

Revisar manualmente:

- **Temperaturas** (`sensors`)
- **Fuente de alimentación** (¿tiene suficiente potencia?)
- **Discos mecánicos** (ruidos, SMART)
- **Memoria RAM** (prueba con `memtest86+` desde el arranque)
- **Condensadores de la placa base** (hinchados)

---

## 10. Plantilla de diagnóstico rápido

```bash
# 1. Últimos errores del arranque anterior
sudo journalctl -b -1 -p 3 -xe | tail -n 50

# 2. Buscar problemas de GPU
sudo journalctl -b -1 | grep -i "gpu\|nvidia\|amdgpu\|i915"

# 3. Buscar problemas de disco
sudo journalctl -b -1 | grep -i "i/o error\|offline"

# 4. Buscar OOM
sudo journalctl -b -1 | grep -i "oom\|kill"

# 5. Buscar pánico del kernel
sudo journalctl -b -1 | grep -i "panic\|kernel BUG"

# 6. Ver el final del log (antes del reboot)
sudo journalctl -b -1 | tail -n 50
```

---

## Errores comunes y causas típicas

| Síntoma | Posible causa |
|---------|---------------|
| GPU errors en logs | Driver NVIDIA/AMD problemático, sobrecalentamiento |
| I/O errors + offline device | Disco USB defectuoso, cable o puerto dañado |
| OOM Killer en logs | Falta de RAM o swap mal configurada |
| kernel BUG / panic | Bug en kernel, hardware incompatible |
| xHCI dead / USB errors | Puerto USB dañado, controlador defectuoso |
| Temperaturas altas | Ventiladores sucios, pasta térmica seca |
| Sin errores en logs | Fuente de alimentación, placa base, RAM defectuosa |

---

## Guardar logs para análisis externo

```bash
# Guardar el log completo del arranque anterior
sudo journalctl -b -1 > logs_fallo.txt

# Comprimir para compartir
gzip logs_fallo.txt
```

---

## Consejos finales

- **Actualizar el sistema** puede solucionar bugs: `sudo pacman -Syu`
- **Probar con otro kernel** (LTS) si el problema es recurrente:
  ```bash
  sudo pacman -S linux-lts
  ```
- Los fallos más comunes en Arch suelen ser por: GPU, USB defectuoso, falta de RAM, discos NVMe o kernel reciente con regresiones.

---

> **Si no encuentras la causa**, publica la salida de `sudo journalctl -b -1 -p 3 -xe` y `sudo journalctl -b -1 | tail -n 100` en foros como Arch Linux Forums, r/archlinux o Unix Stack Exchange.