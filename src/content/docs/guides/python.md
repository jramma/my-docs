---
title: Python
description: Cheatsheet python
lastUpdated: 2026-07-08
---

# Python Cheatsheet

> Chuleta de referencia rápida de Python. Indexada por títulos para Obsidian.

---

## Variables y tipos

### Tipos básicos
```python
entero = 42              # int
decimal = 3.14           # float
texto = "hola"           # str
booleano = True          # bool
nada = None              # NoneType
complejo = 2 + 3j        # complex
```

### Conversión de tipos (casting)
```python
int("42")        # 42
float("3.14")    # 3.14
str(42)          # "42"
bool(0)          # False
list("abc")      # ['a', 'b', 'c']
int("1010", 2)   # 10 (binario a decimal)
```

### Comprobar el tipo
```python
type(x)                  # devuelve el tipo
isinstance(x, int)       # True si x es int
isinstance(x, (int, float))  # True si es int O float
```

---

## Strings (cadenas de texto)

### Operaciones básicas
```python
s = "Hola Mundo"
len(s)              # 10
s.upper()           # "HOLA MUNDO"
s.lower()           # "hola mundo"
s.title()           # "Hola Mundo"
s.strip()           # quita espacios de los extremos
s.replace("a", "e") # reemplaza
s.split(" ")        # ['Hola', 'Mundo']
",".join(lista)     # une lista con coma
```

### f-strings (formateo moderno)
```python
nombre = "Ana"
edad = 30
f"{nombre} tiene {edad} años"
f"{3.14159:.2f}"        # "3.14" (2 decimales)
f"{1000000:,}"          # "1,000,000" (separador de miles)
f"{0.25:.1%}"           # "25.0%" (porcentaje)
f"{42:05d}"             # "00042" (relleno con ceros)
f"{nombre=}"            # "nombre='Ana'" (debug)
```

### Búsqueda y comprobación
```python
s.startswith("Hola")    # True
s.endswith("do")        # True
"Mundo" in s            # True
s.find("Mundo")         # índice o -1
s.count("o")            # nº de apariciones
s.isdigit()             # solo dígitos
s.isalpha()             # solo letras
```

### Slicing (rebanado)
```python
s = "Python"
s[0]        # 'P'
s[-1]       # 'n'
s[0:3]      # 'Pyt'
s[2:]       # 'thon'
s[:3]       # 'Pyt'
s[::-1]     # 'nohtyP' (invertir)
s[::2]      # 'Pto' (de 2 en 2)
```

---

## Listas

### Creación y acceso
```python
lista = [1, 2, 3, 4, 5]
lista[0]        # 1
lista[-1]       # 5
lista[1:3]      # [2, 3]
```

### Métodos comunes
```python
lista.append(6)         # añade al final
lista.insert(0, 0)      # inserta en posición
lista.extend([7, 8])    # añade varios
lista.remove(3)         # elimina primer valor 3
lista.pop()             # saca y devuelve el último
lista.pop(0)            # saca por índice
lista.index(4)          # busca posición
lista.count(2)          # cuenta apariciones
lista.sort()            # ordena in-place
lista.sort(reverse=True) # descendente
lista.reverse()         # invierte
sorted(lista)           # devuelve copia ordenada
lista.clear()           # vacía
```

### List comprehensions
```python
[x*2 for x in range(5)]              # [0, 2, 4, 6, 8]
[x for x in range(10) if x % 2 == 0] # pares
[x if x > 0 else 0 for x in nums]    # con else
[(x, y) for x in a for y in b]       # anidado
```

### Operaciones útiles
```python
sum(lista)          # suma
max(lista)          # máximo
min(lista)          # mínimo
len(lista)          # longitud
any(lista)          # True si algún elemento es True
all(lista)          # True si todos son True
list(reversed(lista))
list(set(lista))    # eliminar duplicados
```

---

## Diccionarios

### Creación y acceso
```python
d = {"nombre": "Ana", "edad": 30}
d["nombre"]             # "Ana"
d.get("edad")           # 30
d.get("pais", "N/A")    # valor por defecto si no existe
```

### Métodos comunes
```python
d.keys()            # claves
d.values()          # valores
d.items()           # pares (clave, valor)
d.update({"pais": "ES"})  # añade/actualiza
d.pop("edad")       # elimina y devuelve
d.setdefault("x", 0)  # devuelve o crea con default
"nombre" in d       # comprueba clave
del d["nombre"]     # elimina
```

### Recorrer un diccionario
```python
for clave, valor in d.items():
    print(clave, valor)

for clave in d:
    print(clave)
```

