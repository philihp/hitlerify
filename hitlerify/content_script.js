walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bMuslims\b/g, "Jews");
	v = v.replace(/\bmuslims\b/g, "jews");
	v = v.replace(/\bMuslim\b/g, "Jew");
	v = v.replace(/\bmuslim\b/g, "jew");
	v = v.replace(/\bArabic\b/g, "Judaic");
	v = v.replace(/\barabic\b/g, "judaic");
	v = v.replace(/\bIslamic\b/g, "Jewish");
	v = v.replace(/\bislamic\b/g, "jewish");

	textNode.nodeValue = v;
}
