def parse(string):
	atoms = []
	brack_count = 0;
	escape = 0;
	atom = ''
	
	#CHECK IF STRING IS A GROUP
	if string[0] == '(':
		index = 1
		for each in string:
			if each == '(':
				brack_count += 1
			elif each == ')':
				brack_count -= 1
			if brack_count == 0:
				break
			index += 1
		if index == len(string):
			string = string[1:-1]

	for char in string:
		atom += char;
		if escape == 1:
			escape = 0;
		if char in ('(', '{', '['):
			brack_count += 1;
		elif char in (')', '}', ']'):
			brack_count -= 1;
		elif char == '\\':
			escape = 1;
		if escape == 0 and brack_count == 0:
			atoms.append(atom)
			atom = ''
	#print atoms
	return atoms
