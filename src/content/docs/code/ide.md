---
title: IDEs
description: Comparativa y recomendaciones de entornos de desarrollo. Codium, IntelliJ, VSCode y más.
lastUpdated: 2026-06-26
---

Conozco varios IDEs, he probado Cursor, Zen, VSCode, Eclipse... Aquí tienes mis recomendaciones.

## 1. Nano

El único IDE que no da problemas.

[Página web oficial](https://www.nano-editor.org/)

**Ventajas:**

- **Ultraligero**: Ocupa menos de 1MB
- **Arranque instantáneo**: No hay tiempo de carga
- **Curva de aprendizaje casi nula**: Los atajos se ven en la pantalla
- **Viene instalado en prácticamente todos los sistemas Linux**
- **Perfecto para ediciones rápidas**: Configurar un archivo, editar un script, etc.
- **No necesita configuración**: Funciona bien por defecto

**Inconvenientes:**

- **Muy limitado**: Sin autocompletado, sin LSP, sin plugins
- **Sin resaltado de sintaxis avanzado**: Básico comparado con otros editores
- **No es productivo para proyectos grandes**
- **Sin modo visual/selectivo**: Todo es línea por línea

**Atajos básicos (Ctrl+letra):**

- `Ctrl+O` - Guardar archivo
- `Ctrl+X` - Salir (te pregunta si quieres guardar)
- `Ctrl+W` - Buscar texto
- `Ctrl+K` - Cortar línea
- `Ctrl+U` - Pegar línea
- `Ctrl+G` - Ayuda

## 2. Atom y Zed

Curiosamente [Atom IDE](https://atom-editor.cc/) esta abandonado desde 2022, lo cual es un problema en seguridad pero ha hecho que sufra menos en ponerle IA.

Zed es moderno, si tiene opción IA, sigue el mantenimiento ([https://zed.dev/](https://zed.dev/)) aunque en github tiene miles de errores reportados.

## 3. Codium (VSCode sin telemetría)

Se ha reportado que tiene malware en Aur y se ha corregido pero puede volver a pasar.

**Ventajas:**

- Código abierto y sin telemetría de Microsoft
- Misma interfaz y extensiones que VSCode
- Ligero y rápido
- Compatible con todos los lenguajes

**Inconvenientes?:**

- **No tiene sincronización online** (necesitas guardar la configuración localmente o usar un repo de dotfiles)
- Menos extensiones en el marketplace oficial (pero compatibles con las de VSCode)

**Instalación:**

Sigue las instrucciones de la página oficial: [VSCodium](https://vscodium.com/)

## 4. NeoVim (El editor para programadores de verdad)

Se puede hacer con plugins como un IDE moderno pero tiene su propia curba de aprendizaje, lo cuál es tedioso.

[Página web oficial](https://neovim.io/)
