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
});

//+ gsap анимации
CustomEase.create('astroEase', '.08,.32,0,1');

gsap.from('.first-screen-about__main-image', {
	y: '110%',
	x: 200,
	bottom: 1,
	duration: 6,
	delay: 2.5,
	ease: 'power4.out',
	// ease: 'astroEase',
});
gsap.from('.first-screen-about__background', {
	width: '180%',
	objectPosition: 'center',
	duration: 7,
	delay: 1,
	ease: 'power4.out',
	// ease: 'astroEase',
});

gsap.from('.first-screen-about__decor', { x: '100%', y: '-100%', duration: 7, delay: 1, ease: 'power4.out' });
gsap.from('.first-screen-about__decor', { opacity: 0, duration: 4, delay: 3, ease: 'power4.out' });
