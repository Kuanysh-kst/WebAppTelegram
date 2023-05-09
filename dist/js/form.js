let form = document.querySelector("#form");
let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.text = "Changed Text";
tg.MainButton.setText = ("Canged Text1");
tg.MainButton.textColor = "#143F6B";
tg.MainButton.setParams({"color":"#143F6B"});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let text1 = document.getElementById("text1").value;
  let text2 = document.getElementById("text2").value;

  let token = "5920322820:AAGDmCGI1cUjqa8p3LlSwEtWOTGEWv-2K9A";

  let my_text = `Resutl is:%0A - Text1: ${text1} - Text2: ${text2}`;

  // let chat_id = 928437440;
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`;

  let api = new  XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  console.log("Message successfully");

  tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
  tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
  tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
  tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
  tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 
  document.getElementById("user_id") = `${tg.initDataUnsafe.user.id}`;

  btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isVisible){ //если кнопка показана 
      tg.MainButton.hide() //скрываем кнопку 
    }
    else{ //иначе
      tg.MainButton.show() //показываем 
    }
  })

  let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
  btnED.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isActive){ //если кнопка показана 
		tg.MainButton.setParams({"color": "#E0FFFF"}); //меняем цвет
		tg.MainButton.disable() //скрываем кнопку 
	}
	else{ //иначе
		tg.MainButton.setParams({"color": "#143F6B"}); //меняем цвет
		tg.MainButton.enable() //показываем 
	}
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
	//при клике на основную кнопку отправляем данные в строковом виде
});

let usercard = document.getElementById("usercard"); //получаем блок usercard 

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

let userid = document.createElement('p'); //создаем еще параграф 
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем
document.getElementById("user_id") = `${tg.initDataUnsafe.user.id}`;

});
