window.onload = () => {
  const hamburger = document.querySelector('#hamburger');
  hamburger.addEventListener('click', () => {
    const myShow = document.querySelector('.mob-menu');
    const theHead = document.querySelector('.HEAD');
    theHead.classList.toggle('make_blur');
    myShow.classList.toggle('show');
  });

  const closeBtn = document.querySelector('.cancel_btn');
  closeBtn.addEventListener('click', () => {
    const myShow = document.querySelector('.mob-menu');
    const theHead = document.querySelector('.HEAD');
    theHead.classList.toggle('make_blur');
    myShow.classList.toggle('show');
  });

  const mobItems = document.querySelector('.mob-items');
  mobItems.addEventListener('click', () => {
    const myShow = document.querySelector('.mob-menu');
    const theHead = document.querySelector('.HEAD');
    theHead.classList.toggle('make_blur');
    myShow.classList.toggle('show');
  });

  const store = [{
    detail1: 'key1',
    name: 'Tonic',
    img: 'images/Project_1.svg',
    img_desk: 'images/card_1_image_desk.svg',
    name_desk: 'Tonic',
    companyName: 'CANOPY',
    companyNameDesk: 'Canopy',
    job: 'Back End Dev',
    jobDesk: 'Back End Dev',
    year: 2015,
    yearDesk: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tags: ['html', 'css', 'javaScript'],
    links: [
      'https://bonkegcobo.github.io/Portfolio/',
      'https://github.com/BonkeGcobo/Portfolio',
    ],

  },

  {
    detail2: 'key2',
    name: 'Tonic',
    name_desk: 'Facebook 360',
    img: 'images/Project_2.svg',
    img_desk: 'images/desk_2.svg',
    companyName: 'Canopy',
    job: 'Full Stack Dev',
    year: 2015,
    companyNameDesk: 'Canopy',
    jobDesk: 'Full Stack Dev',
    yearDesk: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing.',
    tags: ['html', 'css', 'javaScript'],
    links: [
      'https://bonkegcobo.github.io/Portfolio/',
      'https://github.com/BonkeGcobo/Portfolio',
    ],
  },

  {
    detail3: 'key3',
    name: 'Tonic',
    name_desk: 'Facebook 360',
    img: 'images/Project_3.svg',
    img_desk: 'images/desk_3.svg',
    companyName: 'Canopy',
    job: 'Back End Dev',
    year: 2015,
    companyNameDesk: 'Canopy',
    jobDesk: 'Full Stack Dev',
    yearDesk: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing.',
    tags: ['html', 'css', 'javaScript'],
    links: [
      'https://bonkegcobo.github.io/Portfolio/',
      'https://github.com/BonkeGcobo/Portfolio',
    ],
  },

  {
    detail4: 'key4',
    name: 'Tonic',
    name_desk: 'Uber Navigation',
    img: 'images/Project_4.svg',
    img_desk: 'images/Project_4_desktop.svg',
    companyName: 'Canopy',
    companyNameDesk: 'Uber',
    jobDesk: 'Lead Developer',
    yearDesk: 2018,
    job: 'Back End Dev',
    year: 2018,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. ',
    tags: ['html', 'css', 'javaScript'],
    links: [
      'https://bonkegcobo.github.io/Portfolio/',
      'https://github.com/BonkeGcobo/Portfolio',
    ],
  },
  ];

  const name = document.querySelector('.nameOfProject');
  const nameDesk = document.querySelector('.nameOfProject_desk'); /* Calling desktop project */

  const companyName = document.getElementById('company');
  const companyNameDesk = document.getElementById('company_Desk');

  const job = document.getElementById('job');
  const jobDesk = document.getElementById('job_Desk');

  const year = document.getElementById('year');
  const yearDesk = document.getElementById('year_Desk');

  const image = document.getElementById('img');
  const imageDesk = document.getElementById('imgDesk');

  const text = document.getElementById('pop_Text');
  const Desktext = document.getElementById('pop_Text_desk');

  const link1 = document.getElementById('link_1');
  const link2 = document.getElementById('link_2');

  const link1Desk = document.getElementById('link_1_desk');
  const link2Desk = document.getElementById('link_2_desk');

  const btn1 = document.querySelector('.btnProj1');
  const btn2 = document.querySelector('.btnProj2');
  const btn3 = document.querySelector('.btnProj3');
  const btn4 = document.querySelector('.btnProj4');

  let modalMob;

  function media(size) {
    if (size.matches) {
      modalMob = document.querySelector('.modal_mob_desk');
      modalMob.style.display = 'block';
    } else {
      modalMob = document.querySelector('.modal_mob');
      modalMob.style.display = 'block';
    }
  }
  const span = document.getElementsByClassName('close')[0];
  const spanDesk = document.getElementsByClassName('close_desk')[0];

  function changePopup(order) {
    const detail = store[order];
    name.textContent = detail.name;

    nameDesk.textContent = detail.name_desk;

    text.innerHTML = detail.description;
    Desktext.innerHTML = detail.description;
    console.log(detail.name);

    companyName.innerHTML = detail.companyName;
    console.log(companyName.innerHTML);
    companyNameDesk.innerHTML = detail.companyNameDesk;

    job.innerHTML = detail.job;
    jobDesk.innerHTML = detail.jobDesk;

    year.innerHTML = detail.year;
    yearDesk.innerHTML = detail.yearDesk;

    /* link1.action = detail.links[0];
    link2.action = detail.links[1]; */

    const [live, source] = detail.links;
    link1.action = live;
    link2.action = source;

    const [liveDesk, sourceDesk] = detail.links;
    link1Desk.action = liveDesk;
    link2Desk.action = sourceDesk;

    image.src = detail.img;
    imageDesk.src = detail.img_desk;

    const tagsLength = detail.tags.length;
    const tagDiv = document.querySelector('.tag_list');
    const tagDivDesk = document.querySelector('.tag_list_desk');
    tagDiv.innerHTML = '';
    tagDivDesk.innerHTML = '';

    for (let i = 0; i < tagsLength; i += 1) {
      const element = document.createElement('li');
      element.textContent = detail.tags[i];
      console.log(element.textContent);
      tagDiv.appendChild(element);
      tagDivDesk.appendChild(element);
      element.style.display = 'inline';
      element.style.alignItems = 'center';
      element.style.borderRadius = '8px';
      element.style.color = '#6070ff';
      element.style.padding = '8px 12px';
      element.style.fontSize = '12px';
      element.style.listStyleType = 'none';
      element.style.fontWeight = '500';
      element.style.margin = '5px';
      element.style.background = '#ebebff';
    }
  }

  const size = window.matchMedia('(min-width: 1000px)');
  span.onclick = function bar() {
    modalMob.style.display = 'none';
  };

  spanDesk.onclick = function bar() {
    modalMob.style.display = 'none';
  };

  btn1.onclick = function bar() {
    media(size);
    changePopup(1);
  };

  btn2.onclick = function bar() {
    media(size);
    changePopup(2);
  };

  btn3.onclick = function bar() {
    media(size);
    changePopup(3);
  };

  btn4.onclick = function bar() {
    media(size);
    changePopup(4);
  };
};
