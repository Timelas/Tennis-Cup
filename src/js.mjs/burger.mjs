function navMenus() {
//================   js для  меню с подменю со спойлеррами      ============================================================================================================
let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.menu__body');
let menu_list = document.querySelector('.menu__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
  body.classList.toggle('_lock');
};



// Добавьте обработчики для стрелок спойлеров
let spoilerArrows = document.querySelectorAll('.spoiler-arrow');

spoilerArrows.forEach(arrow => {
  arrow.onclick = function(event) {
	 event.stopPropagation(); // Предотвращает закрытие бургер-меню
	 // Логика для открытия/закрытия подменю
	 let submenu = arrow.nextElementSibling; // Предполагается, что подменю идет сразу за стрелкой
	 submenu.classList.toggle('active'); // Пример переключения класса для подменю
  };
});

// Добавляем обработчик для ссылок в меню
let menuLinks = menu_list.querySelectorAll('a'); // Предполагается, что ссылки находятся внутри .menu__list

menuLinks.forEach(link => {
  link.onclick = function(event) {
	 // Закрываем все активные подменю
	 spoilerArrows.forEach(arrow => {
		let submenu = arrow.nextElementSibling;
		if (submenu.classList.contains('active')) {
		  submenu.classList.remove('active'); // Закрываем подменю
		}
	 });

	 // Также закрываем бургер-меню, если это необходимо
	 menu_button.classList.remove('active');
	 menu_itself.classList.remove('active');
	 body.classList.remove('_lock');
  };
});



//================   js для обычного меню       ============================================================================================================
// 	let menu_button = document.querySelector('.header__burger');
// let menu_itself = document.querySelector('.menu__body');
// let menu_list = document.querySelector('.menu__list');
// let body = document.querySelector('body');

// menu_button.onclick = function() {
//   menu_button.classList.toggle('active');
//   menu_itself.classList.toggle('active');
//   body.classList.toggle('lock');
// };

// menu_list.onclick = function() {
//   menu_button.classList.toggle('._active');
//   menu_itself.classList.toggle('._active');
//   body.classList.toggle('lock');
// }

}



export { navMenus };




// function navMenus() {
// 	//================   js для  меню с подменю со спойлеррами      ============================================================================================================
// 	let menu_button = document.querySelector('.header__burger');
// 	let menu_itself = document.querySelector('.menu__body');
// 	let menu_list = document.querySelector('.menu__list');
// 	let body = document.querySelector('body');
	
// 	menu_button.onclick = function() {
// 	  menu_button.classList.toggle('active');
// 	  menu_itself.classList.toggle('active');
// 	  body.classList.toggle('lock');
// 	};
	
// 	menu_list.onclick = function(event) {
// 	  if (!event.target.classList.contains('spoiler-arrow')) {
// 		 menu_button.classList.toggle('._active');
// 		 menu_itself.classList.toggle('._active');
// 		 body.classList.toggle('lock');
// 	  }
// 	};
	
// 	// Добавьте обработчики для стрелок спойлеров
// 	let spoilerArrows = document.querySelectorAll('.spoiler-arrow');
	
// 	spoilerArrows.forEach(arrow => {
// 	  arrow.onclick = function(event) {
// 		 event.stopPropagation(); // Предотвращает закрытие бургер-меню
// 		 // Логика для открытия/закрытия подменю
// 		 let submenu = arrow.nextElementSibling; // Предполагается, что подменю идет сразу за стрелкой
// 		 submenu.classList.toggle('active'); // Пример переключения класса для подменю
// 	  };
// 	});
	
// 	// Добавляем обработчик для ссылок в меню
// 	let menuLinks = menu_list.querySelectorAll('a'); // Предполагается, что ссылки находятся внутри .menu__list
	
// 	menuLinks.forEach(link => {
// 	  link.onclick = function(event) {
// 		 // Закрываем все активные подменю
// 		 spoilerArrows.forEach(arrow => {
// 			let submenu = arrow.nextElementSibling;
// 			if (submenu.classList.contains('active')) {
// 			  submenu.classList.remove('active'); // Закрываем подменю
// 			}
// 		 });
	
// 		 // Также закрываем бургер-меню, если это необходимо
// 		 menu_button.classList.remove('active');
// 		 menu_itself.classList.remove('active');
// 		 body.classList.remove('lock');
// 	  };
// 	});
// 	}
	
	
	
// 	export { navMenus };
