var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var luis = document.getElementById('luis');
var about = document.getElementById('about');

luis.addEventListener('mouseenter', function() {
	console.log('hey');
	about.classList.add('show');
});
luis.addEventListener('mouseleave', function() {
	console.log('leave');
	about.classList.remove('show');
});
console.log(luis);
