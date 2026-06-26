---
title: Debian
description: Guía esencial de Debian. Instalación, comandos y configuración básica.
lastUpdated: 2026-06-26
---

## Instalación

### Preparación
```bash
# Verificar modo UEFI
ls /sys/firmware/efi/efivars

# Conectar WiFi (si no tiene interfaz gráfica)
nmcli device wifi list
nmcli device wifi connect "SSID" password "clave"
```

### Particionado (mínimo recomendado)
```bash
# Ver discos
lsblk

# Particionar con fdisk o parted
# Ejemplo: EFI (512M), swap (4G), root (resto)

# Formatear
mkfs.fat -F32 /dev/sda1      # EFI
mkswap /dev/sda2              # swap
mkfs.ext4 /dev/sda3           # root

# Montar
mount /dev/sda3 /mnt
mount --mkdir /dev/sda1 /mnt/boot/efi
swapon /dev/sda2
```

### Instalar sistema base
```bash
debootstrap --arch amd64 stable /mnt http://deb.debian.org/debian/
# O usar el instalador gráfico (recomendado para principiantes)
```

### Configuración básica (si usas debootstrap)
```bash
chroot /mnt /bin/bash

# Zona horaria
ln -sf /usr/share/zoneinfo/Europe/Madrid /etc/localtime

# Localización
echo "es_ES.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
echo "LANG=es_ES.UTF-8" > /etc/locale.conf

# Hostname
echo "mi-debian" > /etc/hostname

# Contraseña root
passwd

# Usuario
adduser usuario
usermod -aG sudo usuario

# Fuentes Debian
echo "deb http://deb.debian.org/debian stable main contrib non-free" > /etc/apt/sources.list

# Bootloader
apt update
apt install grub-efi-amd64
grub-install --target=x86_64-efi --efi-directory=/boot/efi
grub-mkconfig -o /boot/grub/grub.cfg
```

---

## Gestión de paquetes (apt)

### Búsqueda e instalación
```bash
apt update                     # Actualizar lista de paquetes
apt install nombre             # Instalar paquete
apt search palabra             # Buscar paquete
apt show nombre                # Información del paquete
```

### Actualizar sistema
```bash
apt update
apt upgrade                    # Actualizar paquetes
apt full-upgrade               # Actualizar con cambios de dependencias
apt autoremove                 # Eliminar paquetes no necesarios
```

### Eliminar paquetes
```bash
apt remove nombre              # Eliminar (mantiene configs)
apt purge nombre               # Eliminar (elimina configs)
apt autoremove                 # Eliminar dependencias no usadas
```

### Repositorios
```bash
# Añadir repositorio (non-free, contrib)
echo "deb http://deb.debian.org/debian stable main contrib non-free" >> /etc/apt/sources.list
apt update
```

---

## Servicios (systemd)

```bash
systemctl start servicio      # Iniciar
systemctl enable servicio     # Habilitar al arranque
systemctl enable --now servicio  # Habilitar e iniciar
systemctl status servicio     # Ver estado
systemctl stop servicio       # Parar
systemctl restart servicio    # Reiniciar
```

---

## Red

```bash
# NetworkManager
sudo systemctl enable --now NetworkManager
nmcli device wifi list
nmcli device wifi connect "SSID" password "clave"

# Configuración manual (/etc/network/interfaces)
auto enp0s3
iface enp0s3 inet dhcp
```

---

## Configuración gráfica (GNOME recomendado)

```bash
# GNOME
sudo apt install gnome gnome-extra
sudo systemctl enable --now gdm

# KDE Plasma
sudo apt install kde-plasma-desktop
sudo systemctl enable --now sddm

# XFCE (ligero)
sudo apt install xfce4 xfce4-goodies
sudo systemctl enable --now lightdm
```

---

## Comandos útiles

```bash
# Información del sistema
uname -a                     # Kernel
lscpu                        # CPU
free -h                      # RAM
df -h                        # Disco
lsblk                        # Discos y particiones

# Logs
journalctl -xe               # Ver logs del sistema
journalctl -u servicio       # Logs de un servicio

# Buscar archivos
find / -name archivo
grep -r "texto" /ruta
```

---

## Firmware (drivers no libres)

```bash
# Para WiFi/Bluetooth/GPU
sudo apt install firmware-linux firmware-iwlwifi firmware-atheros

# Firmware adicional
sudo apt install firmware-misc-nonfree
```

---

## Resolución de problemas

### Repositorios obsoletos
```bash
# Cambiar a stable o oldstable
sed -i 's/bullseye/stable/g' /etc/apt/sources.list
apt update
```

### Paquete no encontrado
```bash
# Añadir contrib y non-free
echo "deb http://deb.debian.org/debian stable main contrib non-free" >> /etc/apt/sources.list
apt update
```

### Servicio no inicia
```bash
systemctl status servicio     # Ver error
journalctl -xe                # Ver logs detallados
```

---

## Referencias

- [Debian Wiki](https://wiki.debian.org/)
- [Debian Installation Guide](https://www.debian.org/releases/stable/installmanual)
- [Debian Package Management](https://wiki.debian.org/PackageManagement)