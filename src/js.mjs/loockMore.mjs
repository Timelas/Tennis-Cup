function loockMore () {
	
	$(".gallery__more").slice(0, 7).show();  
	$("#loadMore").on('click', function(e) {
	  e.preventDefault();
	  
	  // Получаем скрытые элементы
	  var hiddenElements = $(".gallery__more:hidden").slice(0, 7);
	  
	  // Если есть скрытые элементы, показываем их
	  if (hiddenElements.length > 0) {
		 hiddenElements.slideDown();
	  }
	  
	  // Если больше нет скрытых элементов, скрываем кнопку
	  if ($(".gallery__more:hidden").length === 0) {
		 $("#loadMore").hide();
	  }
	});
 };

export { loockMore };