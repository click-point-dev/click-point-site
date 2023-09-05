/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
// import Swiper from 'swiper';
// import { Autoplay, FreeMode } from 'swiper/modules';
import Swiper, { Autoplay, FreeMode } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	//FIX разобраться че за хня: то ли кэшируется, то ли свайпер глючит
	//TODO попробовать этот варик https://codepen.io/fe-nix/pen/eYMPwQp
	if (document.querySelector('.clients__slider')) {
		// Указываем скласс нужного слайдера
		// new Swiper('.clients__slider', {
		// 	// observer: true,
		// 	modules: [Autoplay],
		// 	watchOverflow: true,
		// 	centeredSlides: true,
		// 	allowTouchMove: false,
		// 	loop: true,
		// 	autoplay: {
		// 		delay: 0,
		// 		disableOnInteraction: false,
		// 		stopOnLastSlide: false,
		// 	},

		// 	// Брейкпоинты

		// 	breakpoints: {
		// 		320: {
		// 			slidesPerView: 4,
		// 			loopedSlides: 4,
		// 			spaceBetween: 35,
		// 			// autoHeight: true,
		// 			speed: 1000,
		// 		},
		// 		479.98: {
		// 			slidesPerView: 5,
		// 			loopedSlides: 5,
		// 			spaceBetween: 40,
		// 		},
		// 		768: {
		// 			slidesPerView: 8,
		// 			loopedSlides: 8,
		// 			spaceBetween: 50,
		// 			speed: 2000,
		// 		},

		// 		1268: {
		// 			slidesPerView: 11,
		// 			loopedSlides: 11,
		// 			spaceBetween: 60,
		// 			speed: 2000,
		// 		},
		// 	},

		// 	// События
		// 	// on: {},
		// });

		new Swiper('.clients__slider', {
			modules: [Autoplay],
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
				// pauseOnMouseEnter: false,
			},
			speed: 3500,
			loop: true,
			// Responsive breakpoints: when window width is >= 320px (mobile first)
			breakpoints: {
				320: {
					slidesPerView: 4,
					spaceBetween: 35,
					speed: 2500,
					// autoplay: false,
					// freeMode: {
					// 	enabled: true,
					// 	momentum: true,
					// 	minimumVelocity: 1,
					// },
				},
				600: {
					slidesPerView: 7,
					spaceBetween: 40,
					// freeMode: {
					// 	enabled: true,
					// 	momentum: true,
					// },
				},
				1024: {
					slidesPerView: 9,
					spaceBetween: 40,
					// freeMode: {
					// 	enabled: true,
					// 	momentum: true,
					// },
				},
				1280: {
					slidesPerView: 10,
					spaceBetween: 50,
					// freeMode: {
					// 	enabled: true,
					// 	momentum: true,
					// },
				},
				1372: {
					slidesPerView: 11,
					spaceBetween: 60,
					// freeMode: {
					// 	enabled: true,
					// 	momentum: true,
					// },
				},
			},
			// preloadImages: false,
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener('load', function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
