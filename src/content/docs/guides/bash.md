---
title: 🐚 BASH
description: A guide to use bash.
---

## 📁 NAVEGACIÓN Y ARCHIVOS

```bash
pwd                     # Directorio actual
ls                      # Listar archivos
ls -la                  # Listar todos (incluye ocultos) con detalles
cd ~                    # Ir a home
cd -                    # Ir al directorio anterior
mkdir nombre            # Crear directorio
touch archivo.txt       # Crear archivo vacío
cp origen destino       # Copiar archivo
cp -r origen destino    # Copiar directorio
mv origen destino       # Mover/Renombrar
rm archivo.txt          # Eliminar archivo
rm -r directorio        # Eliminar directorio
rm -rf directorio       # Eliminar forzado (¡CUIDADO!)
find . -name "*.txt"    # Buscar archivos
```

## 📝 MANIPULACIÓN DE TEXTO

```bash
cat archivo.txt         # Ver contenido
cat > archivo.txt       # Crear/escribir (Ctrl+D para salir)
cat >> archivo.txt      # Añadir al final
less archivo.txt        # Ver con paginación
head -n 10 archivo.txt  # Primeras 10 líneas
tail -n 10 archivo.txt  # Últimas 10 líneas
tail -f archivo.txt     # Seguir actualizaciones (logs)
grep "texto" archivo    # Buscar texto
grep -r "texto" ./      # Buscar recursivo
sed 's/old/new/g' file  # Reemplazar texto
awk '{print $1}' file   # Imprimir primera columna
wc -l archivo.txt       # Contar líneas
sort archivo.txt        # Ordenar
uniq archivo.txt        # Líneas únicas
```

## 🔧 PERMISOS

```bash
chmod 755 archivo       # rwxr-xr-x
chmod +x archivo.sh     # Hacer ejecutable
chown usuario archivo   # Cambiar propietario
chgrp grupo archivo     # Cambiar grupo
```

## 🚀 PROCESOS Y SISTEMA

```bash
ps aux                  # Procesos en ejecución
ps aux | grep bash      # Buscar proceso
kill PID                # Terminar proceso
kill -9 PID             # Forzar terminación
top                     # Monitor de procesos (presiona q para salir)
htop                    # Mejor que top (instalar si no)
df -h                   # Espacio en disco
du -sh *                # Tamaño de archivos/carpetas
free -h                 # Memoria RAM
uptime                  # Tiempo encendido
whoami                  # Usuario actual
hostname                # Nombre del equipo
uname -a                # Información del sistema
```

## 🔗 VARIABLES Y EXPANSIONES

```bash
nombre="Juan"           # Asignar variable
echo $nombre            # Usar variable
echo ${nombre}          # Lo mismo (más seguro)
echo "Hola $nombre"     # Con comillas dobles
echo 'Hola $nombre'     # Con comillas simples (no expande)

# Expansión de comandos
fecha=$(date)
fecha=`date`            # Sintaxis antigua

# Expansión aritmética
suma=$((2 + 2))

# Variables de entorno
export PATH=$PATH:/nuevo/dir
echo $PATH
echo $HOME
```

## 🔀 REDIRECCIÓN Y PIPES

```bash
comando > archivo.txt   # Redirigir salida (sobrescribe)
comando >> archivo.txt  # Redirigir salida (añade)
comando 2> errores.txt  # Redirigir errores
comando &> salida.txt   # Redirigir todo
comando < archivo.txt   # Entrada desde archivo

# Pipes (encadenar comandos)
ls -la | grep ".txt"    # Filtrar
cat archivo | sort | uniq  # Procesar
```

## 🧠 CONDICIONALES

```bash
if [ "$a" -eq "$b" ]; then
    echo "Son iguales"
elif [ "$a" -gt "$b" ]; then
    echo "a es mayor"
else
    echo "a es menor"
fi

# Operadores numéricos: -eq, -ne, -lt, -le, -gt, -ge
# Operadores de strings: =, !=, -z (vacío), -n (no vacío)
# Operadores de archivos: -f (existe), -d (directorio), -r (lectura), -w (escritura), -x (ejecutable)

# Operadores lógicos
[ "$a" -gt 10 ] && [ "$b" -lt 5 ]  # AND
[ "$a" -gt 10 ] || [ "$b" -lt 5 ]  # OR
! [ "$a" -gt 10 ]                   # NOT
```

## 🔄 BUCLES

