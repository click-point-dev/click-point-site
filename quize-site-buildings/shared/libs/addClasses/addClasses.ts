export function addClasses(element: HTMLElement, classes: string) {
	classes.split(' ').forEach(className => {
		const isClass = element.classList.contains(className);
		element.classList.toggle(classes, !isClass);
	});
}
