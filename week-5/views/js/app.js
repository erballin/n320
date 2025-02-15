setInterval(() => {
  console.log((document.getElementById("timeElement").innerHTML = new Date().toLocaleString()));
}, 500);
