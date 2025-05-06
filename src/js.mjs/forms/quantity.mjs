// qa - сниппет для вызова кода
// Функция для навигации по странице
function quantity() {
	
		const quantityContainer = document.querySelector(".quantity");
		const minusBtn = quantityContainer.querySelector(".minus");
		const plusBtn = quantityContainer.querySelector(".plus");
		const inputBox = quantityContainer.querySelector(".input-box");
	 
		updateButtonStates();
	 
		quantityContainer.addEventListener("click", handleButtonClick);
		inputBox.addEventListener("input", handleQuantityChange);
	 
		function updateButtonStates() {
		  const value = parseInt(inputBox.value);
		  minusBtn.disabled = value <= 1; // Изменено с 1 на 0
		  plusBtn.disabled = value >= parseInt(inputBox.max);
		}
	 
		function handleButtonClick(event) {
		  if (event.target.classList.contains("minus")) {
			 decreaseValue();
		  } else if (event.target.classList.contains("plus")) {
			 increaseValue();
		  }
		}
	 
		function decreaseValue() {
		  let value = parseInt(inputBox.value);
		  value = isNaN(value) ? 0 : Math.max(value - 1, 0); // Изменено с 1 на 0
		  inputBox.value = value;
		  updateButtonStates();
		  handleQuantityChange();
		}
	 
		function increaseValue() {
		  let value = parseInt(inputBox.value);
		  value = isNaN(value) ? 0 : Math.min(value + 1, parseInt(inputBox.max));
		  inputBox.value = value;
		  updateButtonStates();
		  handleQuantityChange();
		}
	 
		function handleQuantityChange() {
		  let value = parseInt(inputBox.value);
		  value = isNaN(value) ? 0 : value; // Изменено с 1 на 0
	 
		  // Execute your code here based on the updated quantity value
		  console.log("Quantity changed:", value);
		}
	 }
	 
	 
	export { quantity };
	