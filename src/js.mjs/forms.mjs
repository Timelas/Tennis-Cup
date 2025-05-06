
function forms() {
	
	// фукция которая убирает автомачически плэйсхолдэе при фокусировки на инпуте
	function dataValue() {
		 // Выбираем все input с атрибутом data-value
		 const inputs = document.querySelectorAll('input[data-value]');

		 inputs.forEach(input => {
			  // Удаление подсказки при фокусировке
			  input.addEventListener('focus', function() {
					this.placeholder = ''; // Убираем плейсхолдер
			  });

			  // Восстановление подсказки, если поле пустое
			  input.addEventListener('blur', function() {
					if (this.value === '') {
						 this.placeholder = this.getAttribute('data-value'); // Восстанавливаем плейсхолдер
					}
			  });
		 });
	}

	// function anotherFunction() {
		 // Здесь можно добавить другую функциональность
		//  console.log('Эта функция делает что-то еще');
	// }

	// Вызов функций внутри основной функции
	dataValue();
	// anotherFunction();
}

export { forms };
