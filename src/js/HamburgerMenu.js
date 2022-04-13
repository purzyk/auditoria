import $ from 'jquery'

class HamburgerMenu {
  constructor() {
    $(document).ready(function () {
      $('.hamburger-container').click(function () {
        $('#menu').slideToggle()
        $('.header__socials').slideToggle()
      })

      $(window).resize(function () {
        if (window.innerWidth > 1100) {
          $('#menu').removeAttr('style')
        }
      })

      let topBar = $('.hamburger li:nth-child(1)'),
        middleBar = $('.hamburger li:nth-child(2)'),
        bottomBar = $('.hamburger li:nth-child(3)')

      $('.hamburger-container').on('click', function () {
        if (middleBar.hasClass('rot-45deg')) {
          topBar.removeClass('rot45deg')
          middleBar.removeClass('rot-45deg')
          bottomBar.removeClass('hidden')
        } else {
          bottomBar.addClass('hidden')
          topBar.addClass('rot45deg')
          middleBar.addClass('rot-45deg')
        }
      })
    })
  }
}

export default HamburgerMenu
