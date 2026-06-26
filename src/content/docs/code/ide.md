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

**Inconvenientes:**
- **No tiene sincronización online** (necesitas guardar la configuración localmente o usar un repo de dotfiles)
- Menos extensiones en el marketplace oficial (pero compatibles con las de VSCode)

**Instalación:**
```bash
# Debian/Ubuntu
wget -qO- https://git.io/JJqxl | bash

# Arch Linux
sudo pacman -S vscodium
```

---

### 2. IntelliJ IDEA (Backend)

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

---

## Comparativa rápida

| IDE | Lenguajes | Gratuito | Peso | Sincronización |
|-----|-----------|----------|------|----------------|
| **Codium** | Todos | ✅ | Ligero | ✅ (manual) |
| **VSCode** | Todos | ✅ | Ligero | ❌ (Microsoft) |
| **IntelliJ** | Java, Kotlin, PHP | ✅ (Community) | Pesado | ❌ (JetBrains) |
| **Android Studio** | Kotlin, Java | ✅ | Muy pesado | ❌ (Google) |
| **Eclipse** | Java, PHP | ✅ | Pesado | ✅ (manual) |
| **Cursor** | Todos | ❌ (pago) | Ligero | ❌ |
| **Zen** | Todos | ❌ (pago) | Ligero | ❌ |

---

## Configuración de Codium (sincronización manual)

### Opción 1: Git + dotfiles

```bash
# Crear repo de configuración
mkdir ~/dotfiles
cd ~/dotfiles
git init

# Copiar configuración de Codium
cp ~/.config/VSCodium/User/settings.json .
cp ~/.config/VSCodium/User/keybindings.json .

# Subir a GitHub
git add .
git commit -m "Configuración Codium"
git remote add origin https://github.com/tu-usuario/dotfiles.git
git push -u origin main
```

### Opción 2: Settings Sync (extensión)

Instalar la extensión **Settings Sync** y usar un Gist de GitHub para sincronizar.

---

## Extensiones esenciales (para Codium/VSCode)

```json
{
  "extensiones": [
    "GitLens",
    "Prettier",
    "ESLint",
    "Live Server",
    "Docker",
    "Remote - SSH",
    "Python",
    "PHP Intelephense",
    "Java Extension Pack",
    "Markdown All in One",
    "Material Icon Theme"
  ]
}
```

---

## Recomendaciones por caso de uso

| Caso | Recomendación | Alternativa |
|------|---------------|-------------|
| **Backend (Java/Spring)** | IntelliJ IDEA | Eclipse |
| **Backend (PHP/Laravel)** | IntelliJ IDEA | PHPStorm (de pago) |
| **Desarrollo Android** | Android Studio | IntelliJ + plugins |
| **Frontend (React/Vue)** | Codium/VSCode | Cursor |
| **Scripting (Python/Node)** | Codium/VSCode | PyCharm (gratuito) |
| **Administración** | Codium (SSH remoto) | VSCode |
| **Cloud/Containers** | Codium (Dev Containers) | VSCode |

---

## Guía de instalación rápida

### Codium (Debian/Ubuntu)
```bash
# Instalar
wget -qO- https://git.io/JJqxl | bash
sudo apt install codium

# Lanzar
codium
```

### IntelliJ IDEA (Ubuntu/Debian)
```bash
# Descargar desde web o usar snap
sudo snap install intellij-idea-community --classic
```

### Android Studio
```bash
# Desde web oficial
wget https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2023.1.1.28/android-studio-2023.1.1.28-linux.tar.gz
tar -xzf android-studio-*.tar.gz
cd android-studio/bin
./studio.sh
```

---

## Atajos útiles (comunes a todos los IDEs)

| Acción | Codium/VSCode | IntelliJ |
|--------|---------------|----------|
| Buscar archivo | `Ctrl+P` | `Ctrl+Shift+N` |
| Buscar en proyecto | `Ctrl+Shift+F` | `Ctrl+Shift+F` |
| Ir a definición | `F12` / `Ctrl+Click` | `Ctrl+B` |
| Renombrar símbolo | `F2` | `Shift+F6` |
| Formatear código | `Ctrl+Shift+I` | `Ctrl+Alt+L` |
| Terminal | `Ctrl+`` (backtick) | `Alt+F12` |
| Comentario línea | `Ctrl+/` | `Ctrl+/` |
| Buscar y reemplazar | `Ctrl+H` | `Ctrl+Shift+R` |

---

> Si prefieres código abierto y control total, elige **Codium**. Si trabajas en backend profesionalmente, **IntelliJ Ultimate** merece la inversión. Para proyectos mixtos, **VSCode** con sincronización es la opción más cómoda.