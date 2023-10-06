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
});