```bash
# For con lista
for i in 1 2 3 4 5; do
    echo "Número: $i"
done

# For con rango
for i in {1..10}; do
    echo $i
done

# For con secuencia
for ((i=0; i<10; i++)); do
    echo $i
done

# For con archivos
for archivo in *.txt; do
    echo "Procesando $archivo"
done

# While
while [ "$i" -lt 10 ]; do
    echo $i
    ((i++))
done

# Until
until [ "$i" -ge 10 ]; do
    echo $i
    ((i++))
done
```

## 🛠️ FUNCIONES

```bash
# Definir función
mi_funcion() {
    echo "Hola $1"
    return 0
}

# O con function
function mi_funcion {
    echo "Hola $1"
}

# Llamar
mi_funcion "Mundo"

# Parámetros: $1, $2, ..., $@ (todos), $# (cantidad)
```

## 🎯 COMANDOS ÚTILES

```bash
echo "texto"            # Imprimir
printf "Formato %s\n" "texto"  # Imprimir con formato
sleep 5                 # Esperar 5 segundos
date                    # Fecha y hora
who                     # Usuarios conectados
history                 # Historial de comandos
!!                      # Último comando
!100                    # Ejecutar comando #100 del historial
alias                   # Ver alias
which comando           # Ubicación del comando
type comando            # Tipo de comando
man comando             # Manual
comando --help          # Ayuda
```

## 📋 TRUCOS ÚTILES

```bash
# Comentarios
# Esto es un comentario

# Comandos encadenados
cmd1 && cmd2            # Ejecuta cmd2 si cmd1 éxito
cmd1 || cmd2            # Ejecuta cmd2 si cmd1 falla
cmd1 ; cmd2             # Ejecuta ambos siempre

# Sustitución de comandos
echo "Fecha: $(date)"
echo "Fecha: `date`"    # Sintaxis antigua

# Expansión de llaves
echo {1..10}            # 1 2 3 4 5 6 7 8 9 10
echo {a..z}             # a b c ... z
mkdir {dir1,dir2,dir3}  # Crea 3 directorios

# Heredoc
cat << EOF
Esto es un
texto multilínea
EOF

# Ver salida y guardar
comando | tee archivo.txt

# Ejecutar en background
comando &

# Salir del script
exit 0                  # Éxito
exit 1                  # Error
```

---

# 🔗 GENERAR ALIAS EN BASH

## ALIAS TEMPORALES

```bash
# Crear alias (válido solo en la sesión actual)
alias ll='ls -la'
alias gs='git status'
alias gp='git pull'
alias ..='cd ..'
alias ...='cd ../..'

# Ver todos los alias
alias

# Eliminar alias
unalias ll
```

## ALIAS PERMANENTES

### Opción 1: Archivo ~/.bashrc (Recomendado)
```bash
# Abrir el archivo
nano ~/.bashrc

# Añadir al final:
# =============================================
# MIS ALIAS PERSONALES
# =============================================
alias ll='ls -la'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'
alias cls='clear'
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git log --oneline --graph'
alias gd='git diff'
alias ports='netstat -tulanp'
alias myip='curl ifconfig.me'
alias df='df -h'
alias du='du -h'
alias free='free -h'
alias psg='ps aux | grep'
alias mkdir='mkdir -pv'   # Crear directorios con -p y verbose
alias cp='cp -iv'         # Interactivo y verbose
alias mv='mv -iv'         # Interactivo y verbose
alias rm='rm -i'          # Interactivo (¡cuidado!)
alias please='sudo $(history -p !!)'  # Repetir con sudo
alias update='sudo apt update && sudo apt upgrade -y'  # Ubuntu/Debian
alias reload='source ~/.bashrc'  # Recargar bashrc

# Guardar y salir (Ctrl+X, Y, Enter)

# Recargar configuración
source ~/.bashrc
# o
. ~/.bashrc
```

### Opción 2: Archivo ~/.bash_aliases (Más organizado)
```bash
# Crear archivo separado
nano ~/.bash_aliases

# Añadir alias (mismo formato que arriba)

# En ~/.bashrc añadir (si no existe):
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# Recargar
source ~/.bashrc
```

## ALIAS CON ARGUMENTOS (Funciones)

