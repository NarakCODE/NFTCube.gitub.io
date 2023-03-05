const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const navbarList = document.querySelector('.nav-list');



menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('open');
   navbarList.classList.toggle('show');
});

window.addEventListener('scroll', function () {
   header.classList.toggle('sticky', this.window.scrollY > 0);
});



// ! Login Form Modal Popup

const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const btnBuy = document.getElementById('btn-buy');
const closeBtn = document.getElementById('close-btn');
const section = document.querySelector('section');

btnBuy.addEventListener('click', () => {
   modalBg.classList.add('popup');
   modal.classList.add('popup');
   // Disable scroll
   body.style.overflow = "hidden";
});

closeBtn.addEventListener('click', () => {
   modalBg.classList.remove('popup');
   modal.classList.remove('popup');
});

modalBg.addEventListener('click', () => {
   modalBg.classList.remove('popup');
   modal.classList.remove('popup');
   // Enable scroll
   body.style.overflow = "auto";
});


// !Marketplace card quick view
const marketplaceCard = document.querySelector('.marketplace-card');
const mkModalContainer = document.querySelector('.mk_modal_container');
const mkBg = document.querySelector('.mk_modal_bg');
const mkCard = document.querySelectorAll('.mk-card');
const mkModal = document.querySelector('.mk_modal');
let mkModalImg = document.querySelector('#mk_modal_img');

mkCard.forEach((card, index) => {
   const mkCardImg = card.querySelector('#mk_card_img').getAttribute('src');

   card.onclick = () => {
      mkModalImg.setAttribute('src', mkCardImg);
      mkModalContainer.classList.add('mk_modal_container_show')
      mkBg.classList.add('mk_modal_bg_show')
      mkModal.classList.add('mk_modal_show');
      body.style.overflow = "hidden";
   }
})

const closeModal = document.querySelector('.close-modal')
const btnCancel = document.querySelector('.btn-cancel')

closeModal.addEventListener('click', () => {
   mkModalContainer.classList.remove('mk_modal_container_show')
   mkBg.classList.remove('mk_modal_bg_show')
   mkModal.classList.remove('mk_modal_show')
   body.style.overflow = "auto";
})

mkBg.addEventListener('click', () => {
   mkModalContainer.classList.remove('mk_modal_container_show')
   mkBg.classList.remove('mk_modal_bg_show')
   mkModal.classList.remove('mk_modal_show')
   body.style.overflow = "auto";
})

// &responsive marketplace modal
btnCancel.addEventListener('click', () => {
   mkModalContainer.classList.remove('mk_modal_container_show')
   mkBg.classList.remove('mk_modal_bg_show')
   mkModal.classList.remove('mk_modal_show')
   body.style.overflow = "auto";
})

//  &CONNECT TO A WALLET MODAL POPUP
const walletBtn = document.getElementById('connect-to-wallet-btn');
const walletModalBg = document.querySelector('.wallet-modal-bg');
const wallet = document.querySelector('.wallet');
const wCloseBtn = document.querySelector('.w-close-btn');

walletBtn.onclick = () => {
   wallet.classList.add('wallet-popup');
   walletModalBg.classList.add('wallet-modal-bg-popup');
   body.style.overflow = "hidden";

}

wCloseBtn.onclick = () => {
   wallet.classList.remove('wallet-popup');
   walletModalBg.classList.remove('wallet-modal-bg-popup');
   body.style.overflow = "auto";
}

walletModalBg.onclick = () => {
   wallet.classList.remove('wallet-popup');
   walletModalBg.classList.remove('wallet-modal-bg-popup');
   body.style.overflow = "auto";
}