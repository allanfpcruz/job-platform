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

clearBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    clearCheckbox(e.target)
  })
})

function clearCheckbox(element) {
  let title = element.closest('div')
  let item = title.closest('div')
  let checkboxes = item.querySelectorAll('.check-content .check input')
  console.log(checkboxes)
}