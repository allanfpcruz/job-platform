//troca tema 
const themeBtn = document.getElementById('theme-toggle')

themeBtn.addEventListener('change', (e) => {
  if (e.target.checked) {
    
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})

//seleciona itens no navbar
const navbar = document.querySelectorAll('.left-section nav ul li')

navbar.forEach(item => {
  item.addEventListener('click', () => {
    navbar.forEach(navItem => {
      navItem.classList.remove('selected')
    })
    item.classList.add('selected')
  })
})

//limpa checkboxes
const clearBtn = document.querySelectorAll('.right-section .filter-container .item .title p')
const clearAllBtn = document.querySelector('.right-section .separator p#clear-all')

clearBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    clearCheckbox(e.target)
  })
})

clearAllBtn.addEventListener('click', (e) => {
  const allItems = document.querySelectorAll('.right-section .filter-container .item')
  clearCheckbox(allItems)
})

function clearCheckbox(element) {
  if (element.length > 1) {
    element.forEach(item => {
      let checkboxes = item.querySelectorAll('.check-content .check input')
      checkboxes.forEach(checkInput => {
        if (checkInput.checked) {
        checkInput.checked = false
        }
      });
    })
  } else {
    let title = element.closest('div')
    let item = title.parentNode
    let checkboxes = item.querySelectorAll('.check-content .check input')
    checkboxes.forEach(checkInput => {
      if (checkInput.checked) {
        checkInput.checked = false
      }
    });
  }
}

//abrir left-section
const toggleMenu = document.querySelector('.content header i#toggle-menu')
const leftSection = document.querySelector('.left-section')

toggleMenu.addEventListener('click', () => {
  leftSection.style.display = 'flex'
})

//fechar left-section 
if (window.innerWidth <= 1024) {
  document.addEventListener('click', (e) => {
    if (checkTheLeftSection(e.target)) {
      leftSection.style.display = 'none'
    }
  })
}

function checkTheLeftSection(element) {
  if (element.classList.contains('left-section') || element.classList.contains('title') || element.nodeName == 'H1' || element.classList.contains('title-phrase') || element.nodeName == 'NAV' || element.nodeName == 'UL' || element.nodeName == 'LI' || element.nodeName == 'A' || element.nodeName == 'SPAN' || element.classList.contains('nav-icon') || element.classList.contains('profile-card') || element.classList.contains('infos') || element.classList.contains('title') || element.classList.contains('profile-img') || element.classList.contains('profile-title') || element.classList.contains('profile-phrase') || element.classList.contains('profile-button') || element.id == 'toggle-menu') {
    return false
  } else {
    return true
  }
}