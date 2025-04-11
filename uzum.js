const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// Product card funksiyalari
document.querySelectorAll('.card-btns').forEach(btn => {
    btn.addEventListener('click', addToCart);
  });
  
  function addToCart() {
    // Savatga qo'shish logikasi
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }