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

   class proJect  {
     constructor(title, exp, img, content, skills) {
      this.title =title;
      this.exp = exp;
      this.img = img;
      this.content = content;
      this.skills =skills;
     }
  }

  let seeProject = Array.from(document.querySelectorAll('.proj_button'));


  for(let proBtn of seeProject){
    console.log(proBtn);
    if(proBtn.classList.contains('btnProj1')){
      proBtn.addEventListener('click',function(openModal){
        const text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
        
        let proj=new proJect(document.getElementById('title_1'),
        document.getElementById('exp_1'),document.getElementById('img_1'),text, document.getElementById('lan_1'));
        

        let modal_mob=document.querySelector('.modal_mob');
        let model_content=document.querySelector('.model_content');
        
        let popUpHeader=document.querySelector('.pop_upHeader');
        popUpHeader.appendChild(proj.title);
    
        modal_mob.style.display='block'
        
        /*let myExp=document.querySelector(".experience");*/
        model_content.appendChild(proj.exp);

        /*let theImage=document.querySelector('.the_img');*/
        model_content.appendChild(proj.img);

        let popUp_content=document.createElement('div');
        popUp_content.className='popUp_content';
        let para_content=document.createElement('p');
        para_content.className='para_content';
        para_content.textContent=proj.content;
        popUp_content.appendChild(para_content);
        model_content.appendChild(popUp_content);

      })
    }
    else if(proBtn.classList.contains('btnProj2')){
      proBtn.addEventListener('click',function(event){
        const content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
        let proj=new proJect(document.getElementById('title_2'),
        document.getElementById('exp_2'),document.getElementById('img_2'), content, document.getElementById('lan_2'));
    
        console.log(proj);
      })
  
    }

  }
  
  


};