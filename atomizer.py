import parser
user_input = raw_input('text: ')
treeNode = {}
treeNode['original'] = user_input
treeNode['children'] = []

def startProcessing(node):
	childrenArray = parser.parse(node['original'])
	if childrenArray[0] == node['original']:
		print "Stopping"
		return

	for i in range(0, len(childrenArray)):
		newNode = {}
		newNode['original'] = childrenArray[i]
		newNode['children'] = []
		node['children'].append(newNode)

	for i in range(0, len(treeNode['children'])):
		startProcessing(treeNode['children'][i])


startProcessing(treeNode)
print treeNode