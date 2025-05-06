import $ from 'jquery';

function setupFilters() {
    // Устанавливаем обработчики кликов на ссылки фильтров
    $('.filters a').on('click', function() {
        $('.filters li').removeClass('active');
        $(this).parent('li').addClass('active'); // выделяем выбранную категорию

        var cat = $(this).attr('data-filter'); // определяем категорию

        if (cat == 'all') { // если all
            $('.products li').show(); // отображаем все позиции
        } else { // если не all
            $('.products li').hide(); // скрываем все позиции
            $('.products li[data-filter="' + cat + '"]').show(); // и отображаем позиции из соответствующей категории
        }
    });

    // Вызываем фильтрацию при загрузке страницы
    const initialActiveFilter = $('.filters li.active a').attr('data-filter');
    if (initialActiveFilter) {
        $('.filters a[data-filter="' + initialActiveFilter + '"]').trigger('click');
    }
}

export { setupFilters };
