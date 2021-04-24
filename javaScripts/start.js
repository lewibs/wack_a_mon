//on load start flashing the start text
window.onload = blinkStart;


function blinkStart() {
   var f = document.getElementById('clickStart');
   setInterval(function() {
      f.style.display = (f.style.display == 'none' ? '' : 'none');
   }, 850);
}
