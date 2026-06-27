---
title: Music
description: Reproductores de música y herramientas para Linux. Ligero, rápido y práctico.
lastUpdated: 2026-06-26
---

## Reproductores recomendados

### Euphonica (Rust)

Ligero, rápido y minimalista. Tendrás que configurar MPD pero lo usan casi todos los reproductores multimedias modernos.

(Enlace a la aplicación)[https://github.com/htkhiem/euphonica]



### Amberol (Rust)

Reproductor simple sin biblioteca, solo arrastrar y reproducir.

(Repositorio de Amberol)[https://github.com/adamjatim/amberol]

### GNOME Music

Reproductor integrado en GNOME, sencillo y funcional.

```bash
# Instalación
sudo apt install gnome-music        # Debian/Ubuntu
sudo pacman -S gnome-music          # Arch
```

---

## Herramientas para metadatos

### Kid3 (editor de etiquetas)
Para revisar y editar metadatos manualmente.

```bash
sudo apt install kid3               # Debian/Ubuntu
sudo pacman -S kid3                 # Arch
```

### Scripts bash para ordenar biblioteca
Yo uso scripts para revisar metadatos y mantener la librería ordenada.

Ejemplo básico:
```bash
#!/bin/bash
# Revisar archivos sin etiquetas (mp3, flac, ogg)
find ~/Música -type f \( -name "*.mp3" -o -name "*.flac" -o -name "*.ogg" \) -exec echo "Revisar: {}" \;
```

> Hice un proyecto en C para revisar metadatos, pero tenía problemas con memoria y caracteres especiales. Lo rehíce en Rust y funcionó bien. Hice un proyecto sencillo para ello [https://github.com/jramma/review-flac-mp3-metadata](https://github.com/jramma/review-flac-mp3-metadata)


---

## Alternativas populares

| Reproductor | Características |
|-------------|-----------------|
| **Rhythmbox** | Clásico, biblioteca completa |
| **Clementine** | Múltiples fuentes, potente |
| **Audacious** | Muy ligero (Winamp-like) |
| **cmus** | Terminal, teclado, eficiente |
| **ncmpcpp** | Cliente MPD, terminal |

---


- **Euphonica** y **Amberol** para lo rápido y práctico (Rust)
- **Kid3** para editar metadatos
- **Scripts bash** para automatizar el orden de la biblioteca