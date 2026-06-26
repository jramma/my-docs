---
title: Storage
description: Gestión de almacenamiento en Linux. Discos, particiones, montaje, sistemas de archivos y copias de seguridad.
lastUpdated: 2026-06-26
---

# Almacenamiento en Linux

## Ver discos y particiones

```bash
lsblk                    # árbol de discos y particiones
lsblk -f                 # incluye sistema de archivos y UUID
fdisk -l                 # detalle completo (requiere root)
parted -l                # alternativa a fdisk
```

Ejemplo de salida de `lsblk`:

```text
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0 931.5G  0 disk
├─sda1        8:1    0   512M  0 part /boot/efi
└─sda2        8:2    0   931G  0 part /media/user/MEMORYSSD
nvme0n1     259:0    0 476.9G  0 disk
├─nvme0n1p1 259:1    0   512M  0 part /boot
└─nvme0n1p2 259:2    0 476.4G  0 part /
```

---

## Espacio en disco

```bash
df -h                    # espacio de todas las particiones montadas
df -h /home              # espacio de una partición concreta
du -sh ~/Documentos      # tamaño de una carpeta
du -sh ~/Documentos/*    # tamaño de cada elemento dentro de la carpeta
du -ah --max-depth=1 ~   # tamaño de todo en el home, un nivel de profundidad
```

Encontrar las carpetas más pesadas:

```bash
du -h ~ | sort -rh | head -20
```

---

## Montar y desmontar

### Montar un USB o disco externo

```bash
lsblk                                          # identificar el dispositivo (ej: sdb1)
mount /dev/sdb1 /mnt/usb                       # montar en /mnt/usb
mount -o uid=1000,gid=1000 /dev/sdb1 /mnt/usb # montar con permisos de usuario (FAT/exFAT)
```

### Desmontar

```bash
umount /mnt/usb
umount /dev/sdb1          # también funciona con el dispositivo
```

> Si da "target is busy": `lsof +D /mnt/usb` para ver qué proceso lo usa.

### Montaje automático al arrancar (`/etc/fstab`)

```bash
# Ver UUID del dispositivo
blkid /dev/sdb1

# Entrada en /etc/fstab
UUID=XXXX-XXXX  /media/user/USB  exfat  defaults,uid=1000,gid=1000  0  0
```

---

## Sistemas de archivos

| FS | Uso típico |
| -- | ---------- |
| ext4 | Particiones Linux (disco interno) |
| xfs | Servidores, archivos grandes |
| btrfs | Snapshots, RAID software |
| exFAT | USBs compatibles con Windows/Mac |
| FAT32 | USBs legacy, límite 4 GB por archivo |
| NTFS | Discos Windows en Linux (lectura/escritura con `ntfs-3g`) |

### Formatear una partición

```bash
mkfs.ext4 /dev/sdb1          # ext4
mkfs.exfat /dev/sdb1         # exFAT (necesita exfatprogs)
mkfs.ntfs /dev/sdb1          # NTFS
```

---

## Información del disco (salud y modelo)

```bash
smartctl -a /dev/sda          # estado S.M.A.R.T. completo (paquete smartmontools)
smartctl -H /dev/sda          # solo el resultado de salud
hdparm -I /dev/sda            # información del dispositivo
```

---

## Particionado

### Con fdisk (MBR y GPT)

```bash
fdisk /dev/sdb
# comandos interactivos:
# n → nueva partición
# d → borrar partición
# p → listar particiones
# w → guardar cambios
# q → salir sin guardar
```

### Con parted (GPT recomendado)

```bash
parted /dev/sdb
(parted) mklabel gpt
(parted) mkpart primary ext4 0% 100%
(parted) print
(parted) quit
```

---

## LVM (Logical Volume Manager)

Permite redimensionar volúmenes sin reiniciar.

```bash
# Ver estructura LVM
pvs    # Physical Volumes
vgs    # Volume Groups
lvs    # Logical Volumes

# Extender un volumen lógico y su sistema de archivos
lvextend -L +10G /dev/vg0/home
resize2fs /dev/vg0/home        # ext4
xfs_growfs /home               # xfs
```

---

## Copias de seguridad con rsync

Backup incremental de Documentos a un USB:

```bash
rsync -avh --progress --delete ~/Documentos/ /media/user/USB/Documentos/
```

Solo archivos `.md`:

```bash
rsync -avh --progress --delete \
  --include="*/" \
  --include="*.md" \
  --exclude="*" \
  ~/Documentos/ /media/user/USB/Documentos/
```

Ver [utils/rsync.md](../🐧%20Linux/utils/rsync.md) para más detalles.

---

## Archivos de imagen de disco

```bash
# Crear imagen de un disco/USB
dd if=/dev/sdb of=~/backup.img bs=4M status=progress

# Restaurar imagen a un disco
dd if=~/backup.img of=/dev/sdb bs=4M status=progress

# Clonar disco directamente
dd if=/dev/sda of=/dev/sdb bs=4M status=progress
```

> `dd` es destructivo: verifica bien el origen (`if=`) y el destino (`of=`) antes de ejecutar.

---

## RAID por software con mdadm

```bash
# Crear RAID 1 (espejo) con dos discos
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc

# Ver estado del RAID
cat /proc/mdstat
mdadm --detail /dev/md0
```