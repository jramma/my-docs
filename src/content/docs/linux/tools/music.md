---
title: Music
description: Reproductores de música y herramientas para Linux. Ligero, rápido y práctico.
lastUpdated: 2026-06-26
---

## Reproductores recomendados

### Euphonica (Rust)
Ligero, rápido y minimalista.

```bash
# Instalación
flatpak install flathub com.github.gi_lom.Euphonica
```

### Amberol (Rust)
Reproductor simple sin biblioteca, solo arrastrar y reproducir.

```bash
# Instalación
flatpak install flathub io.bassi.Amberol
```

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
# Revisar archivos sin etiquetas
find ~/Música -name "*.mp3" -exec id3info {} \; | grep -E "Title|Artist"
```

---

## Alternativas populares

| Reproductor | Características |
|-------------|-----------------|
| **Spotify** | Streaming (oficial o flatpak) |
| **Rhythmbox** | Clásico, biblioteca completa |
| **Clementine** | Múltiples fuentes, potente |
| **Audacious** | Muy ligero (Winamp-like) |
| **cmus** | Terminal, teclado, eficiente |
| **ncmpcpp** | Cliente MPD, terminal |

---


- **Euphonica** y **Amberol** para lo rápido y práctico (Rust)
- **Kid3** para editar metadatos
- **Scripts bash** para automatizar el orden de la biblioteca