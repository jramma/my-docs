---
title: Manage Users
description: Gestión de usuarios, grupos, contraseñas y permisos en Linux.
lastUpdated: 2026-06-26
---

## Usuarios

### Crear usuario
```bash
sudo useradd -m -G wheel -s /bin/bash nombre
# -m: home, -G: grupos extra, -s: shell
```

### Eliminar usuario
```bash
sudo userdel -r nombre   # -r elimina home
```

### Ver usuarios
```bash
cat /etc/passwd          # todos
who                      # conectados
```

### Modificar usuario
```bash
sudo usermod -aG grupo usuario   # añadir a grupo
sudo usermod -s /bin/zsh usuario # cambiar shell
```

---

## Contraseñas

```bash
passwd                   # tu contraseña
sudo passwd usuario      # contraseña de otro
sudo passwd -l usuario   # bloquear
sudo passwd -u usuario   # desbloquear
```

---

## Grupos

```bash
groups usuario           # ver grupos
id usuario               # ver grupos y UID
sudo groupadd grupo      # crear grupo
sudo groupdel grupo      # eliminar grupo
sudo usermod -aG grupo usuario  # añadir usuario a grupo
newgrp grupo             # aplicar cambios sin cerrar sesión
```

---

## Permisos

### Estructura
```text
-rwxr-xr--  usuario  grupo  archivo
 ↑↑↑
 |||-- otros (o)
 ||--- grupo (g)
 |---- propietario (u)
```

### chmod (cambiar permisos)
```bash
chmod 755 archivo        # rwxr-xr-x
chmod 644 archivo        # rw-r--r--
chmod 600 archivo        # rw------- (privado)
chmod u+x archivo        # añadir ejecución al propietario
chmod -R 755 carpeta/    # recursivo
```

### chown (cambiar propietario)
```bash
sudo chown usuario archivo
sudo chown usuario:grupo archivo
sudo chown -R usuario:grupo carpeta/
```

### chgrp (cambiar grupo)
```bash
sudo chgrp grupo archivo
```

---

## Referencia rápida

| Octal | Permisos | Uso |
|-------|----------|-----|
| 700 | rwx------ | Directorios privados |
| 755 | rwxr-xr-x | Binarios, directorios públicos |
| 644 | rw-r--r-- | Archivos de configuración |
| 600 | rw------- | Claves SSH, archivos sensibles |

---

## sudo

```bash
# Dar permisos sudo (Arch)
sudo usermod -aG wheel usuario

# Ejecutar como otro usuario
sudo -u usuario comando

# Ver permisos sudo
sudo -l
```

> Editar `/etc/sudoers` con `visudo`. Línea para Arch: `%wheel ALL=(ALL:ALL) ALL`