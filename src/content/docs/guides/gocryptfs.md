---
title: gocryptfs
description: Encriptación simple y segura para carpetas en Linux. Protege tus archivos en discos USB o en la nube con cifrado transparente.
lastUpdated: 2026-06-29
---

gocryptfs es un sistema de archivos encriptado que funciona en el espacio de usuario. Utiliza cifrado AES-GCM y se integra de forma transparente en tu sistema, permitiéndote trabajar con archivos encriptados como si fueran normales. Es la solución ideal para proteger carpetas en USBs o sincronizar con servicios de nube.

---

## 1. Instalación

import { Tabs, TabItem } from '@astrojs/starlight/components';

<Tabs>
  <TabItem label="Debian / Ubuntu">

```bash
sudo apt update
sudo apt install gocryptfs
```

  </TabItem>
  <TabItem label="Arch Linux">

```bash
sudo pacman -S gocryptfs
```

  </TabItem>
  <TabItem label="Fedora / RHEL">

```bash
sudo dnf install gocryptfs
```

  </TabItem>
</Tabs>

---

## 2. Estructura de Directorios

gocryptfs utiliza dos carpetas:

- **Carpeta cifrada** (`cipher`): Contiene los archivos encriptados. Puedes sincronizar esta carpeta con la nube o copiarla sin preocupaciones.
- **Punto de montaje** (`plain`): Carpeta donde se muestran los archivos descifrados al introducir la contraseña.

```bash
# Ejemplo de estructura en tu USB
/mnt/usb/
├── carpeta_cifrada/    # Archivos encriptados (visibles pero inaccesibles)
└── carpeta_acceso/     # Punto de montaje (solo visible tras autenticación)
```

---

## 3. Inicialización

mkdi> **Elige una contraseña segura.** Si la olvidas, tus archivos serán irrecuperables. No hay mecanismo de recuperación.

### Crear las carpetas
```bash
# Dentro de tu USB o directorio deseado
mkdir carpeta_cifrada carpeta_acceso
```

### Inicializar la encriptación (solo primera vez)
```bash
gocryptfs -init carpeta_cifrada
```
Te pedirá que introduzcas y confirmes una contraseña. Esto generará los archivos de configuración `gocryptfs.conf` y `gocryptfs.diriv` en `carpeta_cifrada`.

---

## 4. Montar y Desmontar

### Montar (acceder a los archivos descifrados)
```bash
gocryptfs carpeta_cifrada carpeta_acceso
```
Introduce tu contraseña y la carpeta `carpeta_acceso` mostrará tus archivos en texto plano. Puedes trabajar con ellos normalmente.

### Desmontar (bloquear el acceso)
```bash
fusermount -u carpeta_acceso
```
Los archivos quedan nuevamente encriptados e inaccesibles sin la contraseña.

---

## 5. Opciones Avanzadas de Montaje

### Usar contraseña desde archivo (scripts)
```bash
# Guardar contraseña en un archivo (¡con permisos seguros!)
echo "mi_contraseña_segura" > ~/.gocryptfs_pass
chmod 600 ~/.gocryptfs_pass

# Montar usando el archivo
gocryptfs -passfile ~/.gocryptfs_pass carpeta_cifrada carpeta_acceso
```

### Modo solo lectura
```bash
gocryptfs -ro carpeta_cifrada carpeta_acceso
```

### Forzar montaje (si hubo un cierre abrupto)
```bash
gocryptfs -force_owner carpeta_cifrada carpeta_acceso
```

---

## 6. Rendimiento y Optimización

gocryptfs es rápido gracias a su diseño ligero, pero puedes mejorar el rendimiento con estas opciones:

### Desactivar cifrado de nombres de archivo (más rápido)
```bash
# Inicializar sin cifrar nombres (solo contenido)
gocryptfs -init -plaintextnames carpeta_cifrada
```

### Usar reverse mode (encriptar carpeta existente)
```bash
# Crea una vista encriptada de una carpeta ya existente
gocryptfs -reverse /ruta/origen /ruta/destino_encriptado
```

---

## 7. Backups y Sincronización

### Sincronizar con servicios de nube
```bash
# Subir solo la carpeta cifrada a la nube
rclone sync carpeta_cifrada/ mi_cloud:/backup/

# Al restaurar, solo necesitas montar nuevamente
gocryptfs carpeta_cifrada carpeta_acceso
```

### Copiar la carpeta cifrada a otro USB
```bash
# Puedes copiar la carpeta cifrada sin problemas
cp -r carpeta_cifrada/ /media/otro_usb/
```

---

## 8. Solución de Problemas

### Error: "filesystem already mounted"
```bash
# Verificar montajes activos
mount | grep gocryptfs

# Forzar desmontaje
fusermount -uz carpeta_acceso
```

### Recuperar acceso tras olvidar contraseña

> **No es posible.** La única forma es tener una copia de seguridad de la clave maestra generada durante la inicialización.

```bash
# Si guardaste la clave maestra (se muestra al inicializar)
gocryptfs -masterkey="tu_clave_maestra" carpeta_cifrada carpeta_acceso
```

### Archivos corruptos al desmontar
```bash
# Si el sistema se apagó abruptamente, usa fsck
gocryptfs -fsck carpeta_cifrada
```

---

## 9. Comandos Útiles

### Ver información de la carpeta cifrada
```bash
# Ver versión y estado
gocryptfs -version

# Ver estadísticas de uso
gocryptfs -stats
```

### Cambiar contraseña
```bash
# Solo funciona si tienes la contraseña actual
gocryptfs -passwd carpeta_cifrada
```

### Crear acceso rápido (alias)
```bash
# Añadir a .bashrc o .zshrc
alias montar-usb='gocryptfs /media/usb/cifrada /media/usb/acceso'
alias desmontar-usb='fusermount -u /media/usb/acceso'
```

---

> **Recuerda**: gocryptfs es ideal para proteger datos sensibles en USBs o en la nube. Su diseño archivo por archivo permite sincronización eficiente y no requiere espacio reservado, a diferencia de los contenedores tradicionales como VeraCrypt.