const h1= document.querySelector("#clock h1");

function presentTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,0);
  const minute = String(date.getMinutes()).padStart(2,0);
  const second = String(date.getSeconds()).padStart(2,0);

  h1.innerHTML = `${hour}:${minute}:${second}`;
}

presentTime();
setInterval(presentTime, 1000);