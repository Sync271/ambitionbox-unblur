const attributePattern = /^data-.*/;
const unBlurFn = () => {
	const elements = document.querySelectorAll("[is-locked]");
	elements?.forEach((element) => {
		Object.values(element.attributes).forEach((attribute) => {
			if (attributePattern.test(attribute.name)) {
				element.removeAttribute(attribute.name);
			}
		});
		element.style.filter = "";
	});
};

const removeOverlay = () => {
	const elements = document.querySelectorAll(".overlay");
	elements?.forEach((element) => {
		element.remove();
	});
};

const main = () => {
	unBlurFn();
	removeOverlay();
};

setInterval(main, 1000);
