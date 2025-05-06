
//добавляем к необзодимому элементу в html класс ._anim-items 
//добавляем класс в стилях ._active

// .animat_p {
// 	transform: translate(-100%, 0px);
// 	opacity: 0;

// }

// .animat_p._active  {
// 	transform: translate(0%, 0px);
// 	animation: backInLeft;
// 	animation-duration: 2s;
// 	opacity: 1;
// 	transition: all 0.8s ease 0.3s;
// }


function scrollAnim() {

	const animItems = document.querySelectorAll('._anim-items');

	if(animItems.length > 0){
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll(params){
			for (let index=0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 6;
				
				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - animItemHeight / animStart;
				}
				
				if((scrollY> animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				}else {
					if(!animItem.classList.contains('_anim-no-hide')){
						animItem.classList.remove('_active')	
					}
				}
				
			}
		}
			function offset(el) {
				const rect = el.getBoundingClientRect(),
						scrollLeft = window.scrollX || document.documentElement.scrollLeft,
						scrollTop = window.scrollY || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			}
		setTimeout(() => {
			  animOnScroll()
		 }, 600)
	}

}

export { scrollAnim };





