window.onload= ()=> {

    const hamburger= document.querySelector('#hamburger');
    hamburger.addEventListener('click', function(event){
      const my_show=document.querySelector('.mob-menu');
      const the_head=document.querySelector('.HEAD');
      the_head.classList.toggle('make_blur');
      my_show.classList.toggle('show');
      
  });

    const close_btn=document.querySelector('.cancel_btn');
    close_btn.addEventListener('click', function(event){
        const my_show=document.querySelector('.mob-menu');
        const the_head=document.querySelector('.HEAD');
        the_head.classList.toggle('make_blur');
        my_show.classList.toggle('show');
    });

    const mobitems = document.querySelector ('.mob-items');
    
    mobitems.addEventListener('click', function(event){
      const my_show = document.querySelector('.mob-menu');
      const the_head=document.querySelector('.HEAD');
      the_head.classList.toggle('make_blur');
      my_show.classList.toggle('show');
    });

   

  }