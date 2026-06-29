---
title: Compresión en Linux
description: Guía práctica para comprimir carpetas y moverlas a un USB desde terminal. Métodos habituales y ejemplos.
lastUpdated: 2026-06-29
---

Para comprimir archivos y carpetas en Linux desde terminal, los métodos más habituales son `tar` (con o sin compresión) y `zip`. Aquí te explico cómo comprimir una carpeta, mover el archivo comprimido a un USB y luego descomprimirlo si es necesario.

> NOTA: si comprimes vídeos o música perderás calidad.

---

## 1. Comprimir con tar (el método más común en Linux)

`tar` crea un archivo "empaquetado" (.tar) y opcionalmente lo comprime con gzip (.tar.gz) o xz (.tar.xz).

### Comprimir carpeta en .tar.gz (más común y rápido)

```bash
tar -czvf nombre_comprimido.tar.gz carpeta_a_comprimir/
```

**Explicación de opciones:**
- `-c` → crear archivo
- `-z` → comprimir con gzip
- `-v` → verbose (muestra progreso)
- `-f` → especificar nombre del archivo

### Comprimir carpeta en .tar.xz (mejor compresión, más lento)

```bash
tar -cJvf nombre_comprimido.tar.xz carpeta_a_comprimir/
```

- `-J` → comprimir con xz

### Comprimir varios archivos o carpetas

```bash
tar -czvf backup.tar.gz carpeta1/ carpeta2/ archivo.txt
```

---

## 2. Comprimir con zip (compatible con Windows)

```bash
zip -r nombre_comprimido.zip carpeta_a_comprimir/
```

- `-r` → recursivo (incluye subcarpetas)

Si no tienes `zip` instalado:
```bash
# En Arch/Manjaro
sudo pacman -S zip unzip

# En Debian/Ubuntu
sudo apt install zip unzip
```

---

## 3. Mover el comprimido a un USB

### Paso 1: Identificar el USB

```bash
lsblk
# o
fdisk -l
```

Busca tu USB (ej: `/dev/sdb1`) y el punto de montaje si ya está montado (ej: `/run/media/usuario/USB`).

### Paso 2: Montar el USB (si no está montado automáticamente)

```bash
# Crear punto de montaje
sudo mkdir -p /mnt/usb

# Montar (reemplaza sdb1 con tu dispositivo)
sudo mount /dev/sdb1 /mnt/usb
```

### Paso 3: Copiar el archivo comprimido al USB

```bash
cp nombre_comprimido.tar.gz /mnt/usb/
# o si prefieres moverlo (borra el original)
mv nombre_comprimido.tar.gz /mnt/usb/
```

### Paso 4: Verificar que se copió

```bash
ls -lh /mnt/usb/
```

### Paso 5: Desmontar el USB antes de extraerlo

```bash
sudo umount /mnt/usb
# o si está montado automáticamente
sudo umount /run/media/usuario/USB
```

---

## 4. Ejemplo completo paso a paso

```bash
# 1. Ver contenido de la carpeta a comprimir
ls -la documentos/

# 2. Comprimir
tar -czvf documentos_backup.tar.gz documentos/

# 3. Ver tamaño
ls -lh documentos_backup.tar.gz

# 4. Identificar USB
lsblk

# 5. Montar USB (asumiendo que es /dev/sdb1)
sudo mount /dev/sdb1 /mnt/usb

# 6. Copiar al USB
cp documentos_backup.tar.gz /mnt/usb/

# 7. Verificar
ls -lh /mnt/usb/

# 8. Desmontar
sudo umount /mnt/usb
```

---

## 5. Descomprimir (cuando necesites recuperar los archivos)

### Para .tar.gz

```bash
tar -xzvf nombre_comprimido.tar.gz
```

### Para .tar.xz

```bash
tar -xJvf nombre_comprimido.tar.xz
```

### Para .zip

```bash
unzip nombre_comprimido.zip
```

### Descomprimir en una carpeta específica

```bash
tar -xzvf nombre_comprimido.tar.gz -C /ruta/destino/
unzip nombre_comprimido.zip -d /ruta/destino/
```

---

## 6. Comandos útiles adicionales

### Ver contenido de un comprimido sin descomprimir

```bash
# Para .tar.gz
tar -tzvf nombre_comprimido.tar.gz

# Para .zip
unzip -l nombre_comprimido.zip
```

### Comprimir excluyendo archivos/carpetas

```bash
tar -czvf backup.tar.gz carpeta/ --exclude="carpeta/cache"
```

### Comprimir con contraseña (solo zip)

```bash
zip -er nombre_comprimido.zip carpeta/
# Te pedirá la contraseña
```

---

## 7. Notas importantes

- **Espacio en USB**: Verifica que tenga suficiente espacio libre (`df -h /mnt/usb`)
- **Sistema de archivos FAT32**: Si el USB está en FAT32, los archivos no pueden ser mayores a 4GB. Usa `split` para dividir:
  ```bash
  tar -czvf - carpeta/ | split -b 3G - backup.tar.gz.part
  ```
  Para unir después:
  ```bash
  cat backup.tar.gz.part* > backup.tar.gz
  ```
- **Permisos**: Si usas `sudo` para montar, los archivos copiados serán de root. Para evitarlo, monta con opción `uid`:
  ```bash
  sudo mount -o uid=$(id -u),gid=$(id -g) /dev/sdb1 /mnt/usb
  ```

---

## 8. Resumen rápido

| Tarea | Comando |
|-------|---------|
| Comprimir carpeta en .tar.gz | `tar -czvf archivo.tar.gz carpeta/` |
| Comprimir carpeta en .zip | `zip -r archivo.zip carpeta/` |
| Ver discos/USBs | `lsblk` |
| Montar USB | `sudo mount /dev/sdb1 /mnt/usb` |
| Copiar al USB | `cp archivo.tar.gz /mnt/usb/` |
| Desmontar USB | `sudo umount /mnt/usb` |
| Descomprimir .tar.gz | `tar -xzvf archivo.tar.gz` |
| Descomprimir .zip | `unzip archivo.zip` |