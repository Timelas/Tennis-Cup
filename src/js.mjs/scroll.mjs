// data-goto - указать  ID блока к которому осуществить навигацию
// Функция для навигации по странице
function setupSmoothScroll() {

document.addEventListener('DOMContentLoaded', function() {

	  // Находим все элементы с атрибутом data-goto
	  const scrollLinks = document.querySelectorAll('[data-goto]');
 
	  scrollLinks.forEach(link => {
		 link.addEventListener('click', function(e) {
			e.preventDefault(); // Отменяем стандартное поведение ссылки
 
			const targetSelector = this.getAttribute('data-goto'); // Получаем значение атрибута data-goto
			const targetElement = document.querySelector(targetSelector); // Находим целевой элемент
 
			if (targetElement) {
			  // Если целевой элемент найден, прокручиваем к нему
			  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // Получаем позицию элемента
			  window.scrollTo({
				 top: targetPosition,
				 behavior: 'smooth' // Плавная прокрутка
			  });
			}
		 });
	  });
 });

	}
 
 
export { setupSmoothScroll };




	