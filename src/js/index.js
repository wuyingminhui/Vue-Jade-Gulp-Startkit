var vm = new Vue({
  el: '#app',
  data: {
    tab: 1,
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
    this.width = (winWidth * 5 / 6 + 50) + 'px'
    this.imgwidth = (winWidth * 5 / 6 - 450)
    this.imgheight = (winWidth * 5 / 6 * 9 / 16 - 180) + 'px'
    // console.log((winWidth * 5 / 6 * 9 / 16) + 'px')
    this.singlew = winWidth / 12 + 'px'
  },
  methods: {
    tabpage: function (page) {
      vm.tab = page
    }
  }
})

var mySwiper = new Swiper ('.swiper-container', {
  direction: 'vertical',
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflow: {
    rotate: 0,
    stretch: 10,
    depth: 1500,
    modifier: 1,
    slideShadows: true
  }
  // 如果需要分页器
})
