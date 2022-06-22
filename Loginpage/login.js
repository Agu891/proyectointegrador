const form = document.querySelector('#form')


form.addEventListener('submit', (event) => {
  event.preventDefault()
  let user = document.querySelector('#usuario').value
  sessionStorage.setItem('usuario', user)
  window.location.href = "../index.html"
})

