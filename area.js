var side1 = document.querySelector(".side-one");
var side2 = document.querySelector(".side-two");
var side3 = document.querySelector(".side-three");
var button = document.querySelector(".button");
var message = document.querySelector(".message3");

function get_message(side1, side2, side3) {
  var first = Number(side1);
  var second = Number(side2);
  var third = Number(side3);
  
  var semi_peri = (first + second + third) / 2;
  var temp =
    semi_peri *
    (semi_peri - first) *
    (semi_peri - second) *
    (semi_peri - third);
  return "Area is " + Math.sqrt(temp);
}

function showmessage() {
  var recieved_mess = get_message(side1.value, side2.value, side3.value);
  message.innerText = recieved_mess;
}

button.addEventListener("click", showmessage);