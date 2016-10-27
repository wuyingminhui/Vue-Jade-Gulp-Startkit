var vm = new Vue({
  el: '#app',
  data: {
    tab: 1,
    defaultM: 'Home',
    allwidth: '100px',
    si: null,
    isInit: false,
    isMobile: false,
    bgwidth: '375px',
    height: '600px',
    width: '1000px',
    singlew: '100px',
    c_height: '0px',
    showM: false,
    slide_width: '375px',
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

    this.bgwidth = winWidth + 'px'
    this.allwidth = winWidth + 'px'
    this.slide_width = (winWidth - 20) + 'px'
    this.height = winHeight + 'px'
    this.c_height = (winHeight - 100) + 'px'
    this.width = (winWidth * 5 / 6) + 'px'
    this.imgwidth = (winWidth * 5 / 6 - 450)
    this.imgheight = (winWidth * 5 / 6 * 9 / 16 - 180) + 'px'
    // console.log((winWidth * 5 / 6 * 9 / 16) + 'px')
    this.singlew = winWidth / 12 + 'px'

    var browser = {
      versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion
        return {// 移动终端浏览器版本信息
          trident: u.indexOf('Trident') > -1, // IE内核
          presto: u.indexOf('Presto') > -1, // opera内核
          webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, // 是否iPad
          webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
          weixin: u.indexOf('MicroMessenger') > -1, // 是否微信
          qq: u.match(/\sQQ/i) === 'qq' // 是否QQ
        }
      }()
    }
    this.isMobile = browser.versions.mobile
    if (this.tab === 3) {
      this.$nextTick(function () {
        var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 3000
        })
      })
    }
  },
  methods: {
    tabpage: function (page) {
      vm.tab = page
      if (page === 3) {
        initSwiper()
      }
    },
    change: function () {
      changeSlide()
    },
    showMenu: function () {
      this.showM = !this.showM
    },
    goTo: function (page) {
      vm.tab = page
      this.showM = !this.showM
      if (page === 1) {
        vm.defaultM = 'Home'
      } else if (page === 2) {
        vm.defaultM = 'About US'
      } else if (page === 3) {
        initSwiper()
        vm.defaultM = 'Download App'
      } else if (page === 4) {
        vm.defaultM = 'Join US'
      }
    }
  }
})

vm.si = setInterval(changeSlide, 7000)

function changeSlide () {
  if (vm.isMobile) {
    $('.slide_line1').each(function () {
      if ($(this).hasClass('m_slide_c1')) {
        $(this).attr('id', 'm_slide_c1')
        $(this).addClass('m_animation_c1')

        WN.removeAnimEvent($('#m_slide_c1').get(0), myendcallback_m)
        WN.addAnimEvent($('#m_slide_c1').get(0), myendcallback_m)
      }
      if ($(this).hasClass('m_slide_c2')) {
        $(this).attr('id', 'm_slide_c2')
        $(this).addClass('m_animation_c2')

        WN.removeAnimEvent($('#m_slide_c2').get(0), myendcallback1_m)
        WN.addAnimEvent($('#m_slide_c2').get(0), myendcallback1_m)
      }
      if ($(this).hasClass('m_slide_c3')) {
        $(this).attr('id', 'm_slide_c3')
        $(this).addClass('m_animation_c3')

        WN.removeAnimEvent($('#m_slide_c3').get(0), myendcallback2_m)
        WN.addAnimEvent($('#m_slide_c3').get(0), myendcallback2_m)
      }
    })
  } else {
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

function myendcallback_m () {
  $('#m_slide_c1').removeClass('m_slide_c1')
  $('#m_slide_c1').addClass('m_slide_c3')
  $('#m_slide_c1').removeClass('m_animation_c1')
}

function myendcallback1_m () {
  $('#m_slide_c2').removeClass('m_slide_c2')
  $('#m_slide_c2').addClass('m_slide_c1')
  $('#m_slide_c2').removeClass('m_animation_c2')
}

function myendcallback2_m () {
  $('#m_slide_c3').removeClass('m_slide_c3')
  $('#m_slide_c3').addClass('m_slide_c2')
  $('#m_slide_c3').removeClass('m_animation_c3')
}

function initSwiper () {
  vm.$nextTick(function () {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 3000
    })
  })
}
