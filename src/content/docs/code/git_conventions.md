---
title: Git Conventions
description: Convenciones para mensajes de commit en Git. Estándares y emojis para equipos.
lastUpdated: 2026-06-26
---

## Tipos de commit

| Emoji | Tipo | Título | Descripción |
| :---: | :---: | ------ | ----------- |
| ✨ | `feat` | Features | Marca un commit que completa una funcionalidad. Debe ser completo y sin errores |
| 🐛 | `fix` | Bug Fixes | Arreglo de un error |
| 📚 | `docs` | Documentation | Cambios solo en documentación |
| 🧪 | `test` | Tests | Añadir o corregir tests |
| 📦 | `refactor` | Code Refactoring | Cambio que ni arregla bug ni añade funcionalidad |
| 🚀 | `perf` | Performance Improvements | Cambio que mejora el rendimiento |
| ⚙️ | `wip` | WIP | Funcionalidad o fix incompleto. Ver commit anterior |
| ♻️ | `chore` | Chores | Tareas de mantenimiento o miscelánea |
| 🗑 | `revert` | Reverts | Revertir un commit anterior |
| 🤌🏽 | `initial` | Commit Inicial | Primer commit del proyecto |

---

## Estructura del mensaje

```
<emoji> <tipo>(<ámbito>): <asunto>

<cuerpo opcional>

<footer opcional>
```

### Ejemplos

```bash
# Commit de una nueva funcionalidad
✨ feat(auth): añadir login con Google OAuth

# Arreglo de bug
🐛 fix(api): corregir error 500 en endpoint /users

# Documentación
📚 docs(readme): actualizar instrucciones de instalación

# Refactorización
📦 refactor(utils): simplificar función de validación

# WIP (trabajo en progreso)
⚙️ wip(frontend): avanzar en componente de dashboard

# Chore (tarea de mantenimiento)
♻️ chore(deps): actualizar dependencias a última versión

# Revertir commit
🗑 revert: revertir commit abc123 por error en producción
```

---

## Ámbitos comunes

- `auth` - Autenticación
- `api` - API/REST endpoints
- `ui` - Interfaz de usuario
- `db` - Base de datos
- `config` - Configuración
- `deps` - Dependencias
- `ci` - Integración continua
- `docker` - Docker
- `test` - Tests
- `docs` - Documentación
- `utils` - Utilidades
- `security` - Seguridad

---

## Reglas importantes

1. **Asunto:**
   - Máximo 50 caracteres
   - En imperativo ("añadir" no "añadido")
   - Sin punto al final

2. **Cuerpo:**
   - Explicar el qué y el por qué, no el cómo
   - Máximo 72 caracteres por línea

3. **Footer:**
   - Referencias a issues: `Closes #123`
   - Breaking changes: `BREAKING CHANGE: descripción`

---

## Configurar template de commit

Crear archivo `~/.gitcommit_template`:

```text
<tipo>(<ámbito>): <asunto>

<cuerpo>

<footer>
```

Configurar:

```bash
git config --global commit.template ~/.gitcommit_template
```

---

## Aliases útiles

```bash
# Alias para commit con emoji
git config --global alias.c '!f() { git commit -m "✨ $1"; }; f'
git config --global alias.f '!f() { git commit -m "🐛 $1"; }; f'
git config --global alias.d '!f() { git commit -m "📚 $1"; }; f'
git config --global alias.r '!f() { git commit -m "📦 $1"; }; f'
git config --global alias.p '!f() { git commit -m "🚀 $1"; }; f'

# Uso: git c "mensaje del commit"
```

---

## Buenas prácticas

- ✅ Commits atómicos (una cosa por commit)
- ✅ Mensajes descriptivos y claros
- ✅ Commits frecuentes
- ✅ Revisar cambios antes de commit
- ❌ No mezclar múltiples cambios en un commit
- ❌ No hacer commits con mensajes vagos como "fix" o "update"

---

## Ejemplo de flujo

```bash
# Ver estado
git status

# Ver cambios
git diff

# Añadir archivos
git add archivo.txt

# Commit con emoji y tipo
git commit -m "✨ feat(auth): añadir login con Google OAuth"

# Ver historial
git log --oneline

# Enviar cambios
git push
```

---

> Usa `git commit -m "✨ feat: mensaje" -m "Cuerpo del commit con más detalles"` para commits con cuerpo. Mantén la consistencia en todo el equipo.