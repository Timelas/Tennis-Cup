
function headerScroll() {

	// код с отступами main и уменьшением header

	// .header.shrink {
	// 	height: 60px; /* Высота шапки при уменьшении */
	// }
	
	// .main {
	// 	padding-top: 210px; /* Начальный отступ для контента */
	// 	transition: padding-top 0.3s; /* Плавный переход для отступа */
	// }
	
	// .main.shrink-padding {
	// 	padding-top: 150px; /* Отступ при уменьшенной высоте шапки */
	// }

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header');
	const content = document.querySelector('.main');

	let lastScrollTop = 0;

	window.addEventListener('scroll', () => {
		 const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

		 if (currentScroll > lastScrollTop) {
			  // Скролл вниз
			  header.classList.add('shrink');
			  content.classList.add('shrink-padding');
		 } else {
			  // Скролл вверх
			  header.classList.remove('shrink');
			  content.classList.remove('shrink-padding');
		 }

		 lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для мобильных устройств
	});
});
	}
	
	export { headerScroll };
	



