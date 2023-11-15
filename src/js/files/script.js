// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
import { gsap } from 'gsap';
// import CustomEase from 'gsap/CustomEase.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import JustValidate from 'just-validate';
// добавление классов элементам при скроле на определенную величину

window.addEventListener('DOMContentLoaded', () => {
	const appearingElement = document.querySelector('[data-appearing]');

	window.addEventListener('scroll', () => {
		if (!appearingElement) return;

		if (window.scrollY > 800) {
			appearingElement.classList.add('_appearing');
		} else {
			appearingElement.classList.remove('_appearing');
		}
	});

	//!+ gsap анимации

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
			'<'
		);
	}

	//+ о компании - звездный фон

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

	//+ О компании - декор

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

	//+ страница Главная - главное изображение

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
			duration: 5,
			delay: 1,
			ease: 'power1.out',
		});
	}

	//+ страница Главная - декор
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
			scale: 0.5,
			duration: 6,
			delay: 1,
			ease: 'power4.out',
		});
	}

	//!+ главная форма
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
			rotate: 60,
			duration: 5,
			delay: 0.7,
			ease: 'power4.out',
		});
	}

	//!+ РАБОТА С ФОРМАМИ
	const forms = document.forms;
	if (!forms.length) return;

	Array.from(forms).forEach((form) => {
		const method = form.getAttribute('method');
		const formId = form.getAttribute('id');
		console.log(`🚀 ------------------------------------------🚀`);
		console.log(`🚀 ~ file: script.js:279 ~ formId:`, formId);
		console.log(`🚀 ------------------------------------------🚀`);

		sentValidateвForm(form, formId, method);

		loadFilesToForm(form);
	});

	//!+ загрузка файлов в форму

	function loadFilesToForm(form) {
		const formFileInput = form.querySelector('#filesInput');
		const filesPlaceholder = form.querySelector('#formFilesPlaceholder');

		if (!formFileInput || !filesPlaceholder) return;

		let filesInputList;

		let filesObserver = new MutationObserver(() => {
			const removeFilesButtons = document.querySelectorAll('#deleteFileButton');

			Array.from(removeFilesButtons).forEach((button) => removeFiles(button));
		});

		filesObserver.observe(filesPlaceholder, {
			childList: true, // наблюдать за непосредственными детьми
			subtree: false, // и более глубокими потомками
			characterDataOldValue: false, // передавать старое значение в колбэк
		});

		function removeFiles(item) {
			item.addEventListener('click', function (e) {
				filesInputList = filesInputList.filter((item) => item.name !== e.target.innerHTML);
				renderFilesList(filesInputList, filesPlaceholder);
			});
		}

		function renderFilesList(list, node) {
			node.innerHTML = '';

			list.forEach((item) =>
				node.insertAdjacentHTML(
					'beforeend',
					`	<div class="input-file__btn">
						<span class="_icon-trash" id="deleteFileButton">${item.name}</span>
					</div>
				`
				)
			);
		}

		function loadFiles(input, filesPlaceholder) {
			if (!input || !filesPlaceholder) return;

			const files = input.files;

			let reader = new FileReader();
			reader.readAsDataURL(new Blob(files));

			reader.onload = function () {
				if (Array.from(files).some((file) => file.size > 15000000)) return;

				filesInputList = [...Array.from(files)];

				renderFilesList(filesInputList, filesPlaceholder);
			};

			reader.onerror = function () {
				alert('C загрузкой файла вохникли проблемы. Попробуйте еще раз');
			};
		}

		formFileInput.addEventListener('change', () => {
			loadFiles(formFileInput, filesPlaceholder);
		});
	}

	//!+ валидация и отправка форм

	function sentValidateвForm(form, formId, method = 'get') {
		const validate = new JustValidate(`#${formId}`, {
			validateBeforeSubmitting: true,
			testingMode: true,
		});

		if (!validate) return;

		if (form.elements.name) {
			validate.addField('#name', [
				{
					rule: 'required',
					errorMessage: 'Имя обязательно',
				},
				{
					rule: 'customRegexp',
					value: /[А-я]/gi,
					errorMessage: 'Только кириллица',
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
					rule: 'integer',
					errorMessage: 'Только цифры без +7',
				},
				{
					rule: 'minLength',
					value: 10,
					errorMessage: '10 цифр без +7',
				},
				{
					rule: 'maxLength',
					value: 10,
					errorMessage: 'Что-то не то. Номер без +7',
				},
			]);
		}

		if (form['files[]']) {
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
			]);
		}

		validate.onSuccess((e) => {
			const formData = new FormData(e.target);
			// formData.set('type', 'request');
			// formData.set('title', 'Заявка с сайта');

			// const headers = new Headers();
			// headers.append('Authorization', `Basic ${credentials}`);
			// headers.set('Referrer Policy', 'no-referrer-when-downgrade');
			// headers.set('Content-Type', 'text/plain');

			// console.log('is Valid!!!');

			async function sendFormData() {
				try {
					const res = await fetch('../request.php', {
						method: method,
						body: formData,
						// headers: headers,
					});

					if (!res.ok) {
						throw new Error(e);
					}
					// const data = await res.json();
					flsModules.popup.open('#popup-accept');
				} catch (error) {
					console.log(error);
					flsModules.popup.open('#popup-reject');
				} finally {
					// flsModules.popup.close('#popup');
					form.reset();
				}
			}
			sendFormData();
		});
	}
});
