---
title: My utils
description: Guía de trucos varios.
lastUpdated: 2026-06-29
---

### Eliminar con barra de progreso

```bash
# Opción 1: Con pv (requiere instalar pv)
rm -rv carpeta | pv -l -s $(find carpeta -type f -printf x | wc -c) > logfile

# Opción 2: Barra simple en Bash (sin pv)
total=$(find carpeta -type f | wc -l)
count=0
find carpeta -type f -print0 | while IFS= read -r -d '' archivo; do
    rm "$archivo"
    ((count++))
    echo -ne "Progreso: $count / $total\r"
done
echo ""
``` 

> ⚠️ Precaución: rm -rf es definitivo. Siempre verifica el directorio antes de ejecutar.


### Encontrar procesos que consumen mucha memória

```bash
ps aux --sort=-%mem | head -10
```

### Consultar IP pública

```bash
curl ifconfig.me
curl ipinfo.io/ip
curl -s https://api.ipify.org
```

### Backup con fecha

```bash
cp archivo.txt archivo-$(date +%Y%m%d).txt
```