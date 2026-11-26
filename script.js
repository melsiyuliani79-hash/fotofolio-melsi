// Ganti nama di sini
var NAMA = "Namamu";
document.getElementById("nama").textContent = NAMA;
document.title = "Riwayat Sekolah " + NAMA;

var track = document.getElementById("track"), fill = document.getElementById("fill");
var stops = [].slice.call(document.querySelectorAll(".stop"));
function update(){
  var line = window.innerHeight * 0.6;
  var r = track.getBoundingClientRect();
  var h = Math.max(0, Math.min(r.height, line - r.top));
  fill.style.height = h + "px";
  stops.forEach(function(s){
    var top = s.getBoundingClientRect().top;
    s.classList.toggle("on", top + 28 < line);
  });
}
window.addEventListener("scroll", update, {passive:true});
window.addEventListener("resize", update);
update();
