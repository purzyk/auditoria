import $ from 'jquery'

class SmoothScroll {
  constructor() {
    $(document).ready(() => {
      $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname === this.hostname
          ) {
            let target = $(this.hash)
            target = target.length ? target : $(`[name=${this.hash.slice(1)}]`)

            if (target.length) {
              event.preventDefault()
              $('html, body').animate(
                {
                  scrollTop: target.offset().top - 50,
                },
                1000,
                () => {
                  const $target = $(target)
                  $target.focus()
                  if ($target.is(':focus')) {
                    return false
                  }
                  $target.attr('tabindex', '-1')
                  $target.focus()
                }
              )
            }
          }
        })
    })
  }
}

export default SmoothScroll
