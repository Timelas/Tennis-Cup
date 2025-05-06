function hoverClick() {
	const isMobile = {
	  any: function() {
		 return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
	  }
	};
 
	window.onload = function() {
	  document.addEventListener("click", documentActions);
 
	  // Action (делегирование событий click)
	  function documentActions(e) {
		 const targetElement = e.target;
 
		 // Проверяем ширину экрана и наличие мобильного устройства
		 if (window.innerWidth > 767.98 && isMobile.any()) { 
			// Проверяем, если кликнули на элемент с классом .menu__arrow
			if (targetElement.classList.contains('menu__arrow')) {
			  // Переключаем класс _hover у родительского элемента .menu__item
			  targetElement.closest('.menu__item').classList.toggle('_hover');
			}
 
			// Код для закрытия подменю при клике в любой другой области
			const menuItems = document.querySelectorAll('.menu__item._hover');
			if (!targetElement.closest('.menu__item') && menuItems.length > 0) {
			  _removeClasses(menuItems, "_hover");
			}
		 }
 
		 // Обработка клика по элементу с классом search-form__icon
		 if (targetElement.classList.contains('search-form__icon')) {
			document.querySelector('.search-form').classList.toggle('_active');
		 } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
			// Закрываем форму поиска, если кликнули вне её
			document.querySelector('.search-form').classList.remove('_active');
		 }
	  }
	}
 
	// Функция для удаления классов
	function _removeClasses(array, className) {
	  for (var i = 0; i < array.length; i++) {
		 array[i].classList.remove(className);
	  }
	}
 }
 
 export { hoverClick };
 