### Dict comprehensions
```python
{k: v for k, v in pares}
{x: x**2 for x in range(5)}       # {0:0, 1:1, 2:4...}
{k: v for k, v in d.items() if v > 0}
```

---

## Tuplas y sets

### Tuplas (inmutables)
```python
t = (1, 2, 3)
t[0]                # 1
a, b, c = t         # desempaquetado
x, *resto = (1, 2, 3, 4)  # x=1, resto=[2,3,4]
```

### Sets (conjuntos, sin duplicados)
```python
s = {1, 2, 3}
s.add(4)
s.remove(2)
s.discard(9)        # no falla si no existe
a | b               # unión
a & b               # intersección
a - b               # diferencia
a ^ b               # diferencia simétrica
```

---

## Control de flujo

### Condicionales
```python
if x > 0:
    print("positivo")
elif x == 0:
    print("cero")
else:
    print("negativo")

# Operador ternario
resultado = "par" if x % 2 == 0 else "impar"
```

### match (Python 3.10+)
```python
match comando:
    case "inicio":
        arrancar()
    case "parar" | "stop":
        detener()
    case _:
        print("desconocido")
```

### Bucles for
```python
for i in range(5):          # 0,1,2,3,4
    print(i)

for i in range(2, 10, 2):   # 2,4,6,8
    print(i)

for i, valor in enumerate(lista):  # índice + valor
    print(i, valor)

for a, b in zip(lista1, lista2):   # en paralelo
    print(a, b)
```

### Bucles while
```python
while x < 10:
    x += 1
    if x == 5:
        continue    # salta a la siguiente iteración
    if x == 8:
        break       # sale del bucle
else:
    print("terminado sin break")
```

---

## Funciones

### Definición básica
```python
def saludar(nombre):
    return f"Hola {nombre}"

def sumar(a, b=0):          # valor por defecto
    return a + b
```

### Argumentos variables
```python
def funcion(*args, **kwargs):
    print(args)     # tupla de posicionales
    print(kwargs)   # dict de nombrados

funcion(1, 2, 3, x=10, y=20)
```

### Lambda (funciones anónimas)
```python
doble = lambda x: x * 2
sorted(lista, key=lambda p: p.edad)
```

### Type hints (anotaciones de tipo)
```python
def dividir(a: int, b: int) -> float:
    return a / b

def procesar(nombre: str, edad: int | None = None) -> dict:
    return {"nombre": nombre, "edad": edad}
```

---

## Manejo de errores (try/except)

### Estructura básica
```python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("No se puede dividir por cero")
except (ValueError, TypeError) as e:
    print(f"Error: {e}")
else:
    print("Todo bien")     # si no hubo error
finally:
    print("Siempre se ejecuta")
```

### Lanzar excepciones
```python
raise ValueError("mensaje de error")
raise Exception(f"Fallo con id {id}")
```

### Excepciones personalizadas
```python
class MiError(Exception):
    pass

raise MiError("algo salió mal")
```

---

## Clases y objetos

### Definición básica
```python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        return f"Soy {self.nombre}"

    def __str__(self):          # representación en texto
        return f"Persona({self.nombre})"

p = Persona("Ana", 30)
p.saludar()
```

### Herencia
```python
class Empleado(Persona):
    def __init__(self, nombre, edad, salario):
        super().__init__(nombre, edad)
        self.salario = salario
```

### Métodos especiales útiles
```python
__init__     # constructor
__str__      # str(obj) / print
__repr__     # representación técnica
__len__      # len(obj)
__eq__       # obj1 == obj2
__lt__       # obj1 < obj2
```

### Propiedades y métodos de clase
```python
class Circulo:
    def __init__(self, radio):
        self._radio = radio

    @property
    def area(self):
        return 3.14 * self._radio ** 2

    @staticmethod
    def descripcion():
        return "Un círculo"

    @classmethod
    def unitario(cls):
        return cls(1)
```

### Dataclasses (menos código)
```python
from dataclasses import dataclass

@dataclass
class Punto:
    x: int
    y: int = 0

p = Punto(3, 4)     # __init__, __repr__, __eq__ automáticos
```

---

## Ficheros

### Leer y escribir
```python
# Leer todo
with open("archivo.txt", "r", encoding="utf-8") as f:
    contenido = f.read()

# Leer líneas
with open("archivo.txt") as f:
    for linea in f:
        print(linea.strip())

# Escribir (sobrescribe)
with open("salida.txt", "w", encoding="utf-8") as f:
    f.write("hola\n")

# Añadir al final
with open("salida.txt", "a") as f:
    f.write("más texto\n")
```

