function rendomGalery() {
	 // Функция для перемешивания массива
	 function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			 const j = Math.floor(Math.random() * (i + 1));
			 [array[i], array[j]] = [array[j], array[i]];
		}
		return array;
  }

  // Получаем все дочерние элементы
  const parent = document.querySelector('.gallery_container_wrapper');
  const children = Array.from(parent.children); // Преобразуем HTMLCollection в массив

  // Перемешиваем элементы
  const shuffledChildren = shuffleArray(children);

  // Очищаем родительский элемент и добавляем перемешанные элементы обратно
  parent.innerHTML = ''; // Очищаем родительский элемент
  shuffledChildren.forEach(child => parent.appendChild(child)); // Добавляем перемешанные элементы

};

export { rendomGalery };