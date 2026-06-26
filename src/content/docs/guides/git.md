---
title: Git
description: Comandos esenciales de Git. Control de versiones para tus proyectos.
lastUpdated: 2026-06-26
---

Git es un sistema de control de versiones distribuido. Aquí tienes los comandos esenciales para el día a día.

---

## Configuración inicial

### Configurar tu identidad

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Configurar editor por defecto

```bash
git config --global core.editor "nano"
# o para VS Code
git config --global core.editor "code --wait"
```

### Ver configuración

```bash
git config --list
git config --global --list
```

---

## Iniciar un repositorio

```bash
# Crear nuevo repositorio en la carpeta actual
git init

# Clonar un repositorio existente
git clone https://github.com/usuario/repositorio.git

# Clonar en una carpeta específica
git clone https://github.com/usuario/repositorio.git mi-carpeta
```

---

## Estados de los archivos

```text
Archivos en Git pueden estar en 3 estados:
- Sin seguimiento (untracked): no están bajo control de versión
- Modificados (modified): han cambiado pero no añadidos al staging
- En staging (staged): preparados para commit
- Confirmados (committed): guardados en el repositorio
```

---

## Comandos básicos (CRUD)

### Ver estado

```bash
# Ver estado de los archivos
git status

# Resumen corto
git status -s
```

### Añadir archivos (staging)

```bash
# Añadir un archivo específico
git add archivo.txt

# Añadir todos los archivos modificados
git add .

# Añadir todos los archivos (incluyendo nuevos)
git add -A

# Añadir solo archivos modificados (no nuevos)
git add -u
```

### Hacer commit (guardar cambios)

```bash
# Commit con mensaje
git commit -m "Mensaje descriptivo"

# Commit de todos los archivos en staging
git commit -a -m "Mensaje"

# Commit con mensaje largo
git commit
# Se abrirá el editor para escribir el mensaje
```

### Ver historial

```bash
# Ver historial de commits
git log

# Historial resumido (una línea por commit)
git log --oneline

# Historial con gráfico
git log --graph --oneline --all

# Ver cambios en un commit específico
git show hash_del_commit

# Ver cambios realizados (antes de commit)
git diff

# Ver cambios en staging
git diff --staged
```

### Deshacer cambios

```bash
# Deshacer cambios en un archivo (volver al último commit)
git checkout -- archivo.txt

# Quitar archivo del staging (pero mantener cambios)
git reset HEAD archivo.txt

# Deshacer el último commit (manteniendo cambios)
git reset --soft HEAD~1

# Deshacer el último commit (descartando cambios)
git reset --hard HEAD~1

# Deshacer todos los cambios no commiteados
git reset --hard HEAD
```

### Eliminar archivos

```bash
# Eliminar archivo del repositorio y del disco
git rm archivo.txt
git commit -m "Eliminar archivo"

# Eliminar archivo solo del repositorio (mantener en disco)
git rm --cached archivo.txt
```

### Mover/renombrar archivos

```bash
# Renombrar archivo
git mv viejo.txt nuevo.txt
git commit -m "Renombrar archivo"
```

---

## Ramas (branches)

### Gestionar ramas

```bash
# Ver ramas locales
git branch

# Ver todas las ramas (incluyendo remotas)
git branch -a

# Crear una nueva rama
git branch nombre-rama

# Cambiar a una rama
git checkout nombre-rama

# Crear y cambiar a nueva rama
git checkout -b nombre-rama

# Eliminar rama (local)
git branch -d nombre-rama

# Eliminar rama forzosamente
git branch -D nombre-rama
```

### Fusionar ramas (merge)

```bash
# Cambiar a la rama destino (ej: main)
git checkout main

# Fusionar otra rama en la actual
git merge nombre-rama

# Si hay conflictos: resolverlos manualmente y luego
git add .
git commit -m "Resolver conflictos"
```

### Rebase (alternativa a merge)

```bash
# Rebase de rama_actual sobre main
git rebase main

# Rebase interactivo (útil para reescribir historia)
git rebase -i HEAD~3
```

---

## Repositorios remotos

### Gestionar remotos

```bash
# Ver remotos configurados
git remote -v

# Añadir remoto
git remote add origin https://github.com/usuario/repo.git

# Cambiar URL del remoto
git remote set-url origin https://github.com/usuario/repo.git

# Eliminar remoto
git remote remove origin
```

### Subir cambios (push)

```bash
# Subir a remoto (primera vez)
git push -u origin main

# Subir cambios a remoto
git push

# Subir una rama específica
git push origin nombre-rama

# Eliminar rama en remoto
git push origin --delete nombre-rama
```

### Traer cambios (pull/fetch)

```bash
# Traer cambios del remoto y fusionar
git pull

# Traer cambios sin fusionar
git fetch

# Traer cambios de una rama específica
git pull origin nombre-rama

# Traer y hacer rebase en lugar de merge
git pull --rebase
```

---

## Tags (etiquetas)

```bash
# Crear tag ligero
git tag v1.0.0

# Crear tag anotado (con mensaje)
git tag -a v1.0.0 -m "Versión 1.0.0"

# Ver todos los tags
git tag

# Subir tags al remoto
git push --tags

# Subir un tag específico
git push origin v1.0.0

# Eliminar tag local
git tag -d v1.0.0

# Eliminar tag remoto
git push origin --delete v1.0.0
```

---

## Stash (guardar cambios temporalmente)

```bash
# Guardar cambios no commiteados
git stash

# Guardar con mensaje
git stash push -m "Mensaje"

# Ver lista de stashes
git stash list

# Aplicar último stash (mantenerlo en stash)
git stash apply

# Aplicar y eliminar de stash
git stash pop

# Aplicar un stash específico
git stash apply stash@{2}

# Eliminar stash específico
git stash drop stash@{2}

# Eliminar todos los stashes
git stash clear
```

---

## Comandos útiles adicionales

```bash
# Ver a quién pertenece cada línea (blame)
git blame archivo.txt

# Buscar texto en el repositorio
git grep "texto a buscar"

# Ver cambios en el tiempo entre commits
git diff commit1..commit2

# Ver cambios de un archivo específico en el tiempo
git log -p archivo.txt

# Ver commits de un autor específico
git log --author="nombre"

# Ver commits en un rango de fechas
git log --since="2024-01-01" --until="2024-12-31"

# Ver archivos modificados en un commit
git show --name-only hash_del_commit
```

---

## Alias útiles

Configura alias en `~/.gitconfig` o con:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --graph --oneline --all"
git config --global alias.unstage "reset HEAD --"
```

---

## Ignorar archivos (.gitignore)

Crear un archivo `.gitignore` en la raíz del proyecto:

```gitignore
# Archivos compilados
*.class
*.o
*.exe

# Carpetas de dependencias
node_modules/
vendor/

# Archivos de configuración personal
.env
*.local

# Archivos de sistema
.DS_Store
Thumbs.db

# Carpetas de builds
dist/
build/
```

---

## Resolución de conflictos

1. Git marcará los archivos con conflictos
2. Abre el archivo y busca `<<<<<<<`, `=======`, `>>>>>>>`
3. Edita para quedarte con la versión deseada
4. Añade el archivo resuelto:
   ```bash
   git add archivo.txt
   ```
5. Continúa el merge/rebase:
   ```bash
   git commit  # para merge
   git rebase --continue  # para rebase
   ```

---


> Usa `git help comando` para ver la documentación completa de cualquier comando. Ejemplo: `git help log`