### JSON
```python
import json

# Objeto Python -> string JSON
json.dumps(datos, indent=2, ensure_ascii=False)

# String JSON -> objeto Python
json.loads(texto)

# Leer/escribir fichero JSON
with open("datos.json") as f:
    datos = json.load(f)

with open("datos.json", "w") as f:
    json.dump(datos, f, indent=2)
```

---

## Módulos útiles de la librería estándar

### datetime (fechas y horas)
```python
from datetime import datetime, date, timedelta

ahora = datetime.now()
hoy = date.today()
datetime.now().strftime("%Y-%m-%d %H:%M:%S")
datetime.strptime("2026-07-08", "%Y-%m-%d")
manana = hoy + timedelta(days=1)
diferencia = (fecha1 - fecha2).days
```

### os y pathlib (rutas y sistema)
```python
from pathlib import Path

p = Path("carpeta/archivo.txt")
p.exists()          # existe
p.name              # "archivo.txt"
p.suffix            # ".txt"
p.parent            # "carpeta"
p.stem              # "archivo"
list(Path(".").glob("*.py"))   # busca ficheros

import os
os.getenv("VARIABLE")           # variable de entorno
os.environ["PATH"]
```

### collections
```python
from collections import Counter, defaultdict, deque

Counter([1,1,2,3,3,3])      # {3:3, 1:2, 2:1}
Counter(texto).most_common(3)  # top 3

d = defaultdict(list)       # dict con valor por defecto
d["clave"].append(1)        # no falla si no existe

cola = deque([1,2,3])       # cola de doble extremo
cola.appendleft(0)
cola.popleft()
```

### itertools
```python
from itertools import chain, combinations, product, groupby

list(chain([1,2], [3,4]))       # [1,2,3,4]
list(combinations([1,2,3], 2))  # pares
list(product([1,2], [3,4]))     # producto cartesiano
```

### random
```python
import random

random.randint(1, 10)       # entero aleatorio (ambos incluidos)
random.choice(lista)        # elemento aleatorio
random.shuffle(lista)       # baraja in-place
random.sample(lista, 3)     # 3 sin repetir
random.random()             # float entre 0 y 1
```

### math
```python
import math

math.sqrt(16)       # 4.0
math.ceil(3.2)      # 4
math.floor(3.8)     # 3
math.pi             # 3.14159...
math.pow(2, 10)     # 1024.0
abs(-5)             # 5 (builtin, sin import)
round(3.567, 2)     # 3.57 (builtin)
```

---

## Comprehensions y funcionales

### map, filter, reduce
```python
list(map(lambda x: x*2, lista))
list(filter(lambda x: x > 0, lista))

from functools import reduce
reduce(lambda a, b: a + b, lista)   # suma acumulada
```

### Generadores
```python
def contador(n):
    for i in range(n):
        yield i             # genera bajo demanda

gen = (x**2 for x in range(10))   # generator expression
next(gen)
```

---

## Entornos virtuales y pip

### venv
```bash
python -m venv .venv                 # crear entorno
source .venv/bin/activate            # activar (Linux/Mac)
.venv\Scripts\activate               # activar (Windows)
deactivate                           # desactivar
```

### pip
```bash
pip install paquete
pip install paquete==1.2.3           # versión específica
pip install -r requirements.txt      # desde fichero
pip freeze > requirements.txt        # exportar dependencias
pip list                             # listar instalados
pip uninstall paquete
```

---

## Trucos y atajos útiles

### Desempaquetado y intercambio
```python
a, b = b, a                 # intercambiar variables
primero, *resto = lista     # desempaquetado extendido
{**d1, **d2}                # fusionar diccionarios
[*lista1, *lista2]          # fusionar listas
```

### Operadores útiles
```python
x = valor or "por defecto"  # si valor es falsy
x = a if cond else b        # ternario
lista = lista or []         # evita None
resultado = d.get(k) or defecto
```

### Walrus operator (:=) Python 3.8+
```python
if (n := len(lista)) > 10:
    print(f"Larga: {n}")

while (linea := f.readline()):
    procesar(linea)
```

### Enumerar con índice inicial
```python
for i, x in enumerate(lista, start=1):
    print(i, x)             # empieza en 1
```

---

## Comandos rápidos en terminal

```bash
python script.py            # ejecutar script
python -m modulo            # ejecutar módulo
python -c "print('hola')"   # ejecutar código directo
python -i script.py         # ejecutar y quedarse en consola
python -m http.server 8000  # servidor web rápido
python -m json.tool f.json  # formatear JSON
```
