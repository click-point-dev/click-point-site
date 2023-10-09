// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase.js';

// добавление классов элементам при скроле на определенную величину
window.addEventListener('DOMContentLoaded', () => {
	const appearingElement = document.querySelector('[data-appearing]');

	if (!appearingElement) return;

	window.addEventListener('scroll', () => {
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
			rotate: 180,
			scale: 1.5,
			ease: 'power4.out',
			duration: 8,
			delay: 1,
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

	const mainImage = document.querySelector('.first-screen__image');

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

	//+ страница Главная - декор
	const mainDecorTop = document.querySelector('.first-screen__decor_top');
	const mainDecorCenter = document.querySelector('.first-screen__decor_center');
	const mainDecorBottom = document.querySelector('.first-screen__decor_bottom');

	if (mainDecorTop) {
		gsap.from(mainDecorTop, {
			x: '-=20vw',
			y: '+=60vh',
			scale: 0.5,
			filter: 'blur(0px)',
			duration: 7,
			delay: 1,
			ease: 'power4.out',
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

	//!+ загрузка файлов в форму

	const formFileInput = document.querySelector('#formFileInput');
	const filesPlaceholder = document.querySelector('#formUploadedFiles');
	let filesInputList;

	let filesObserver = new MutationObserver(() => {
		const removeButtons = document.querySelectorAll('#deleteFileButton');

		Array.from(removeButtons).forEach((button) => removeFiles(button));
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
				`	<div class="input-file__btn _text-bright">
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
			filesInputList = filesInputList ? [...filesInputList, ...Array.from(files)] : [...Array.from(files)];

			renderFilesList(filesInputList, filesPlaceholder);
		};

		reader.onerror = function () {
			alert('C загрузкой файла вохникли проблемы. Попробуйте еще раз');
		};
	}

	formFileInput.addEventListener('change', () => {
		loadFiles(formFileInput, filesPlaceholder);
	});

	// const formFileInput = document.querySelectorAll('#formFileInput');
	// const formUploadedFiles = document.querySelector('#formUploadedFiles');

	// if (!formFileInput || !formUploadedFiles) return;

	// console.log(formFileInput);
	// console.log(formUploadedFiles);

	// formFileInput.forEach((input) => {
	// 	let files;

	// 	input.addEventListener(
	// 		'change',
	// 		() => {
	// 			files = files ? [...files, ...Array.from(input.files)] : [...Array.from(input.files)];

	// 			formUploadedFiles.innerHTML = '';

	// 			const renderFilesNames = function (arr) {
	// 				arr.forEach((file) => {
	// 					// console.log(file);
	// 					const fileBlock = `
	// 				<div class="input-file__btn _text-bright" >
	// 					<span class="_icon-trash" id="deleteFile">${file.name}</span>

	// 				</div>
	// 				`;
	// 					formUploadedFiles.insertAdjacentHTML('beforeend', fileBlock);

	// 					// const deleteFileButtons = document.getElementById('deleteFile');

	// 					formUploadedFiles.addEventListener(
	// 						'click',
	// 						(e) => {
	// 							files.filter((file) => {
	// 								console.log(e.target.innerHTML, file.name);
	// 								return file.name !== e.target.innerHTML;
	// 							});
	// 							console.log(files);
	// 							renderFilesNames();
	// 						},
	// 						false
	// 					);
	// 				});
	// 			};

	// 			renderFilesNames(files);

	// 			// deleteFile.addEventListener('click', (e) => {
	// 			// 	console.log(e.target);
	// 			// 	files
	// 			// 		.filter((file) => file.name !== e.target.innerHTML)
	// 			// 		.forEach((file) => {
	// 			// 			console.log(file);
	// 			// 			const fileBlock = `
	// 			// 		<div class="input-file__btn _text-bright" >
	// 			// 			<span class="_icon-trash" id="deleteFile">${file.name}</span>

	// 			// 		</div>
	// 			// 	`;
	// 			// 			formUploadedFiles.insertAdjacentHTML('beforeend', fileBlock);
	// 			// 		});
	// 			// });
	// 		},
	// 		false
	// 	);
	// });
});
