import { ScrollLock } from '../../utils/scroll-lock.js';
import { FocusLock } from '../../utils/focus-lock.js';

export class Header {
  constructor() {
    this._header = document.querySelector('[data-header]');
    this._toggle = document.querySelector('[data-toggle-menu]');
    this._scrollLock = new ScrollLock();
    this._focusLock = new FocusLock();
    this._isMenuOpen = false;

    this._onToggleClick = this._onToggleClick.bind(this);
    this._onDocumentKeydown = this._onDocumentKeydown.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }

  init() {
    if (!this._toggle) {
      return;
    }

    this._toggle.addEventListener('click', this._onToggleClick);
  }

  _openMenu() {
    this._isMenuOpen = true;
    this._header.classList.add('is-open');
    this._scrollLock.disableScrolling();
    document.addEventListener('keydown', this._onDocumentKeydown);
    document.addEventListener('click', this._onDocumentClick);
    this._focusLock.lock('[data-header]');
  }

  _closeMenu() {
    this._isMenuOpen = false;
    this._header.classList.remove('is-open');
    this._scrollLock.enableScrolling();
    document.removeEventListener('keydown', this._onDocumentKeydown);
    document.removeEventListener('click', this._onDocumentClick);
    this._focusLock.unlock('[data-header]');
  }

  _onToggleClick() {
    if (this._isMenuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  _onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      this._closeMenu();
    }
  }

  _onDocumentClick(evt) {
    if (evt.target.hasAttribute('[data-close-menu]')) {
      this._closeMenu();
    }
  }


}


if (window.innerWidth >= 1280) {
  $(document).ready(function () {
    $('.main-nav__link-jump').on('click', function (e) {
      e.preventDefault();

      const menu = $(this).next('.main-nav__sublist');
      if (!menu.hasClass('show')) {
        $('.main-nav__sublist').removeClass('show');
        menu.addClass('show');
      } else {
        window.location.href = $(this).attr('href');
      }

      $('.main-nav__link-jump').removeClass('active');
      $(this).addClass('active');
    });


    $(document).on('click', function (e) {
      if (!$(e.target).closest('.main-nav__link-jump, .main-nav__sublist').length) {
        $('.main-nav__sublist').removeClass('show');
        $('.main-nav__link-jump').removeClass('active');
      }
    });
  });
} else {
  $('.main-nav__sublist').removeClass('show');
  $('.main-nav__link-jump').removeClass('active');
}

const link = document.querySelector('.main-nav__link-jump');

if (window.innerWidth >= 1280) {
  link.addEventListener('click', () => {
    link.classList.remove('hover');
    link.classList.add('active');
  });

};
