const time = document.getElementById("time"),
  greeting = document.getElementById("greet"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");
content = document.getElementById("content");
author = document.getElementById("author");
//option
const showAmPm = true;
//show time function

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //set am pm
  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr format
  hour = hour % 12 || 12;

  //output
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ""}`;
  setTimeout(showTime, 1000);
}
//Add zeros in sec
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//set backround
function setBg() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //morning
    document.body.style.backgroundImage = "url('../image/morning1.jpeg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //afternoon
    document.body.style.backgroundImage = "url('../image/sundet.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    //evening
    document.body.style.backgroundImage = "url('../image/night.jpeg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}
//getname
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//setname
function setName(e) {
  if (e.type === "keypress") {
    //enter is pressed
    //13 is enter key
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//getfocus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//setFocus
function setFocus(e) {
  if (e.type === "keypress") {
    //enter is pressed
    //13 is enter key
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

//name
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
//focus
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// axios.get("https://api.quotable.io/random").then((res) => {
//   content.textContent = res.data.content;
//   author.textContent = res.data.author;
// });

//run
showTime();
setBg();
getName();
getFocus();

