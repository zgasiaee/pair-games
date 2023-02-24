$(document).ready(function () {
  const images = [
    '../assets/angular.svg',
    '../assets/gatsby.svg',
    '../assets/ruby.svg',
    '../assets/vue.svg',
    '../assets/react.svg',
    '../assets/ruby.svg',
    '../assets/svelte.svg',
    '../assets/angular.svg',
    '../assets/svelte.svg',
    '../assets/vue.svg',
    '../assets/react.svg',
    '../assets/gatsby.svg',
  ]

  var count = 0
  var items = []

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  const newImages = shuffleArray(images)

  for (var i = 0; i < 12; i++) {
    $(`#card${i} .back`).attr('src', `${newImages[i]}`)
  }

  $('.card').click(function () {
    $(this).css('transform', 'rotateY(180deg)')
    $(this).addClass('turned')
    count++

    var item = $(this).children('.back').attr('src').split('/')[2].split('.')[0]
    items.push(item)

    if (count === 2) {
      if (items[0] === items[1]) {
        $('.turned').addClass('correct')
      } else {
        $('.card').removeClass('turned')
        setTimeout(function () {
          $('.card:not(.correct)').css('transform', 'rotateY(0deg)')
        }, 700)
      }
      count = 0
      items = []

      if ($('.correct').length === 12) {
        setTimeout(function () {
          alert('Congratulation! you won')
        }, 1500)
      }
    }
  })
})
