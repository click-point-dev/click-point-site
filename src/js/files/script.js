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
	duration: 5,
	delay: 2.5,
	ease: 'power4.out',
	// ease: 'astroEase',
});
gsap.from('.first-screen-about__main-image', {
	opacity: 0.5,
	duration: 2,
	delay: 3,
	// ease: 'astroEase',
});

gsap.from('.first-screen-about__background', {
	scale: 3,
	transformOrigin: 'center top',
	duration: 7,
	delay: 1,
	ease: 'power4.out',
	// ease: 'astroEase',
});

gsap.from('.first-screen-about__decor-1', { right: -1000, y: '-100%', duration: 7, delay: 1, ease: 'power4.out' });
gsap.from('.first-screen-about__decor-1', { opacity: 0, duration: 4, delay: 3, ease: 'power4.out' });

gsap.from('.first-screen-about__decor-2', { y: 1500, duration: 7, delay: 1, ease: 'power4.out' });
gsap.from('.first-screen-about__decor-2', { opacity: 0, duration: 8, delay: 2, ease: 'power4.out' });

gsap.from('.first-screen-about__decor-3', {
	top: '15%',
	right: '30%',
	width: 70,
	duration: 7,
	delay: 1,
	ease: 'power4.out',
});
gsap.from('.first-screen-about__decor-3', { opacity: 0, duration: 7, delay: 3, ease: 'power4.out' });
