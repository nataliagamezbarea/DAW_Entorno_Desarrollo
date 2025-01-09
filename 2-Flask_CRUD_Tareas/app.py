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
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        return f"<h1>¡Gracias, {username}! </h1> <p> Te contactaremos en {email}. </p>"

    # Mostrar JSON donde contienen las tareas es mejor tenerlo afuera de template (porque en templates irán los archivos HTML)

    with open ('data/tasks.json', encoding='utf-8') as  file :
        tasks=json.load(file)

    return render_template("form.html", tasks=tasks)


if __name__ == "__main__":
    app.run(debug=True)
