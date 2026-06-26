---
title: rsync
description: Sincronización eficiente de archivos. Copia solo cambios, ideal para backups incrementales.
lastUpdated: 2026-06-26
---

Herramienta de sincronización de archivos que copia solo los cambios (deltas), ideal para backups incrementales.

## Sintaxis básica

```bash
rsync [opciones] origen/ destino/
```

> La barra `/` al final del origen importa: `origen/` copia el **contenido** de la carpeta; `origen` copia la carpeta entera.

## Opciones más usadas

| Opción | Descripción |
| ------ | ----------- |
| `-a` | Modo archivo: preserva permisos, timestamps, enlaces simbólicos, etc. |
| `-v` | Verbose: muestra los archivos que se copian |
| `-h` | Tamaños legibles (KB, MB…) |
| `--progress` | Muestra el progreso de cada archivo |
| `--delete` | Elimina en el destino los archivos que ya no existen en el origen |
| `--dry-run` / `-n` | Simulación: muestra qué haría sin ejecutar nada |
| `--exclude` | Excluye archivos o patrones |
| `--include` | Incluye solo archivos o patrones concretos |

---

## Caso de uso: backup de Documentos en un USB

Tienes tu carpeta `~/Documentos` y quieres mantener un backup en un USB montado en `/media/tu_usuario/USB`.

### Sincronización completa

```bash
rsync -avh --progress ~/Documentos/ /media/tu_usuario/USB/Documentos/
```

- Copia todo lo nuevo o modificado.
- No borra nada en el USB aunque lo elimines en local.

### Sincronización con borrado (espejo exacto)

```bash
rsync -avh --progress --delete ~/Documentos/ /media/tu_usuario/USB/Documentos/
```

- Si borras un archivo en `~/Documentos`, también se borra del USB.
- El USB queda como copia exacta del origen.

### Solo archivos `.md` (sincronizar notas Markdown)

Si solo quieres que los `.md` que modifiques se copien al USB:

```bash
rsync -avh --progress \
  --include="*/" \
  --include="*.md" \
  --exclude="*" \
  ~/Documentos/ /media/tu_usuario/USB/Documentos/
```

- `--include="*/"` permite entrar en subdirectorios.
- `--include="*.md"` copia únicamente los `.md`.
- `--exclude="*"` ignora el resto de archivos.

Con `--delete` para que los `.md` borrados localmente también se eliminen del USB:

```bash
rsync -avh --progress --delete \
  --include="*/" \
  --include="*.md" \
  --exclude="*" \
  ~/Documentos/ /media/tu_usuario/USB/Documentos/
```

### Simulación previa (recomendado antes de borrar)

```bash
rsync -avh --dry-run --delete \
  --include="*/" \
  --include="*.md" \
  --exclude="*" \
  ~/Documentos/ /media/tu_usuario/USB/Documentos/
```

Muestra exactamente qué se copiaría o borraría sin tocar nada.

---

## Alias útil

Añade esto a tu `~/.bashrc` o `~/.config/fish/config.fish` para lanzarlo rápido:

```bash
# bash / zsh
alias backup-md='rsync -avh --progress --delete --include="*/" --include="*.md" --exclude="*" ~/Documentos/ /media/tu_usuario/USB/Documentos/'
```

```fish
# fish
alias backup-md 'rsync -avh --progress --delete --include="*/" --include="*.md" --exclude="*" ~/Documentos/ /media/tu_usuario/USB/Documentos/'
```

Luego simplemente ejecutas:

```bash
backup-md
```

---

## Sincronización remota (SSH)

```bash
rsync -avh --progress ~/Documentos/ usuario@servidor:/ruta/backup/
```

Útil para hacer backup a un servidor remoto en lugar de un USB.