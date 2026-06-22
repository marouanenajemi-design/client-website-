(function () {
  'use strict';

  // Wishlist toggle
  document.querySelectorAll('.cw-page .js-wish').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var active = this.classList.toggle('is-active');
      this.setAttribute('aria-pressed', active);
    });
  });

  // Cart button – quick pulse feedback
  document.querySelectorAll('.cw-page .js-cart').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var el = this;
      el.style.transform = 'scale(1.25)';
      el.style.background = '#1e4a1e';
      setTimeout(function () {
        el.style.transform = '';
        el.style.background = '';
      }, 280);
    });
  });

})();
