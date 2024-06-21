export function getVacancyTitle(form) {
	const data = {
		isVacancy: form['vacancies'] ? true : false,
		vacancyTitle: form['vacancies']?.value || null,
	};

	console.log(data);

	return data;
}
