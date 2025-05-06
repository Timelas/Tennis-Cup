function select() {
	document.addEventListener('DOMContentLoaded', function() {
		const selected = document.querySelector('.select-selected');
		const items = document.querySelector('.select-items');
  
		selected.addEventListener('click', function() {
			 items.classList.toggle('select-hide');
			 this.classList.toggle('select-arrow-active');
		});
  
		items.addEventListener('click', function(e) {
			 if (e.target.tagName === 'DIV') {
				  selected.innerHTML = e.target.innerHTML;
				  items.classList.add('select-hide');
			 }
		});
  
		document.addEventListener('click', function(e) {
			 if (!selected.contains(e.target) && !items.contains(e.target)) {
				  items.classList.add('select-hide');
			 }
		});
  });
  
}

export { select };
