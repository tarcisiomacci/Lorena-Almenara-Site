window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  // showBackToTopButtonOnScroll()
  // activateMenuAtCurrentSection(home)
  // activateMenuAtCurrentSection(services)
  // activateMenuAtCurrentSection(about)
  // activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine
  const sectionId = section.getAttribute('id')
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  // console.log(sectionBoundaries)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  var myNav = document.querySelector('#navigation')
  var myLogo = document.querySelector('.logo-img')
  if (scrollY > 0) {
    myNav.classList.add('scroll')
    myLogo.src = './assets/logo-lorena-almenara-white.png'
  } else {
    myNav.classList.remove('scroll')
    myLogo.src = './assets/logo-lorena-almenara.png'
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  var myLogo = document.querySelector('.logo-img')
  document.body.classList.add('menu-expanded')
  myLogo.src = './assets/logo-lorena-almenara-white.png'
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
  if (scrollY == 0) {
    var myLogo = document.querySelector('.logo-img')
    myLogo.src = './assets/logo-lorena-almenara.png'
  }
}

ScrollReveal({
  origin: 'bottom',
  distance: '700px',
  duration: 700
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
`)
