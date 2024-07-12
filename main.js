const themeBtn = document.getElementById('theme-toggle')


themeBtn.addEventListener('change', (e) => {
  if (e.target.checked) {
    
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})

const navbar = document.querySelectorAll('.left-section nav ul li')

navbar.forEach(item => {
  item.addEventListener('click', () => {
    navbar.forEach(navItem => {
      navItem.classList.remove('selected')
    })
    item.classList.add('selected')
  })
})