```bash
# Los alias no aceptan argumentos directamente, usar funciones

# En ~/.bashrc o ~/.bash_aliases:
# Buscar archivos por nombre
findname() {
    find . -name "*$1*"
}

# Crear y entrar en directorio
mkcd() {
    mkdir -p "$1" && cd "$1"
}

# Extraer cualquier archivo comprimido
extract() {
    if [ -f "$1" ]; then
        case "$1" in
            *.tar.bz2)  tar xjf "$1" ;;
            *.tar.gz)   tar xzf "$1" ;;
            *.bz2)      bunzip2 "$1" ;;
            *.rar)      unrar e "$1" ;;
            *.gz)       gunzip "$1" ;;
            *.tar)      tar xf "$1" ;;
            *.tbz2)     tar xjf "$1" ;;
            *.tgz)      tar xzf "$1" ;;
            *.zip)      unzip "$1" ;;
            *.Z)        uncompress "$1" ;;
            *.7z)       7z x "$1" ;;
            *)          echo "'$1' no se puede extraer" ;;
        esac
    else
        echo "'$1' no es un archivo válido"
    fi
}

# Backups
backup() {
    cp "$1" "$1.bak"
}

# Ir al directorio de proyectos (ejemplo)
work() {
    cd ~/projects/"$1"
}
```

## EJEMPLOS PRÁCTICOS DE ALIAS

```bash
# ============ NAVEGACIÓN ============
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias ~='cd ~'
alias -='cd -'

# ============ LISTAR ARCHIVOS ============
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias lr='ls -ltr'      # Ordenar por fecha
alias lh='ls -lSh'      # Ordenar por tamaño

# ============ GIT ============
alias g='git'
alias gs='git status'
alias ga='git add'
alias gaa='git add --all'
alias gc='git commit -m'
alias gcm='git commit -m'
alias gp='git push'
alias gl='git pull'
alias gd='git diff'
alias gco='git checkout'
alias gb='git branch'
alias gm='git merge'
alias glog='git log --oneline --graph --decorate'

# ============ SISTEMA ============
alias ports='netstat -tulanp'
alias myip='curl -s ifconfig.me'
alias ping='ping -c 5'
alias cls='clear'
alias path='echo $PATH | tr ":" "\n"'   # Mostrar PATH en líneas
alias grep='grep --color=auto'
alias mkdir='mkdir -pv'

# ============ SEGURIDAD ============
alias rm='rm -i'         # Confirmar antes de borrar
alias cp='cp -iv'        # Interactivo y verbose
alias mv='mv -iv'        # Interactivo y verbose
alias ln='ln -iv'        # Interactivo y verbose

# ============ APT (Ubuntu/Debian) ============
alias upd='sudo apt update'
alias upg='sudo apt upgrade -y'
alias ins='sudo apt install'
alias rem='sudo apt remove'
alias search='apt search'
alias purge='sudo apt purge'
alias autoremove='sudo apt autoremove'

# ============ DOCKER ============
alias dps='docker ps'
alias dpsa='docker ps -a'
alias di='docker images'
alias drm='docker rm'
alias drmi='docker rmi'
alias dexec='docker exec -it'
alias dlogs='docker logs -f'
```

## RECARGAR ALIAS SIN REINICIAR

```bash
# Después de modificar ~/.bashrc o ~/.bash_aliases:
source ~/.bashrc
# o
. ~/.bashrc

# Solo recargar alias:
source ~/.bash_aliases  # Si usas archivo separado
```

## VER ALIAS ACTIVOS

```bash
# Ver todos
alias

# Ver alias específico
alias ll

# Buscar alias
alias | grep git

# Mostrar con formato
alias | sort
```

## ELIMINAR ALIAS

```bash
# Temporal (sesión actual)
unalias ll

# Eliminar alias personalizado
unalias ll

# Si está en ~/.bashrc, eliminar la línea y recargar
# source ~/.bashrc después de editar
```

## 🎯 MEJORES PRÁCTICAS

1. **Usar nombres cortos pero descriptivos**
2. **Documentar alias complejos** con comentarios
3. **No sobrescribir comandos importantes** sin precaución
4. **Agrupar por categoría** (git, navegación, sistema, etc.)
5. **Usar funciones para alias con argumentos**
6. **Mantener ~/.bash_aliases** separado para mejor organización
7. **Hacer backups** de tus configuraciones

---

## 📚 RECURSOS ADICIONALES

```bash
# Ayuda integrada
help [comando]          # Comandos built-in
man [comando]           # Manual completo
info [comando]          # Documentación extendida

# Documentación online
# https://www.gnu.org/software/bash/
# https://devdocs.io/bash/
```

---

**💡 PRO TIP:** Guarda este cheatsheet en tu home:
```bash
# Crear archivo con este contenido
nano ~/bash_cheatsheet.md
# O descargar versión en PDF
```