const h2 = document.querySelector("#christmas_d_day h2:last-child");

function christmasDay() {
  const date = new Date();
  const christmas = new Date(2021,12,25);
  const gap = christmas.getTime() - date.getTime();
  const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
  const hour = String(Math.ceil(gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).padStart(2,0);
  const miunte = String(Math.ceil(gap % (1000 * 60 * 60) / (1000 * 60))).padStart(2,0);
  const second = String(Math.ceil(gap % (1000 * 60) / (1000))).padStart(2,0);

  h2.innerHTML = `${result}d ${hour}h ${miunte}m ${second}s`
  console.log(`${result}d ${hour}h ${miunte}m ${second}s`);
}

christmasDay();
setInterval(christmasDay, 1000);