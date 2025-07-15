let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  //ty w3s



const buttons = document.querySelectorAll('.menuitembuy');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        alert('You ordered ' + item);
    });
});