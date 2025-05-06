function showСustom() {
window.onload = function() {
    // Получаем все элементы с классом 'div'
    var items = document.querySelectorAll('#shuffle .div');
    
    // Генерируем случайный индекс
    var randomIndex = Math.floor(Math.random() * items.length);
    
    // Скрываем все элементы
    items.forEach(function(item) {
        item.style.display = 'none';
    });
    
    // Показываем случайный элемент
    items[randomIndex].style.display = 'block';
	};
}
	
	export { showСustom };