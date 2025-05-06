function initSliders() {
	new Swiper('.contrasts__swiper', {
		// стрелки
		navigation: {
		   nextEl: '.controls__arrow--next',
		   prevEl: '.controls__arrow--prev'
		 },

		

			//Включение/отключение
			//Перетаскивание на ПК
			simulateTouch: true,
			//Чувствительность свайпа (0 - отключает перетаскивание)
			touchRatio: 2,
			//Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			//Курсор перетаскивания
			grabCursor: true,

			//Переключение при клике на слайд
			slideToClickedSlide: true,

			//Навигация по хешу (стрелакми в браузере) Для каждого слайда прописать атрибут data-hash="slide-1/2/3/4....."
			hashNavigation: {
				//отслеживать состояние
				watchState: true,
			},

			//Управление клавиатурой
			keyboard: {
				//включить/выключить
				enabled: true,
				//включить/выключить
				//только когда слайдер 
				//в пределах вьюпорта
				onlyInViewport: true,
				//включить/выключить
				//управление клавишами
				//pageUp, pageDown
				pageUpDown: true,
			},

			//Управление колесом мышы
			mousewheel: {
				//Чувствительность колеса мыши
				sensitivity: 1, 
				//Класс обьекта на котором
				//будет срабатывать прокрутка мышью
				eventsTarget: ".contrasts__swiper" //МОгут перелистываться и другие слайты одновременно
			},

			//Автовысота слайдеров
			autoHeight: true,

			//количество слайдов для показа
			slidesPerView: 3,

			//Отключение функционала
			//если слайдов меньше чем нужно
			watchOverflow: true,

			//Отступы между слайдами
			spaceBetween: 63,

			//Количество пролистываемых слайдов
			slidePerGroup: 1,

			//Активный слайд по центру
			centeredSlides: false,

			//бесконечное перелистывание слайдов
			loop: false,

			//Обновить свойпер при изменении элементов слайдера
			observe: true,
			//Обновить свойпер при изменении родительских элементов слайдера
			observeParents: true,
			//Обновить свойпер при изменении дочерных элементов слайдера
			observeSlideChildren: true,



			//Брейк поинты (адаптив)
			breakpoints: {
				320: {
					slidesPerView:1.2,
					spaceBetween:15,
				},
				480: {
					slidesPerView:2.2,
					spaceBetween:30,
				},
				768: {
					slidesPerView:2,
					spaceBetween:30,
				},
				992: {
					slidesPerView:3,
				}

			},



	});
	// new Swiper('.name-slider', {
		// //стрелки
		// navigation: {
		//    nextEl: '.swiper-button-next',
		//    prevEl: '.swiper-button-prev'
		//  },
	// 	 //навигация
	// 	 //Буллеты, текущее положение, прогрессбар
	// 	 pagination: {
	// 		el: '.swiper-pagination',

	// 		//буллеты
	// 		clickable: true,
	// 		//Динамические буллеты
	// 		// dynamicBullets: true,
	// 		//Кастомные буллеты
	// 		// renderBullet: function (index, className) {
	// 			// return '<span class="' + className + '">' + (index + 1) + "</span>";
	// 		//  },

	// 		//Фракция
	// 		type: 'fraction',
	// 		//кастомной вывод фракции
	// 		renderFraction: function (currentClass, totalClass) {
	// 			return 'Фото <span class="' + currentClass + '"></span>' +
	// 			 ' из ' +
	// 			 '<span class="' + totalClass + '"></span>';
	// 		},

	// 		//Прогрессбар
	// 		// 	type: 'progressbar'
	// 		 },

	// 		//Скролл (работает совместно с ФРАКЦИЕЙ)
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			//Возможность перетаскивания скролл
	// 			draggable: true
	// 		},

	// 		//Включение/отключение
	// 		//Перетаскивание на ПК
	// 		simulateTouch: true,
	// 		//Чувствительность свайпа (0 - отключает перетаскивание)
	// 		touchRatio: 2,
	// 		//Угол срабатывания свайпа/перетаскивания
	// 		touchAngle: 45,
	// 		//Курсор перетаскивания
	// 		grabCursor: true,

	// 		//Переключение при клике на слайд
	// 		slideToClickedSlide: true,

	// 		//Навигация по хешу (стрелакми в браузере) Для каждого слайда прописать атрибут data-hash="slide-1/2/3/4....."
	// 		hashNavigation: {
	// 			//отслеживать состояние
	// 			watchState: true,
	// 		},

	// 		//Управление клавиатурой
	// 		keyboard: {
	// 			//включить/выключить
	// 			enabled: true,
	// 			//включить/выключить
	// 			//только когда слайдер 
	// 			//в пределах вьюпорта
	// 			onlyInViewport: true,
	// 			//включить/выключить
	// 			//управление клавишами
	// 			//pageUp, pageDown
	// 			pageUpDown: true,
	// 		},

	// 		//Управление колесом мышы
	// 		mousewheel: {
	// 			//Чувствительность колеса мыши
	// 			sensitivity: 1, 
	// 			//Класс обьекта на котором
	// 			//будет срабатывать прокрутка мышью
	// 			eventsTarget: ".name-slider" //МОгут перелистываться и другие слайты одновременно
	// 		},

	// 		//Автовысота слайдеров
	// 		autoHeight: true,

	// 		//количество слайдов для показа
	// 		slidesPerView: 3,

	// 		//Отключение функционала
	// 		//если слайдов меньше чем нужно
	// 		watchOverflow: true,

	// 		//Отступы между слайдами
	// 		spaceBetween: 30,

	// 		//Количество пролистываемых слайдов
	// 		slidePerGroup: 1,

	// 		//Активный слайд по центру
	// 		centeredSlides: false,

	// 		//бесконечное перелистывание слайдов
	// 		loop: true,

	// 		//Автопрокрутка
	// 		// autoplay: {
	// 		// 	//пауза между прокруткой
	// 		// 	delay: 1000,
	// 		// 	//закончить на последнем слайде
	// 		// 	stopOnLastSlide: true,
	// 		// 	//Отключить после ручного переключения
	// 		// 	disableOnInteraction: true,
	// 		// },

	// 		//Скорость прокрутки слайдов
	// 		// speed: 700,

	// 		//Вертикальный слайдер
	// 		// direction: 'vertical',

	// 		//Эффект переключения слайдов
	// 		//Листание
			// effect: 'slide',

	// 		// //Смена прозрачности
	// 		// effect: 'fade',
	// 		// //Дополнение к fade
	// 		// fadeEffect: {
	// 		// 	//Парралельная смена прозрачности
	// 		// 	crossFade: true
	// 		// },

	// 		// //Эффект потока(изгиба)
	// 		// effect:'coverflow',
	// 		// //Дополнение к coverflow
	// 		// coverflowEffect: {
	// 		// //угол
	// 		// rotate: 20,
	// 		// //наложение
	// 		// stretch: 50,
	// 		// //тень
	// 		// slideShadows: true,
	// 		// },

	// 		//Обновить свойпер при изменении элементов слайдера
	// 		observe: true,
	// 		//Обновить свойпер при изменении родительских элементов слайдера
	// 		observeParents: true,
	// 		//Обновить свойпер при изменении дочерных элементов слайдера
	// 		observeSlideChildren: true,



	// 		//Брейк поинты (адаптив)
	// 		breakpoints: {
	// 			320: {
	// 				slidesPerView:1,
	// 			},
	// 			480: {
	// 				slidesPerView:2,
	// 			},
	// 			992: {
	// 				slidesPerView:3,
	// 			}

	// 		},



	// });

	//Еще один слайдер
	// new Swiper('.new-slider', {
	// 	//параметры
	// });

}

export { initSliders };
