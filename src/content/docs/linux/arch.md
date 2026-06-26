---
title: Arch
description: Guía esencial de Arch Linux. Instalación, comandos y configuración básica.
lastUpdated: 2026-06-26
---

## Instalación

### Preparación
```bash
# Verificar modo UEFI
ls /sys/firmware/efi/efivars

# Conectar WiFi (iwctl)
iwctl station wlan0 connect "SSID"

# Actualizar reloj
timedatectl set-ntp true
```

### Particionado
```bash
# Ver discos
lsblk

# Particionar (ejemplo con fdisk)
fdisk /dev/nvme0n1
# Crear: EFI (512M), swap (4G), root (resto)

# Formatear
mkfs.fat -F32 /dev/nvme0n1p1
mkswap /dev/nvme0n1p2
mkfs.ext4 /dev/nvme0n1p3

# Montar
mount /dev/nvme0n1p3 /mnt
mount --mkdir /dev/nvme0n1p1 /mnt/boot
swapon /dev/nvme0n1p2
```

### Instalar sistema base
```bash
pacstrap -K /mnt base linux linux-firmware vim networkmanager
genfstab -U /mnt >> /mnt/etc/fstab
arch-chroot /mnt
```

### Configuración básica dentro del chroot
```bash
# Zona horaria
ln -sf /usr/share/zoneinfo/Europe/Madrid /etc/localtime
hwclock --systohc

# Localización
echo "es_ES.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
echo "LANG=es_ES.UTF-8" > /etc/locale.conf

# Hostname
echo "mi-arch" > /etc/hostname

# Contraseña root
passwd

# Usuario
useradd -m -G wheel -s /bin/bash usuario
passwd usuario

# Sudo
echo "%wheel ALL=(ALL:ALL) ALL" >> /etc/sudoers

# Bootloader (GRUB)
pacman -S grub efibootmgr
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
grub-mkconfig -o /boot/grub/grub.cfg
```

### Salir y reiniciar
```bash
exit
umount -R /mnt
reboot
```

---

## Gestión de paquetes (pacman)

### Búsqueda e instalación
```bash
pacman -S nombre              # Instalar
pacman -Ss palabra            # Buscar
pacman -Si nombre             # Información
pacman -Q                     # Paquetes instalados
pacman -Qe                    # Paquetes explícitamente instalados
```

### Actualizar sistema
```bash
sudo pacman -Syu              # Actualizar todo
```

### Eliminar paquetes
```bash
sudo pacman -R nombre         # Eliminar
sudo pacman -Rs nombre        # Eliminar + dependencias no usadas
sudo pacman -Rns nombre       # Eliminar + dependencias + configs
```

### Limpiar caché
```bash
sudo pacman -Sc               # Eliminar paquetes viejos en caché
sudo pacman -Scc              # Vaciar caché completo
```

---

## AUR (Arch User Repository)

### Instalar yay (asistente AUR)
```bash
sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### Comandos con yay
```bash
yay -S nombre                 # Instalar (AUR o repo)
yay -Ss palabra               # Buscar (incluye AUR)
yay -Syu                      # Actualizar todo
yay -Rns nombre               # Eliminar
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
systemctl list-units          # Todos los servicios activos
```

---

## Red

```bash
# NetworkManager
sudo systemctl enable --now NetworkManager
nmcli device wifi list       # Ver redes
nmcli device wifi connect "SSID" password "clave"

# iwd (alternativa)
iwctl station wlan0 connect "SSID"
```

---

## Configuración gráfica

### GNOME
```bash
sudo pacman -S gnome
sudo systemctl enable --now gdm
```

### KDE Plasma
```bash
sudo pacman -S plasma
sudo systemctl enable --now sddm
```

### Hyprland (tiling)
```bash
sudo pacman -S hyprland
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

# Archivos
find / -name archivo         # Buscar archivo
grep -r "texto" /ruta        # Buscar texto en archivos
```

---

## Resolución de problemas

### Internet no funciona
```bash
ping 8.8.8.8                 # Test conectividad
systemctl restart NetworkManager
```

### No se actualiza (llaves)
```bash
sudo pacman -Sy archlinux-keyring
sudo pacman -Syu
```

### Error de arranque
```bash
# Chroot desde USB
mount /dev/nvme0n1p3 /mnt
arch-chroot /mnt
# Reinstalar grub o kernel
```

---

## Referencias

- [Arch Wiki](https://wiki.archlinux.org/)
- [Installation Guide](https://wiki.archlinux.org/title/Installation_guide)
- [General Recommendations](https://wiki.archlinux.org/title/General_recommendations)