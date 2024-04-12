document.addEventListener("mousemove", function(event) {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  
  const red = Math.round(x * 255);
  const green = Math.round(y * 255);
  const blue = Math.round((x + y) * 128) % 255;

  document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
});
