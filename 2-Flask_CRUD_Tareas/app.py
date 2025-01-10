from flask import Flask, render_template, request, redirect, jsonify
import json

app = Flask(__name__)

# Función para cargar las tareas desde el archivo 'tasks.json'
def cargar_tareas():
    with open('data/tasks.json', encoding='utf-8') as file:
        return json.load(file)

# Función para guardar las tareas en el archivo 'tasks.json'
def guardar_tareas(tareas):
    with open('data/tasks.json', 'w', encoding='utf-8') as file:
        json.dump(tareas, file, ensure_ascii=False, indent=4)

# Ruta principal que maneja las solicitudes GET y POST
@app.route("/", methods=['GET', 'POST'])
def index():
    # Si el método es POST, se agrega una nueva tarea
    if request.method == 'POST':
        return agregar_tarea(request)
    # Cargar las tareas y mostrarlas en la página
    tareas = cargar_tareas()
    print(tareas)  # Imprimir las tareas en consola para depuración
    return render_template("to_do_list.html", tareas=tareas)

# Función para agregar una nueva tarea a la lista
def agregar_tarea(request):
    """Agregar una nueva tarea a la lista."""
    tareas = cargar_tareas()
    nombre_tarea = request.form['task_name']  # Nombre de la tarea
    descripcion_tarea = request.form['task_description']  # Descripción de la tarea

    # Obtener el último ID de tarea y asignar un nuevo ID incrementado
    ultimo_id = max(int(tarea['id']) for tarea in tareas) if tareas else 0
    nueva_tarea = {
        "id": ultimo_id + 1,  # ID único para la nueva tarea
        "name": nombre_tarea,
        "description": descripcion_tarea,
        "completed": False  # Estado inicial de la tarea (no completada)
    }

    tareas.append(nueva_tarea)  # Agregar la nueva tarea a la lista
    guardar_tareas(tareas)  # Guardar la lista actualizada de tareas

    return redirect('/')  # Redirigir al usuario a la página principal

# Ruta para eliminar una tarea por su ID
@app.route('/eliminar/<task_id>', methods=['DELETE'])
def eliminar(task_id):
    """Eliminar una tarea de la lista por su ID."""
    tareas = cargar_tareas()
    tareas = [tarea for tarea in tareas if str(tarea['id']) != task_id]  # Filtrar la tarea que se desea eliminar
    guardar_tareas(tareas)  # Guardar las tareas restantes
    return '', 204  # Respuesta vacía con código de éxito 204 (sin contenido)

# Ruta para actualizar el nombre y la descripción de una tarea por su ID
@app.route('/actualizar/<task_id>', methods=['POST'])
def actualizar(task_id):
    """Actualizar el nombre y la descripción de una tarea."""
    tareas = cargar_tareas()
    # Buscar la tarea por su ID y actualizar sus datos
    for tarea in tareas:
        if str(tarea['id']) == task_id:
            tarea['name'] = request.form['task_name']
            tarea['description'] = request.form['task_description']
            break
    guardar_tareas(tareas)  # Guardar la lista actualizada de tareas
    return redirect('/')  # Redirigir al usuario a la página principal

# Ruta para actualizar el estado (completado/no completado) de una tarea por su ID
@app.route('/actualizar-estado/<task_id>', methods=['POST'])
def actualizar_estado(task_id):
    """Actualizar el estado (completado/no completado) de una tarea."""
    nuevo_estado = request.json.get('completed', False)  # Obtener el nuevo estado desde el cuerpo de la solicitud
    tareas = cargar_tareas()

    # Buscar la tarea por su ID y actualizar su estado
    for tarea in tareas:
        if str(tarea['id']) == task_id:
            tarea['completed'] = nuevo_estado
            break

    guardar_tareas(tareas)  # Guardar la lista actualizada de tareas
    return '', 200  # Respuesta vacía con código de éxito 200

# Ejecutar la aplicación en modo de depuración
if __name__ == "__main__":
    app.run(debug=True)
