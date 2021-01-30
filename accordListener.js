const accord = document.getElementsByClassName('accord__item');


for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}