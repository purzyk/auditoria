import $ from 'jquery'

class SlickCarousell {
  constructor() {
    $('.js__logotypes').slick({
      slidesToShow: 6,
      slidesToScroll: 3,
      infinite: true,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
    $('.slider').slick({
      infinite: true,
      arrows: false,
      dots: false,
      autoplay: false,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
    })

    let percentTime
    let tick
    let time = 0.1
    let progressBarIndex = 0

    $('.progressBarContainer .progressBar').each(function (index) {
      let progress = "<div class='inProgress inProgress" + index + "'></div>"
      $(this).html(progress)
    })

    function startProgressbar() {
      resetProgressbar()
      percentTime = 0
      tick = setInterval(interval, 10)
    }

    function interval() {
      if (
        $('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr(
          'aria-hidden'
        ) === 'true'
      ) {
        progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data('slickIndex')
        startProgressbar()
      } else {
        percentTime += 1 / (time + 5)
        $('.inProgress' + progressBarIndex).css({
          width: percentTime + '%',
        })
        $('.inProgress' + progressBarIndex)
          .closest('.item')
          .addClass('active')
        if (percentTime >= 100) {
          $('.single-item').slick('slickNext')
          progressBarIndex++
          if (progressBarIndex > 2) {
            progressBarIndex = 0
          }
          startProgressbar()
        }
      }
    }

    function resetProgressbar() {
      $('.item').removeClass('active')
      $('.inProgress').css({
        width: 0 + '%',
      })
      clearInterval(tick)
    }
    startProgressbar()

    $('.item').click(function () {
      clearInterval(tick)
      let goToThisIndex = $(this).find('span').data('slickIndex')
      $('.single-item').slick('slickGoTo', goToThisIndex, false)
      startProgressbar()
    })
  }
}

export default SlickCarousell
