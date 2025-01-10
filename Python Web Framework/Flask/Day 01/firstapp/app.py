from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def index():
    return "<h1>Hello world Flask!!!</h1>"


@app.route('/hello', methods=['GET', 'POST', 'PUT'])
def hello():
    requestMethod = request.method

    if requestMethod == 'GET':
        return '<h1>You made a GET request, Hello World</h1>'
    elif requestMethod == 'POST':
        return 'You made a POST request'
    else:
        return 'The request is not authorized'


@app.route('/greet/<name>')
def greet(name):
    return f"<h1>Hello {name}</h1>"


@app.route('/add/<int:num1>/<int:num2>')
def add(num1, num2):
    # sum = int(num1) + int(num2)
    sum = num1 + num2
    return f"<h1>Sum: {sum}</h1>"


@app.route('/handle_url_params')
def handle_params():

    if 'greeting' in request.args.keys() and 'name' in request.args.keys():
        greeting = request.args['greeting']
        name = request.args.get('name')
        # return str(request.args)
        return f"{greeting} {name}"
    else:
        return "Some parameters are missing"


if __name__ == '__main__':
    app.run(host='localhost', port=5500, debug=True)
