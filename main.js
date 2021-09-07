window.onload= ()=> {

    const hamburger= document.querySelector('#hamburger');
  
    hamburger.addEventListener('click', function(event){
      const my_show=document.querySelector('.mob-menu');
      my_show.classList.toggle('show');
      
  });

    const close_btn=document.querySelector('.cancel_btn');
    close_btn.addEventListener('click', function(event){
        const my_show=document.querySelector('.mob-menu');
        my_show.classList.toggle('show');
    });

  }