---
title: IDEs
description: Comparativa y recomendaciones de entornos de desarrollo. Codium, IntelliJ, VSCode y más.
lastUpdated: 2026-06-26
---

Conozco varios IDEs, he probado Cursor, Zen, VSCode, Eclipse... Aquí tienes mis recomendaciones.

---

## Mis recomendaciones principales

### 1. Codium (VSCode sin telemetría)

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


---

### 2. IntelliJ IDEA (Backend)

(Página web oficial)[https://www.jetbrains.com/idea/]

**Ventajas:**
- Excelente para backend (PHP, Java, Kotlin)
- Refactorización avanzada
- Depuración potente
- Integración con frameworks populares (Spring, Laravel)

**Inconvenientes:**
- Consume muchos recursos
- La versión Ultimate es de pago (Community es gratuita pero limitada)

**Versiones:**
- **Community**: Gratuita (Java, Kotlin, Android)
- **Ultimate**: De pago (PHP, Python, JavaScript, etc.)

---

### 3. Android Studio (Kotlin/Android)

(Página web oficila)[https://developer.android.com/studio]

**Ventajas:**
- IDE oficial de Google para Android
- Basado en IntelliJ
- Excelente para Kotlin
- Emulador y herramientas Android integradas

**Inconvenientes:**
- Muy pesado
- Solo enfocado a desarrollo móvil

---

### 4. VSCode (Versátil)

**Ventajas:**
- Ligero y rápido
- Gran ecosistema de extensiones
- Sincronización por defecto con cuenta Microsoft/GitHub
- Gratuito y multiplataforma

**Inconvenientes:**
- Telemetría de Microsoft (se puede desactivar)
- Algunas extensiones son de pago
- Copilot estará en tus commits por defecto
- Tu código será _coauthored by copilot_.

---
¡Tienes toda la razón! Ha sido un error imperdonable no incluir **NeoVim** y **Nano** en la comparativa. Son dos herramientas fundamentales en el ecosistema del desarrollo, aunque con filosofías completamente opuestas.

Aquí tienes la sección que faltaba, para completar el artículo:

---

## 5. NeoVim (El editor para programadores de verdad)

[Página web oficial](https://neovim.io/)

**Ventajas:**
- **Rendimiento brutal**: Arranca en milisegundos incluso con cientos de plugins
- **Modal editing**: Una vez que aprendes Vim, editas a la velocidad del pensamiento
- **Configuración en Lua**: Mucho más moderna y rápida que el Vimscript de Vim
- **Ecosistema increíble**: LSP nativo, Treesitter, DAP (debugging), Telescope...
- **Extensible**: Puedes convertirlo en un IDE completo sin perder fluidez
- **Ctrl+Z**: Puedes suspenderlo y volver al terminal, y reanudarlo con `fg`
- **Disponible en todas partes**: En cualquier servidor Linux viene instalado

**Inconvenientes:**
- **Curva de aprendizaje empinada**: Las primeras semanas son frustrantes
- **Configuración requiere tiempo**: No es "plug and play" como VSCode
- **Atajos no intuitivos**: Debes memorizar combinaciones
- **Comunidad más pequeña**: Aunque muy activa y apasionada

**Distribuciones populares (para empezar sin configurar):**
- **LazyVim**: La más moderna y fácil de empezar
- **AstroVim**: Muy completa y bien documentada
- **NvChad**: Estilo minimalista pero potente
- **Lunarvim**: Ideal para desarrolladores que vienen de VSCode

---

## 6. Nano (El editor minimalista de terminal)

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



## Actualización de la tabla comparativa

| IDE | Lenguajes | Gratuito | Peso | Curva aprendizaje | Sincronización |
|-----|-----------|----------|------|-------------------|----------------|
| **Codium** | Todos | ✅ | Ligero | Baja | ✅ (manual) |
| **VSCode** | Todos | ✅ | Ligero | Baja | ❌ (Microsoft) |
| **IntelliJ** | Java, Kotlin, PHP | ✅ (Community) | Pesado | Media | ❌ (JetBrains) |
| **Android Studio** | Kotlin, Java | ✅ | Muy pesado | Media | ❌ (Google) |
| **Eclipse** | Java, PHP | ✅ | Pesado | Media | ✅ (manual) |
| **Cursor** | Todos | ❌ (pago) | Ligero | Baja | ❌ |
| **Zen** | Todos | ❌ (pago) | Ligero | Baja | ❌ |
| **NeoVim** | Todos (con plugins) | ✅ | Ultraligero | **Alta** | ✅ (dotfiles) |
| **Nano** | Texto plano | ✅ | **< 1MB** | **Muy baja** | ❌ |

---

## Recomendaciones actualizadas por caso de uso

| Caso | Recomendación | Alternativa |
|------|---------------|-------------|
| **Backend (Java/Spring)** | IntelliJ IDEA | Eclipse |
| **Backend (PHP/Laravel)** | IntelliJ IDEA | PHPStorm (de pago) |
| **Desarrollo Android** | Android Studio | IntelliJ + plugins |
| **Frontend (React/Vue)** | Codium/VSCode | NeoVim (si te atreves) |
| **Scripting (Python/Node)** | Codium/VSCode | NeoVim con LSP |
| **Administración de servidores** | **Nano** (rápido) | NeoVim (avanzado) |
| **Edición remota por SSH** | **Nano** (siempre instalado) | Vim/NeoVim |
| **Desarrollo en terminal pura** | **NeoVim** | Vim |
| **Cloud/Containers** | Codium (Dev Containers) | NeoVim con Docker |

---

## Mi filosofía personal

- **Nano** para ediciones rápidas en servidores, cambiar un archivo de configuración, revisar logs, o cuando no tengo mi entorno configurado.

- **NeoVim** para mi día a día cuando estoy en la terminal. Con LSP, Treesitter y Telescope es un editor de primera categoría. La inversión en aprenderlo se amortiza con creces.

- **Codium** para proyectos donde necesito colaborar o cuando quiero una interfaz más visual y extensiones específicas.

- **IntelliJ** para backend profesional cuando el proyecto lo requiere.


> Si quieres **control total y velocidad**, aprende **NeoVim**. Si necesitas **algo rápido y sencillo** en un servidor, usa **Nano**. Para el resto de casos, **Codium** es el equilibrio perfecto entre potencia, código abierto y facilidad de uso.