from flask import Flask, render_template, request
import json

app = Flask(__name__)

@app.route("/")
def index():
    title = "Bienvenido a Flask con Jinja2"
    description = "Esta página demuestra las características principales de Jinja2."
    return render_template("index.html", title=title, description=description)

@app.route('/form', methods=['GET', 'POST'])
def form():
    # Leer el archivo JSON
    with open('data/tasks.json', encoding='utf-8') as file:
        tasks = json.load(file)

    if request.method == 'POST':
        task_name = request.form['task_name']
        task_description = request.form['task_description']
        
        # Crear una nueva tarea
        new_task = {"name": task_name, "description": task_description}
        tasks.append(new_task)  # Agregar la nueva tarea

        # Sobrescribir el archivo tasks.json
        with open('data/tasks.json', 'w', encoding='utf-8') as file:
            json.dump(tasks, file, ensure_ascii=False, indent=4)

    # Mostrar las tareas en el formulario
    return render_template("form.html", tasks=tasks)

if __name__ == "__main__":
    app.run(debug=True)
