var vm = new Vue({
  el: '#app',
  data: {
    tab: 3,
    si: null,
    height: '600px',
    width: '1000px',
    singlew: '100px',
    imgwidth: '1000px',
    imgheight: '1000px'
  },
  created: function () {
    var winHeight
    if (window.innerHeight) {
      winHeight = window.innerHeight
    } else if ((document.body) && (document.body.clientHeight)) {
      winHeight = document.body.clientHeight
    }
    var winWidth
    if (window.innerWidth) {
      winWidth = window.innerWidth
    } else if ((document.body) && (document.body.clientWidth)) {
      winWidth = document.body.clientWidth
    }
    this.height = winHeight + 'px'
    this.width = (winWidth * 5 / 6) + 'px'
    this.imgwidth = (winWidth * 5 / 6 - 450)
    this.imgheight = (winWidth * 5 / 6 * 9 / 16 - 180) + 'px'
    // console.log((winWidth * 5 / 6 * 9 / 16) + 'px')
    this.singlew = winWidth / 12 + 'px'
  },
  methods: {
    tabpage: function (page) {
      vm.tab = page
    },
    change: function () {
      changeSlide()
    }
  }
})

vm.si = setInterval(changeSlide, 5000)

function changeSlide () {
  $('.slide_line').each(function () {
    if ($(this).hasClass('slide_c1')) {
      $(this).attr('id', 'slide_c1')
      $(this).addClass('animation_c1')

      WN.removeAnimEvent($('#slide_c1').get(0), myendcallback)
      WN.addAnimEvent($('#slide_c1').get(0), myendcallback)
    }
    if ($(this).hasClass('slide_c2')) {
      $(this).attr('id', 'slide_c2')
      $(this).addClass('animation_c2')

      WN.removeAnimEvent($('#slide_c2').get(0), myendcallback1)
      WN.addAnimEvent($('#slide_c2').get(0), myendcallback1)
    }
    if ($(this).hasClass('slide_c3')) {
      $(this).attr('id', 'slide_c3')
      $(this).addClass('animation_c3')

      WN.removeAnimEvent($('#slide_c3').get(0), myendcallback2)
      WN.addAnimEvent($('#slide_c3').get(0), myendcallback2)
    }
  })
}

function myendcallback () {
  $('#slide_c1').removeClass('slide_c1')
  $('#slide_c1').addClass('slide_c3')
  $('#slide_c1').removeClass('animation_c1')
}

function myendcallback1 () {
  $('#slide_c2').removeClass('slide_c2')
  $('#slide_c2').addClass('slide_c1')
  $('#slide_c2').removeClass('animation_c2')
}

function myendcallback2 () {
  $('#slide_c3').removeClass('slide_c3')
  $('#slide_c3').addClass('slide_c2')
  $('#slide_c3').removeClass('animation_c3')
}

var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  autoplay: 5000
})
