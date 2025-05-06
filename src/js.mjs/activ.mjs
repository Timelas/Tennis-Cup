//многоуровневое меню
function hoverActiv() {

// Получаем все элементы меню
const menuItems = document.querySelectorAll('.menu__arrow');

// Добавляем обработчики событий для каждого элемента меню
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('_active'); // Добавляем класс при наведении
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('_active'); // Убираем класс при уходе мыши
    });
});
}


export { hoverActiv };