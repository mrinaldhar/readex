user_input = ''
treeNode = {}
treeNode['original'] = user_input
treeNode['children'] = []

print treeNode
startProcessing(treeNode)

def startProcessing(node):
	childrenArray = parser(node['original'])
	for i in range(0, len(childrenArray)):
		newNode = {}
		newNode['children'] = []
		newNode['original'] = childrenArray[i]
		node['children'].push(newNode)
	for i in range(0, len(treeNode['children']):
		startProcessing(treeNode['children'][i])