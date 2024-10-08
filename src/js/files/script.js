import { flsModules } from './modules.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import JustValidate from 'just-validate';
import { getVacancyTitle } from '../libs/getVacancyTitle.js';
import Swiper, { Autoplay } from 'swiper';
import '../../scss/base/swiper.scss';

//+ GLOBAL
const isPhoneSize = window.matchMedia('(max-width: 1024px)').matches;

//++ determining the user's city
let USER_CITY = localStorage.getItem('_userCity') || null;
// reset userCity hash
setTimeout(() => {
	if (USER_CITY && localStorage.getItem('_userCity')) {
		localStorage.removeItem('_userCity');
		// console.log('_userCity cleared');
	}
}, 1000 * 3600);

//+ ХЭЛЕПЕРЫ
function addClass(element, className) {
	if (element) {
		element.classList.add(className);
	}
}

function removeClass(element, className) {
	if (element) {
		element.classList.remove(className);
	}
}

///==========================================

window.addEventListener('DOMContentLoaded', () => {
	//+ ДОБАВЛЕНИЕ КЛАССОВ ЭЛЕМЕНТАМ ПРИ СКРОЛЕ НА ОПРЕДЕЛЕННУЮ ВЕЛИЧИНУ
	addClassOnScroll();
	function addClassOnScroll() {
		const appearingElement = Array.from(document.querySelectorAll('[data-appearing]'));
		if (!appearingElement.length) return;

		appearingElement.forEach((elem) => {
			const appearingValue = elem.dataset.appearing || 800;

			if (+appearingValue === 0) {
				elem.classList.add('_appearing');
				const position = elem.dataset.position || 'fixed';
				const left = elem.dataset.left;
				const right = elem.dataset.right;
				const top = elem.dataset.top;
				const bottom = elem.dataset.bottom;

				elem.style.position = position;
				left ? (elem.style.left = left + 'px') : null;
				right ? (elem.style.right = right + 'px') : null;
				top ? (elem.style.top = top + 'px') : null;
				bottom ? (elem.style.bottom = bottom + 'px') : null;
				elem.style.top = top;
			}

			//todo: remove eventListener after deleting element
			window.addEventListener('scroll', () => {
				if (!elem) return;

				if (window.scrollY >= +appearingValue) {
					elem.classList.add('_appearing');
				} else {
					elem.classList.remove('_appearing');
				}
			});
		});
	}

	//+ УДАЛЕНИЕ ЭЛЕМЕНТОВ НА ПК / МОБИЛКЕ
	//todo: refactor function with screen width argument

	removeElemOnScreenSize();
	function removeElemOnScreenSize() {
		const screenSizeElement = Array.from(document.querySelectorAll('[data-screenWidth]'));

		if (!screenSizeElement.length) return;

		screenSizeElement.forEach((item) => {
			item.style.visibility = !isPhoneSize ? 'hidden' : 'unset';
		});
	}

	//+ GSAP АНИМАЦИИ

	//++ страница О компании - главный экран

	const aboutMainImage = document.querySelector('.first-screen-about__main-image');

	if (aboutMainImage) {
		gsap.from(aboutMainImage, {
			y: '110%',
			x: 200,
			duration: 5,
			delay: 2.5,
			ease: 'power4.out',
		});
		gsap.from(
			aboutMainImage,
			{
				opacity: 0.5,
				duration: 2,
				delay: 1,
			},
			'<',
		);
	}

	//++ о компании - звездный фон

	const aboutBgStars = document.querySelector('.first-screen-about__background');

	if (aboutBgStars) {
		gsap.from(aboutBgStars, {
			scale: 2.2,
			transformOrigin: 'center bottom',
			duration: 7,
			delay: 1,
			ease: 'power4.out',
		});
	}

	//++ О компании - декор

	const aboutDecor1 = document.querySelector('.first-screen-about__decor-1');
	const aboutDecor2 = document.querySelector('.first-screen-about__decor-2');
	const aboutDecor3 = document.querySelector('.first-screen-about__decor-3');

	if (aboutDecor1) {
		gsap.from(aboutDecor1, { right: -1000, y: '-100%', duration: 7, delay: 1, ease: 'power4.out' });
		gsap.from(aboutDecor1, { opacity: 0, duration: 4, delay: 1, ease: 'power4.out' }, '<');
	}

	if (aboutDecor2) {
		gsap.from(aboutDecor2, { y: 1500, duration: 7, delay: 1, ease: 'power4.out' });
		gsap.from(aboutDecor2, { opacity: 0, duration: 8, delay: 1, ease: 'power4.out' }, '<');
	}

	if (aboutDecor3) {
		gsap.from(aboutDecor3, {
			top: '15%',
			right: '30%',
			width: 70,
			duration: 7,
			delay: 1,
			ease: 'power4.out',
		});
		gsap.from(aboutDecor3, { opacity: 0, duration: 7, delay: 1, ease: 'power4.out' }, '<');
	}

	//++ страница Главная, Сервисы - главный экран

	const bgStarsMain = document.querySelector('.page__first-screen .backgrount-stars img');
	const bgStarsServices = document.querySelector('.first-screen-services__background img');

	if (bgStarsMain) {
		gsap.from(bgStarsMain, {
			x: 200,
			y: -300,
			rotate: -180,
			scale: 2,
			duration: 8,
			delay: 1,
			ease: 'power2.out',
		});
	}

	if (bgStarsServices) {
		gsap.from(bgStarsServices, {
			rotate: 180,
			scale: 1.5,
			ease: 'power4.out',
			duration: 8,
			delay: 1,
		});
	}

	//++ страница Главная - главное изображение

	const mainImage = document.querySelector('.page .first-screen__image');
	const mainLens = document.querySelector('.page .first-screen__image img:nth-child(2)');

	if (mainImage) {
		gsap.from(mainImage, {
			opacity: 0,
			duration: 0.25,
			delay: 1,
			ease: 'power4.out',
		});

		gsap.from(mainImage, {
			scale: 0.3,
			duration: 8,
			delay: 1,
			ease: 'power4.out',
		});
	}

	if (mainLens) {
		gsap.from(mainLens, {
			top: '52%',
			left: '64%',
			rotate: -90,
			duration: 4,
			delay: 2,
			ease: 'power1.out',
		});
	}

	//++ страница Главная - декор
	const mainDecorTop = document.querySelector('.first-screen__decor_top');
	const mainDecorCenter = document.querySelector('.first-screen__decor_center');
	const mainDecorBottom = document.querySelector('.first-screen__decor_bottom');

	if (mainDecorTop) {
		gsap.from(mainDecorTop, {
			x: '-20vw',
			y: '80vh',
			scale: 0,
			filter: 'blur(0px)',
			duration: 7,
			delay: 1,
			ease: 'power2.out',
		});
	}

	if (mainDecorCenter) {
		gsap.from(mainDecorCenter, {
			x: '+=20vw',
			y: '+=45vh',
			scale: 1.5,
			filter: 'blur(0px)',
			duration: 6,
			delay: 1,
			ease: 'power4.out',
		});
	}

	if (mainDecorBottom) {
		gsap.from(mainDecorBottom, {
			x: '-=150',
			y: '45vh',
			scale: 3,
			duration: 6,
			delay: 1,
			ease: 'power4.out',
		});
	}

	//++ главная форма
	gsap.registerPlugin(ScrollTrigger);

	const formBackground = document.querySelector('.main-form__background img');
	if (formBackground) {
		gsap.from(formBackground, {
			scrollTrigger: {
				trigger: '.main-form__background img',
				toggleActions: 'restart none none none',
			},
			rotate: -270,
			duration: 7,
			delay: 0,
			ease: 'power4.out',
		});
	}

	const formDecorTop = document.querySelector('.main-form .decor__image:nth-child(1)');
	if (formDecorTop) {
		gsap.from(formDecorTop, {
			scrollTrigger: {
				trigger: '.main-form__image',
				toggleActions: 'restart none none none',
			},
			x: '200',
			y: '300',
			scale: '0.2, 0',
			duration: 4,
			delay: 1,
			filter: 'blur(1px)',
			ease: 'power4.out',
		});
	}

	const formDecorMiddle = document.querySelector('.main-form .decor__image:nth-child(3)');
	if (formDecorMiddle) {
		gsap.from(formDecorMiddle, {
			scrollTrigger: {
				trigger: '.main-form__image',
				toggleActions: 'restart none none none',
			},
			x: '+=600',
			y: '-50px',
			scale: '0.2, 0',
			duration: 5,
			delay: 0,
			filter: 'blur(10px)',
			ease: 'power4.out',
		});
	}

	const formDecorBottom = document.querySelector('.main-form .decor__image:nth-child(2)');
	if (formDecorBottom) {
		gsap.from(formDecorBottom, {
			scrollTrigger: {
				trigger: '.main-form__image',
				toggleActions: 'restart none none none',
			},
			x: 50,
			y: 150,
			duration: 6,
			delay: 1,
			ease: 'power4.out',
		});
	}

	const formLens = document.querySelector('.main-form__image :nth-child(2)');

	if (formLens) {
		gsap.from(formLens, {
			scrollTrigger: {
				trigger: '.main-form__image',
				toggleActions: 'restart none none none',
			},
			x: '82%',
			y: '170%',
			rotate: 90,
			duration: 5,
			delay: 0.7,
			ease: 'power4.out',
		});
	}

	//++ page-404
	const image404 = document.querySelector('.page-404 .first-screen-about__image svg');

	if (image404) {
		gsap.set(image404, { visibility: 'visible' });
		gsap.to('#headStripe', {
			y: 0.5,
			rotation: 1,
			yoyo: true,
			repeat: -1,
			ease: 'sine.inOut',
			duration: 1,
		});
		gsap.to('#spaceman', {
			y: 0.5,
			rotation: 1,
			yoyo: true,
			repeat: -1,
			ease: 'sine.inOut',
			duration: 1,
		});
		gsap.to('#craterSmall', {
			x: -3,
			yoyo: true,
			repeat: -1,
			duration: 1,
			ease: 'sine.inOut',
		});
		gsap.to('#craterBig', {
			x: 3,
			yoyo: true,
			repeat: -1,
			duration: 1,
			ease: 'sine.inOut',
		});
		gsap.to('#planet', {
			rotation: -2,
			yoyo: true,
			repeat: -1,
			duration: 1,
			ease: 'sine.inOut',
			transformOrigin: '50% 50%',
		});

		gsap.to('#starsBig g', {
			rotation: 'random(-30,30)',
			transformOrigin: '50% 50%',
			yoyo: true,
			repeat: -1,
			ease: 'sine.inOut',
		});
		gsap.fromTo(
			'#starsSmall g',
			{ scale: 0, transformOrigin: '50% 50%' },
			{ scale: 1, transformOrigin: '50% 50%', yoyo: true, repeat: -1, stagger: 0.1 },
		);
		gsap.to('#circlesSmall circle', {
			y: -4,
			yoyo: true,
			duration: 1,
			ease: 'sine.inOut',
			repeat: -1,
		});
		gsap.to('#circlesBig circle', {
			y: -2,
			yoyo: true,
			duration: 1,
			ease: 'sine.inOut',
			repeat: -1,
		});

		gsap.set('#glassShine', { x: -68 });

		gsap.to('#glassShine', {
			x: 80,
			duration: 2,
			rotation: -30,
			ease: 'expo.inOut',
			transformOrigin: '50% 50%',
			repeat: -1,
			repeatDelay: 8,
			delay: 2,
		});
	}

	//+ РАБОТА С ФОРМАМИ
	const forms = document.forms;

	if (forms.length) {
		Array.from(forms).forEach((form) => {
			//++ обработка input name=fn
			const fn = form.querySelector('input[required]');
			if (fn) {
				setTimeout(function () {
					if (fn.hasAttribute('required')) fn.removeAttribute('required');
				}, 1500);
			}

			//++ маска телефона
			const telInput = form.querySelector('input[type="tel"]');
			const inputMask = new Inputmask('+7 (999)-999-99-99');
			if (telInput) {
				inputMask.mask(telInput);
			}

			const formId = form.getAttribute('id');
			const filesInput = form['file[]'];
			let filesList;

			if (!formId) {
				console.log(form, 'У формы отсутствует ID - валидация полей input невозможна');
				return;
			}

			const validate = new JustValidate(`#${formId}`, {
				validateBeforeSubmitting: true,
				// testingMode: true,
			});

			validateForm(form, validate, telInput);

			if (filesInput) {
				filesInput.addEventListener('change', (event) => {
					const filesPlaceholder = form.querySelector('#formFilesPlaceholder');
					let files = Array.from(event.target.files);

					function handleOnClick(event) {
						filesList = filesList.filter((file) => file.name !== event.target.innerHTML);
						filesPlaceholder.innerHTML = '';
						paintList(filesList, filesPlaceholder);
						// console.log('onClick--', filesList);
						if (filesList.length === 0) filesPlaceholder.removeEventListener('click', handleOnClick);
					}

					filesList = mountFilesList(files, filesPlaceholder);

					filesPlaceholder.addEventListener('click', handleOnClick);
					// console.log('onChange--', filesList);
				});
			}

			validate.onSuccess((event) => {
				// console.log(filesList);
				submitForm(event.target, filesList);
			});
		});
	}

	//++ загрузка файлов в форму

	// function loadFilesToForm(form) {
	// 	const formFileInput = form.querySelector('#filesInput');
	// 	const filesPlaceholder = form.querySelector('#formFilesPlaceholder');

	// 	if (!formFileInput || !filesPlaceholder) return;

	// 	let filesInputList;

	// 	let filesObserver = new MutationObserver(() => {
	// 		const removeFilesButtons = document.querySelectorAll('#deleteFileButton');

	// 		Array.from(removeFilesButtons).forEach((button) => removeFiles(button));
	// 	});

	// 	filesObserver.observe(filesPlaceholder, {
	// 		childList: true, // наблюдать за непосредственными детьми
	// 		subtree: false, // и более глубокими потомками
	// 		characterDataOldValue: false, // передавать старое значение в колбэк
	// 	});

	// 	function removeFiles(item) {
	// 		item.addEventListener('click', function (e) {
	// 			filesInputList = filesInputList.filter((item) => item.name !== e.target.innerHTML);
	// 			renderFilesList(filesInputList, filesPlaceholder);
	// 		});
	// 	}

	// 	function renderFilesList(list, node) {
	// 		node.innerHTML = '';

	// 		list.forEach((item) =>
	// 			node.insertAdjacentHTML(
	// 				'beforeend',
	// 				`	<div class="input-file__btn">
	// 					<span class="_icon-trash" id="deleteFileButton">${item.name}</span>
	// 				</div>
	// 			`
	// 			)
	// 		);
	// 	}

	// 	function loadFiles(input, filesPlaceholder) {
	// 		if (!input || !filesPlaceholder) return;

	// 		const files = input.files;

	// 		let reader = new FileReader();
	// 		reader.readAsDataURL(new Blob(files));

	// 		reader.onload = function () {
	// 			if (Array.from(files).some((file) => file.size > 15000000)) return;

	// 			filesInputList = [...Array.from(files)];

	// 			renderFilesList(filesInputList, filesPlaceholder);
	// 		};

	// 		reader.onerror = function () {
	// 			alert('C загрузкой файла вохникли проблемы. Попробуйте еще раз');
	// 		};
	// 	}

	// 	formFileInput.addEventListener('change', () => {
	// 		loadFiles(formFileInput, filesPlaceholder);
	// 	});
	// }

	//++ валидация форм

	function validateForm(form, validate, telInput) {
		if (form.name) {
			validate.addField('#name', [
				{
					rule: 'required',
					errorMessage: 'Имя обязательно',
				},
				{
					rule: 'customRegexp',
					value: /^[-А-Яа-яЁё A-Za-z]*$/,
					errorMessage: 'Только буквы, тире, пробел',
				},
				{
					rule: 'minLength',
					value: 3,
					errorMessage: 'Минимум 3 символа',
				},
				{
					rule: 'maxLength',
					value: 30,
					errorMessage: 'Не более 30 символов',
				},
			]);
		}

		if (form.phone) {
			validate.addField('#phone', [
				{
					rule: 'required',
					errorMessage: 'Телефон обязателен',
				},
				{
					rule: 'function',
					validator: function () {
						let phone;
						if (telInput.inputmask) {
							phone = telInput.inputmask.unmaskedvalue();
							// return phone.length === 10;
						}
						return Number(phone) && phone.length === 10 ? true : false;
					},
					errorMessage: 'Введите 10 цифр',
				},
			]);
		}

		if (form['file[]']) {
			validate.addField('#filesInput', [
				{
					rule: 'files',
					errorMessage: 'Файлы не более 15 Мб',
					value: {
						files: {
							maxSize: 15000000,
						},
					},
				},
				{
					rule: 'maxFilesCount',
					value: 3,
					errorMessage: 'Не более 3 файлов',
				},
			]);
		}
	}

	function mountFilesList(files, placeholder) {
		placeholder.innerHTML = '';

		const isOverSize = files.some((file) => file.size > 15 * 1024 * 1024);

		if (files && !isOverSize && files.length <= 3) {
			paintList(files, placeholder);
		}

		return files;
	}

	function paintList(files, placeholder) {
		files.forEach((file) => {
			placeholder.insertAdjacentHTML(
				'beforeend',
				`	<div class="input-file__btn">
				<span class="_icon-trash" id="deleteFileButton">${file.name}</span>
				</div>
				`,
			);
		});
	}

	async function submitForm(form, filesList = []) {
		const formData = new FormData(form);
		const method = form.getAttribute('method');
		const filesPlaceholder = form.querySelector('#formFilesPlaceholder');
		const loader = form.querySelector('.form__loader');
		const { isVacancy, vacancyTitle } = getVacancyTitle(form);

		formData.delete('file[]');

		if (filesList.length) {
			filesList.forEach((file) => formData.append('file[]', file));
		}

		if (isVacancy) formData.set('type', 'vacancy');
		formData.set(
			'title',
			`${isVacancy ? `Отклик на вакансию: ${vacancyTitle}` : `Заявка с сайта ${window.location.hostname}`}`,
		);

		// for (const item of formData.entries()) {
		// 	console.log(item);
		// }

		// console.log(isVacancy, vacancyTitle, formData.get('title'), formData.get('type'));

		try {
			addClass(loader, 'visible');

			const res = await fetch('../request.php', {
				method: method,
				body: formData,
			});

			// console.log(res);

			if (res.status !== 200) {
				throw new Error(`❌ Что-то не так. Код ответа ${res.status}`);
			}

			flsModules.popup.open('#popup-accept');
		} catch (error) {
			console.error(error);
			flsModules.popup.open('#popup-reject');
		} finally {
			if (filesPlaceholder) mountFilesList([], filesPlaceholder);
			removeClass(loader, 'visible');
			form.reset();
		}
	}

	//+ SHOW FULL-WIDTH-MENU-LIST

	// const showItem = document.querySelector('.full-screen-menu-list');
	// if (showItem) {
	// 	console.log(showItem);
	// }

	//+ DISPLAY THE USER CITY CONTENT
	const inaccessiblePages = ['department', 'cases'];
	const isAvaliableURI = !inaccessiblePages.some((href) => location.href.includes(href));

	const targetElement = isPhoneSize ? '.menu__contacts' : '.header__container';
	const insertPosition = isPhoneSize ? 'afterBegin' : 'beforeend';
	const defaultUserCity = 'Москва';

	displayUserCityContent();
	async function displayUserCityContent() {
		try {
			if (USER_CITY) insertCityElement(targetElement, USER_CITY, insertPosition);
			if (!USER_CITY) {
				USER_CITY = await provideUserCity();
				localStorage.setItem('_userCity', USER_CITY);
				insertCityElement(targetElement, USER_CITY, insertPosition);
			}
		} catch (error) {
			console.error(error);
			insertCityElement(targetElement, defaultUserCity, insertPosition);
		}
	}

	function insertCityElement(targetSelector, content, position) {
		if (!isAvaliableURI) return;

		let contactsElement;
		let isCityAvailable = false;
		const targetElement = document.querySelector(targetSelector);
		if (!targetElement) return;

		const insertingElement = isPhoneSize
			? `
					<div class="header__city"><span class='_icon-home3'></span>${content}</div>
				`
			: `
					<div class="header__row header__row_right _text-bright">
							<div class="header__city"><span class='_icon-home3'></span>${content}</div>
							<div class="header__phone h3"><a href='tel:+73832989898'>+7 (383) 298 98 98</a></div>
					</div>`;

		if (window.scrollY < 400 || isPhoneSize) {
			targetElement.insertAdjacentHTML(position, insertingElement);
			isCityAvailable = true;
			contactsElement = document.querySelector('.header__city').closest('.header__row');
		}

		window.addEventListener('scroll', () => {
			if (window.scrollY < 400 && !isCityAvailable) {
				targetElement.insertAdjacentHTML(position, insertingElement);
				isCityAvailable = true;
				contactsElement = document.querySelector('.header__city').closest('.header__row');
			}
			if (window.scrollY >= 400 && isCityAvailable && !isPhoneSize) {
				targetElement.removeChild(contactsElement);
				isCityAvailable = false;
			}
		});
	}

	async function provideUserCity() {
		try {
			await ymaps3.ready;

			const dataCoords = await ymaps3.geolocation.getPosition();
			// console.log(dataCoords);
			if (!dataCoords) throw new Error("⛔ can't get coordinates. Set by default 'Москва");

			const dataGeoPosition = await ymaps3.search({
				text: dataCoords.coords,
			});
			const city = dataGeoPosition[0].properties.description.split(', ').at(-1);

			if (!dataGeoPosition) throw new Error("⛔there is coordinates, but can't get city. Set by default 'Москва'");
			// console.log('call api', dataGeoPosition);
			return city;
		} catch (error) {
			console.error(error);
			return 'Москва';
		}
	}

	//++ insert clients on advertising department page (заепался делать никому ненужную хрень - делаем разными страницами)

	// const clientsCityData = {
	// 	chelyabinsk: { imageCount: 15, map: ['Челябинск', 'Челябинская область'] },
	// 	default: { imageCount: 39, map: ['', ''] },
	// 	ekaterinburg: { imageCount: 19, map: ['Екатеринбург', 'Свердловская область'] },
	// 	kazan: { imageCount: 18, map: ['Казань', 'Казанская область', 'Республика Татарстан (Татарстан)'] },
	// 	krasnodar: { imageCount: 16, map: ['Краснодар', 'Краснодарский край'] },
	// 	krasnoyarsk: { imageCount: 19, map: ['Красноярск', 'Красноярский край'] },
	// 	moskva: { imageCount: 21, map: ['Москва', 'Московская область'] },
	// 	nizhniinovgorod: { imageCount: 18, map: ['Нижний Новгород', 'Нижегородская область'] },
	// 	novosibirsk: { imageCount: 9, map: ['Новосибирск', 'Новосибирская область'] },
	// 	omsk: { imageCount: 14, map: ['Омск', 'Омская область'] },
	// 	rostovnadonu: { imageCount: 17, map: ['Ростов-на-Дону', 'Ростовская область'] },
	// 	samara: { imageCount: 15, map: ['Самара', 'Самарская область', 'городской округ Самара'] },
	// 	sanktpeterburg: { imageCount: 14, map: ['Санкт-Петербург', 'Ленинградская область'] },
	// 	ufa: { imageCount: 16, map: ['Уфа', 'Республика Башкортостан'] },
	// };

	// function displayClientsWithGeoCoding(user_city) {
	// 	if (isAvaliableURI) return;
	// 	console.log('displayClientsWithGeoCoding start with city: ', user_city);

	// 	const isBigCity =
	// 		Object.entries(clientsCityData).some(([_, { map }]) => {
	// 			const normalizeMap = map.map((item) => item.toLowerCase().trim());
	// 			return normalizeMap.indexOf(USER_CITY.toLowerCase().trim()) >= 0;
	// 		}) || false;
	// 	// console.log(isBigCity);

	// 	const clientsBlock = document.querySelector('.clients__content--ad-department');
	// 	if (!clientsBlock) return;

	// 	clientsBlock.insertAdjacentHTML(
	// 		'beforeend',
	// 		`<div class="clients__slider swiper clients__slider--ad-department">
	// 			<div class="clients__wrapper swiper-wrapper"></div>
	// 		</div>`,
	// 	);
	// 	const clientsSlider = clientsBlock.querySelector('.clients__slider--ad-department');

	// 	function toFormClientsSlides(city, imageCount) {
	// 		let clientSlideBlock = '';
	// 		for (let i = 0; i < imageCount; i++) {
	// 			clientSlideBlock += `<div class="clients__slide swiper-slide">
	// 			<img class="clients__image" src="img/clients/${city}/client-${i + 1}.png" alt="логотип компании клиента"/>
	// 			</div>`;
	// 		}
	// 		return clientSlideBlock;
	// 	}
	// 	// console.log(Object.entries(clientsData));

	// 	if (isBigCity) {
	// 		Object.entries(clientsCityData).forEach(([city, { imageCount, map }]) => {
	// 			const normalizeMap = map.map((item) => item.toLowerCase().trim());

	// 			if (normalizeMap.indexOf(user_city.toLowerCase().trim()) >= 0) {
	// 				for (let i = 0; i < imageCount; i++) {
	// 					clientsSlider
	// 						.querySelector('.clients__wrapper')
	// 						.insertAdjacentHTML('beforeend', toFormClientsSlides(city, imageCount));
	// 				}
	// 			}
	// 		});
	// 	} else {
	// 		for (let i = 0; i < clientsCityData.default.imageCount; i++) {
	// 			clientsSlider
	// 				.querySelector('.clients__wrapper')
	// 				.insertAdjacentHTML('beforeend', toFormClientsSlides('default', clientsCityData.default.imageCount));
	// 		}
	// 	}

	// 	const clientSliderRevers = clientsSlider.cloneNode(true);
	// 	clientSliderRevers.setAttribute('dir', 'RTL');
	// 	clientsSlider.after(clientSliderRevers);

	// 	initSlidersWithGeoTarget();
	// 	function initSlidersWithGeoTarget() {
	// 		if (clientsBlock.querySelector('.clients__slider--ad-department')) {
	// 			new Swiper('.clients__slider--ad-department', {
	// 				modules: [Autoplay],
	// 				speed: 6000,
	// 				spaceBetween: 60,
	// 				slidesPerView: 'auto',
	// 				autoplay: {
	// 					delay: 0,
	// 					disableOnInteraction: false,
	// 					pauseOnMouseEnter: false,
	// 				},
	// 				loop: true,
	// 			});
	// 		}
	// 	}
	// }
});
