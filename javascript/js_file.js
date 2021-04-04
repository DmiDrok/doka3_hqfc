//Код для ПопАпа
let popup = document.querySelector("#popup");
 	popupToggle = document.querySelector(".button_buy");
 	popupToggleTwo = document.querySelector(".button_buy_2");
 	popupClose = document.querySelector("#close")

 popupToggle.onclick = function(){
 	popup.classList.add("show");
 }

 popupToggleTwo.onclick = function(){
 	popup.classList.add("show");
 }



 popupClose.onclick = function(){
 	popup.classList.remove("show")
 }

window.onclick = function(event){
	if(event.target == popup){
		popup.classList.remove("show")
	}
}
//Код для видеоПлеера
let video = document.querySelector("#movie");
			videoPlay = document.querySelector("#full")

		videoPlay.onclick = function(){
			video.play();
		}

document.getElementById("player").onclick = function(){
			document.getElementById("movie").style.zIndex = "999999";
			document.getElementById("movie").style.height = "100%";
		}

//Коды для калькуляторов

//Код соло калькулятора
function calculate(){
			let firstNum = document.getElementById("first").value;
			let secondNum = document.getElementById("second").value;
			let result = document.getElementById("result");

			let price = [1.13, 1.33, 1.46, 1.59, 2.12]
			//Проверка
			if(isNaN(firstNum) || isNaN(secondNum)){
				result.innerHTML = 0 + "$";
			}else if(firstNum <= 2000 && secondNum <= 2000){
				let oneMmr = price[0]/100;
				let raznost = secondNum - firstNum;
				let itog = oneMmr * raznost;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum < 2000 && 2000 < secondNum && secondNum <= 2500){
				firstNum = 2000 - firstNum;
				secondNum = (secondNum - 2000) * price[1]/100;
				firstNum = firstNum * price[0]/100;
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(2000 <= firstNum && firstNum <= 2500 && secondNum <= 2500){
				let itog = (secondNum - firstNum) * price[1]/100;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum < 2000 && 2500 < secondNum && secondNum <= 3000){
				firstNum = (2000 - firstNum) * price[0]/100;
				secondNum = (secondNum - 2500) * price[2]/100 + 500 * price[1]/100;
				let itog = secondNum + firstNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(2000 <= firstNum && firstNum < 2500 && 2500 < secondNum && secondNum <= 3000 ){
				firstNum = (2500 - firstNum) * price[1]/100;
				secondNum = (secondNum - 2500) * price[2]/100;
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(2500 <= firstNum && firstNum < 3000 && 2500 < secondNum && secondNum <= 3000){
				firstNum = (secondNum - firstNum) * price[2]/100;				
				let itog = firstNum ;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(2000 > firstNum && 3000 < secondNum && secondNum <= 3500){
				firstNum = (2000 - firstNum) * price[0]/100;
				secondNum = (secondNum - 3000) * price[3]/100 + (500 * price[1]/100) + (500 * price[2]/100);
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 2000 && firstNum < 2500 && 3000 < secondNum && secondNum<= 3500){
				firstNum = (2500 - firstNum) * price[1]/100;
				secondNum = (secondNum - 3000) * price[3]/100 + (500 * price[2]/100);
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 2500 && firstNum < 3000 && 3000 < secondNum && secondNum <= 3500){
				firstNum = (3000 - firstNum) * price[2]/100;
				secondNum = (secondNum - 3000) * price[3]/100;
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 3000 && firstNum < 3500 && 3000 < secondNum && secondNum<= 3500){
				let itog = (secondNum - firstNum) * price[3]/100;
				result.innerHTML = itog.toFixed(2) + "$";
				////////////////////////////
			}else if(2000 >= firstNum && 3500 < secondNum && secondNum <= 4000){
				firstNum = (2000 - firstNum) * price[0]/100;
				secondNum = (secondNum - 3500) * price[4]/100 + (500 * price[1]/100) + (500 * price[2]/100) + (500 * price[3]/100);
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 2000 && firstNum <= 2500 && 3500 < secondNum && secondNum <= 4000){
				firstNum = (2500 - firstNum) * price[1]/100;
				secondNum = (secondNum - 3500) * price[4]/100 + (500 * price[2]/100) + (500 * price[3]/100);
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 2500 && firstNum <= 3000 && 3500 < secondNum && secondNum <= 4000){
				firstNum = (3000 - firstNum) * price[2]/100;
				secondNum = (secondNum - 3500) * price[4]/100 + (500 * price[3]/100);
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 3000 && firstNum <= 3500 && 3500 < secondNum && secondNum <= 4000){
				firstNum = (3500 - firstNum) * price[3]/100;
				secondNum = (secondNum - 3500) * price[4]/100;
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 3500 && firstNum <= 4000 && 3500 < secondNum && secondNum <= 4000){
				let itog = (secondNum - firstNum) * price[4]/100;
				result.innerHTML = itog.toFixed(2) + "$";
				//////////////////////////////////////////////////////////////////////
			}
		}
//Код Дуо калькулятора
function calculate_duo(){
			let firstNum = document.getElementById("first_duo").value;
			let secondNum = document.getElementById("second_duo").value;
			let result = document.getElementById("result_duo");

			let price = [1.34, 1.47, 1.61, 1.88, 2.41]
			//Проверка
			if(isNaN(firstNum) || isNaN(secondNum)){
				result.innerHTML = 0 + "$";
			}else if(firstNum <= 2000 && secondNum <= 2000){
				let oneMmr = price[0]/100;
				let raznost = secondNum - firstNum;
				let itog = oneMmr * raznost;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum < 2000 && 2000 < secondNum && secondNum <= 2500){
				firstNum = 2000 - firstNum;
				secondNum = (secondNum - 2000) * price[1]/100;
				firstNum = firstNum * price[0]/100;
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(2000 <= firstNum && firstNum <= 2500 && secondNum <= 2500){
				let itog = (secondNum - firstNum) * price[1]/100;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum < 2000 && 2500 < secondNum && secondNum <= 3000){
				firstNum = (2000 - firstNum) * price[0]/100;
				secondNum = (secondNum - 2500) * price[2]/100 + 500 * price[1]/100;
				let itog = secondNum + firstNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(2000 <= firstNum && firstNum < 2500 && 2500 < secondNum && secondNum <= 3000 ){
				firstNum = (2500 - firstNum) * price[1]/100;
				secondNum = (secondNum - 2500) * price[2]/100;
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(2500 <= firstNum && firstNum < 3000 && 2500 < secondNum && secondNum <= 3000){
				firstNum = (secondNum - firstNum) * price[2]/100;				
				let itog = firstNum ;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(2000 > firstNum && 3000 < secondNum && secondNum <= 3500){
				firstNum = (2000 - firstNum) * price[0]/100;
				secondNum = (secondNum - 3000) * price[3]/100 + (500 * price[1]/100) + (500 * price[2]/100);
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 2000 && firstNum < 2500 && 3000 < secondNum && secondNum<= 3500){
				firstNum = (2500 - firstNum) * price[1]/100;
				secondNum = (secondNum - 3000) * price[3]/100 + (500 * price[2]/100);
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 2500 && firstNum < 3000 && 3000 < secondNum && secondNum <= 3500){
				firstNum = (3000 - firstNum) * price[2]/100;
				secondNum = (secondNum - 3000) * price[3]/100;
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 3000 && firstNum < 3500 && 3000 < secondNum && secondNum<= 3500){
				let itog = (secondNum - firstNum) * price[3]/100;
				result.innerHTML = itog.toFixed(2) + "$";
				////////////////////////////
			}else if(2000 >= firstNum && 3500 < secondNum && secondNum <= 4000){
				firstNum = (2000 - firstNum) * price[0]/100;
				secondNum = (secondNum - 3500) * price[4]/100 + (500 * price[1]/100) + (500 * price[2]/100) + (500 * price[3]/100);
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 2000 && firstNum <= 2500 && 3500 < secondNum && secondNum <= 4000){
				firstNum = (2500 - firstNum) * price[1]/100;
				secondNum = (secondNum - 3500) * price[4]/100 + (500 * price[2]/100) + (500 * price[3]/100);
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 2500 && firstNum <= 3000 && 3500 < secondNum && secondNum <= 4000){
				firstNum = (3000 - firstNum) * price[2]/100;
				secondNum = (secondNum - 3500) * price[4]/100 + (500 * price[3]/100);
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 3000 && firstNum <= 3500 && 3500 < secondNum && secondNum <= 4000){
				firstNum = (3500 - firstNum) * price[3]/100;
				secondNum = (secondNum - 3500) * price[4]/100;
				let itog = firstNum + secondNum;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(firstNum >= 3500 && firstNum <= 4000 && 3500 < secondNum && secondNum <= 4000){
				let itog = (secondNum - firstNum) * price[4]/100;
				result.innerHTML = itog.toFixed(2) + "$";
				//////////////////////////////////////////////////////////////////////
			}
		}
//Калькулятор для тренировки
function calculate_training(){
			let firstNum = document.getElementById("first_training").value;
			let time = document.getElementById("second_training").value;
			let result = document.getElementById("result_training");
			let price = [0.98, 1.58]

			if(isNaN(firstNum) || isNaN(time) ){
				result.innerHTML = 0 + "$";
			}else if(firstNum <= 2000 && time <= 240){
				price = price[0]/60 * time;
				let itog = price;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(2000 <= firstNum && firstNum <= 4000 && time <= 240){
				price = price[1]/60 * time;
				let itog = price;
				result.innerHTML = itog.toFixed(2) + "$";
			}else if(time > 240){
				result.innerHTML = "4 hours max!"
			}
		}
//Калькулятор для порядочности
function calculate_decency(){
			let firstNum = document.querySelector("#first_decency").value;
			let secondNum = document.querySelector("#second_decency").value;
			let result = document.querySelector("#result_decency");

			let price = 6.57;

			if(isNaN(firstNum) || isNaN(secondNum)){
				result.innerHTML = 0 + "$";
			}else if(secondNum > 10000){
				result.innerHTML = "???bro???"
			}else{
				let itog = price/1000 * (secondNum - firstNum);
				result.innerHTML = itog.toFixed(2) + "$";
			}
		}
//Тут коды для навигаций(Нужно потом оптимизировать)
document.querySelector("#first_label_hqfc").classList.add("nav_active");

		document.querySelector("#first_label_hqfc").onclick = function(){
			document.querySelector("#first_label_hqfc").classList.add("nav_active");
			document.querySelector("#second_label_hqfc").classList.remove("nav_active");
			document.querySelector("#third_label_hqfc").classList.remove("nav_active")
		}

		document.querySelector("#second_label_hqfc").onclick = function(){
			document.querySelector("#first_label_hqfc").classList.remove("nav_active")
			document.querySelector("#second_label_hqfc").classList.add("nav_active")
			document.querySelector("#third_label_hqfc").classList.remove("nav_active")

		}

		document.querySelector("#third_label_hqfc").onclick = function(){
			document.querySelector("#first_label_hqfc").classList.remove("nav_active");
			document.querySelector("#second_label_hqfc").classList.remove("nav_active")
			document.querySelector("#third_label_hqfc").classList.add("nav_active")

		}
document.querySelector("#slider_button").classList.add("active");

		document.querySelector("#slider_button").onclick = function(){
			document.querySelector("#slider_button").classList.add("active");
			document.querySelector("#slider_button_2").classList.remove("active");
			document.querySelector("#slider_button_3").classList.remove("active");
			document.querySelector("#slider_button_4").classList.remove("active");
		}

		document.querySelector("#slider_button_2").onclick = function(){
			document.querySelector("#slider_button").classList.remove("active");
			document.querySelector("#slider_button_2").classList.add("active");
			document.querySelector("#slider_button_3").classList.remove("active");
			document.querySelector("#slider_button_4").classList.remove("active");
		}

		document.querySelector("#slider_button_3").onclick = function(){
			document.querySelector("#slider_button").classList.remove("active");
			document.querySelector("#slider_button_2").classList.remove("active");
			document.querySelector("#slider_button_3").classList.add("active");
			document.querySelector("#slider_button_4").classList.remove("active");

		}

		document.querySelector("#slider_button_4").onclick = function(){
			document.querySelector("#slider_button").classList.remove("active");
			document.querySelector("#slider_button_2").classList.remove("active");
			document.querySelector("#slider_button_3").classList.remove("active");
			document.querySelector("#slider_button_4").classList.add("active");
		}
		
let first = document.querySelector("#first_i");
		let second = document.querySelector("#second_i");
		let third = document.querySelector("#third_i");

		first.classList.add("i_active");

		first.onclick = function(){
			first.classList.add("i_active")
			second.classList.remove("i_active")
			//third.classList.remove("i_active")
		}

		second.onclick = function(){
			first.classList.remove("i_active")
			second.classList.add("i_active")
			//third.classList.remove("i_active")
		}

		third.onclick = function(){
			first.classList.remove("i_active")
			second.classList.remove("i_active")
			//third.classList.add("i_active")
		}