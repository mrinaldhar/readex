
from flask import Flask, render_template, request, jsonify, Response
import json

import parser
treeNode = {}
def startProcessing(node):
	childrenArray = parser.parse(node['original'])
	print childrenArray

	if childrenArray[0] == node['original']:
		print "Stopping"
		return

	for i in range(0, len(childrenArray)):
		newNode = {}
		newNode['original'] = childrenArray[i]
		newNode['children'] = []
		node['children'].append(newNode)

	for i in range(0, len(node['children'])):
		print "Calling on: ", node['children'][i]
		startProcessing(node['children'][i])


# Initialize the Flask application
app = Flask(__name__)


# This route will show a form to perform an AJAX request
# jQuery is loaded to execute the request and update the
# value of the operation
@app.route('/')
def index():
	return "hi"

# Route that will process the AJAX request, sum up two
# integer numbers (defaulted to zero) and return the
# result as a proper JSON response (Content-Type, etc.)
@app.route('/_get_user_input')
def get_user_input():
	user_input = str(request.args.get('input'))
	# print request.args.get('input')
	treeNode = {}
	treeNode['original'] = user_input
	treeNode['children'] = []
	startProcessing(treeNode)
	resp = Response(json.dumps(treeNode))
	resp.headers['Access-Control-Allow-Origin'] = 'http://localhost'
	print resp
	return resp

if __name__ == '__main__':
	app.run(
		host="0.0.0.0",
		port=int("8000"),
		debug=True
	)


