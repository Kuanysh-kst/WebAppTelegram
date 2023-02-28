let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let text1 = document.getElementById("text1").value;
  let text2 = document.getElementById("text2").value;

  let token = "5920322820:AAGDmCGI1cUjqa8p3LlSwEtWOTGEWv-2K9A";

  let my_text = `Resutl is:%0A - Text1: ${text1} - Text2: ${text2}`;

  let chat_id = 928437440;
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`;

  let api = new  XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  console.log("Message successfully");
});
