# Configuración de Entorno Virtual en Python

Un entorno virtual permite aislar las dependencias de tu proyecto de Python, asegurando que no interfieran con otras aplicaciones o proyectos. Aquí te explicamos cómo configurarlo.

## Requisitos Previos

1. Asegúrate de tener Python instalado en tu sistema. Verifica la versión ejecutando:
   ```sh
   python --version
   ```

## Crear un Entorno Virtual

1. Navega a la ruta de tu proyecto:

   ```sh
   cd 2-FLASK_CRUD_TAREAS
   ```

2. Crea el entorno virtual utilizando el módulo `venv`:

   ```sh
   python -m venv .venv
   ```

3. Instalar dependencias necesarias

   ```sh
   pip install -r requirements.txt
   ```
