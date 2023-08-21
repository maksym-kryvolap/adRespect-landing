'use strict';

const masonry = new Macy({
  container: '.gallery',
  mobileFirst: true,
  columns: 3,
  breakAt: {
    400: 2,
    750: 3,
  },
  margin: {
    x: 43,
    y: 43,
  },
});

const modal = document.querySelector('dialog');
const modalBox = document.getElementById('modal-box');
const closeModalBtn = document.getElementById('close-modal-btn');

const box = document.querySelectorAll('.gallery__photo');
const modalPhoto = document.getElementById('gallery-photo');
const galleryButton = document.getElementById('gallery-button');
const gallery = document.getElementById('gallery');

box.forEach(element =>
  element.addEventListener('click', (e) => {
    modalPhoto.src = `${e.currentTarget.src}`;
    modal.showModal();
    isModalOpen = true;
    e.stopPropagation();
  })
);

let isModalOpen = false;

closeModalBtn.addEventListener('click', () => {
  modal.close();
  isModalOpen = false;
  modalPhoto.src = '';
});

document.addEventListener('click', (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close();
  }
});

galleryButton.addEventListener('click', () => {
  gallery.classList.toggle('gallery-tool');
  galleryButton.style.display = 'none';
});

const inputSearch = document.getElementById('input');
const labelSearch = document.getElementById('label');
const inputSearchMobile = document.getElementById('input-mobile');
const labelSearchMobile = document.getElementById('label-mobile');
const menuMobile = document.getElementById('menu-mobile');
const navigationLinks = document.querySelectorAll('.nav__link');

inputSearch.addEventListener('click', () => {
  navigationLinks.forEach((el) => {
    el.style.display = 'none';
  });
  inputSearch.style.display = 'block';
  labelSearch.style.width = 'max-content';
  inputSearch.focus();
});

inputSearch.onblur = () => {
  navigationLinks.forEach((el) => {
    el.style.display = 'block';
  });
  labelSearch.style.width = '24px';
  inputSearch.style.display = 'none';
};

inputSearchMobile.addEventListener('click', () => {
  inputSearchMobile.style.display = 'block';
  menuMobile.style.display = 'none';
  labelSearchMobile.style.width = 'max-content';
  inputSearchMobile.focus();
});

inputSearchMobile.onblur = () => {
  labelSearchMobile.style.width = '24px';
  inputSearchMobile.style.display = 'none';
  menuMobile.style.display = 'block';
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});
