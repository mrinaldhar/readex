def parse(string):
	atoms = []
	brack_count = 0;
	escape = 0;
	atom = ''
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