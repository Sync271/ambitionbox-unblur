const elements = document.querySelectorAll("[is-locked]");
const attributePattern = /^data-.*/;
elements?.forEach((element) => {
	Object.values(element.attributes).forEach((attribute) => {
		if (attributePattern.test(attribute.name)) {
			element.removeAttribute(attribute.name);
		}
	});
	element.style.filter = "";
});
