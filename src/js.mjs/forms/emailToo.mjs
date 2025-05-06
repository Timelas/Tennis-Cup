
		"use strict"

function emailToo() {
		document.addEventListener('DOMContentLoaded', function () {
			const form = document.getElementById('form'); //создаем константу для всей формы
			form.addEventListener('submit', formSend); // при нажатии на кнопку отправить - мы переходим в функцию  (formSend)
		
		
			async function formSend(e) { //функция formSend
				e.preventDefault();  //запрещаем стандартную отправку на почту
	
				//делаем проверку на правильность заполнения формы
				let error = formValidate(form);
	
				//Получаем данные формы
				let formData = new FormData(form); //вытаскивает все данные с полей
				formData.append('image', formImage.files[0]); //добавляем в данные изображение
	
	
				if (error === 0) {  //если валидация пройдена
					//Отправляем методо АЯКС
					form.classList.add('_sending'); //При отсутствии ошибок сразу добавляем класс _sending
					let response = await fetch('/sendmail.php', {
						method: 'POST',
						body: formData,
					});
					//Результат отправки
					if (response.ok) {
						let result = await response.json();
						alert(result.message);
						formPreview.innerHTML = ''; //очищаем див с превью с изображениями
						form.reset(); //очищаем все поля формы
						form.classList.remove('_sending'); //убираем класс
					} else {
						alert("Ошибка");
					}
				} else { //если валидация не пройдена
					alert('Заполните обязательно поле');
				}
			}
	
	
	
	
	
	
	
				//создаем вормму formValidate
			function formValidate(form) {  
				let error = 0;
				let formReq = document.querySelectorAll('._req'); //задаем класс для проверок форм (обязательное поле)
			
	
			//проверяем инпуты с классом _req на заполнение
			for (let index = 0; index < formReq.length; index++) {
				const input = formReq[index];
				formRemoveError(input); //убираем изначально у обьекта класс _error
			
			//ПРОВЕРЯЕМ E-MAIL
			if (input.classList.contains('_email')) { //появившийся класс добавляем в html
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
				} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {  //проверяем наличие чекбокса и в случае фолсэ добавляем error
					formAddError(input);
					error++;
				} else {    //проверяем заполнено ли поле вообще
					if (input.value === '') {
						formAddError(input);
						error++;
					}
				}
			}
			return error;
		}
			//вспомогательные функции которые добавляют класс _error самому блоку и родителю
			function formAddError(input) {
				input.parentElement.classList.add('_error'); //добавляем родителю
				input.classList.add('_error'); //добавляем элементу
			}
			function formRemoveError(input) {
				input.parentElement.classList.remove('_error'); //убираем у родителя
				input.classList.remove('_error'); //убираем у элемента
			}
	
	
			//функция теста email
			function emailTest(input) {
				return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
			}
	
	
			//Получаем инпут file (для картинок) в переменную
			const formImage = document.getElementById('formImage');
			//Получаем див для превью в переменную
			const formPreview = document.getElementById('formPreview');
	
			//Слушаем изменения в инпуте file
			formImage.addEventListener('change', () => {
				uploadFile(formImage.files[0]);
			});
			//Создаем функцию uploadFile
			function uploadFile(file) {
				//проверяем тип файла
				if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
					alert('Разрешены только изображения.');
					formImage.value = '';
					return;
				}
				//Проверяем размер файла
				if (file.size > 2 * 1024 * 1024) {
					alert('Файл должен быть меньше 2 МБ.');
					formImage.value = '';
					return;
				}
	
				//Выводим вайл в виде превью
				var reader = new FileReader();
				reader.onload = function (e) { //загружаем изображение
					formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`; //формируем изображение и отправляем его внутрь дива formPreview
				};
				reader.onerror = function (e) {
					alert('Ошибка');
				};
				reader.readAsDataURL(file);
	
			}
	
		});
	}
	export { emailToo };
