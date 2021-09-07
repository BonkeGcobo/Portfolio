window.onload = () => {

  const hamburger= document.querySelector('#hamburger');
  hamburger.addEventListener('click', function(event){
  const myShow = document.querySelector('.mob-menu');
  const theHead = document.querySelector('.HEAD');
  theHead.classList.toggle('make_blur');
  myShow.classList.toggle('show');
      
  });

    const closeBtn=document.querySelector('.cancel_btn');
    closeBtn.addEventListener('click', function(event) {
    const myShow = document.querySelector('.mob-menu');
    const theHead = document.querySelector('.HEAD');
    theHead.classList.toggle('make_blur');
    myShow.classList.toggle('show');
  });

    const mobItems = document.querySelector ('.mob-items');
    mobItems.addEventListener('click', function(event) {
    const myShow = document.querySelector('.mob-menu');
    const theHead = document.querySelector('.HEAD');
    theHead.classList.toggle('make_blur');
    myShow.classList.toggle('show');
  });
};