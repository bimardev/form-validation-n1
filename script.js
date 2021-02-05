const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    alert('Name is required')
  }
  if (password.value === '' || password.value == null) {
    alert('Password is required')
  }

  /*if (password.value.length <= 6) {
    alert('Password must be longer than 6 characters')
  }
  */
  if (password.value.length >= 20) {
    alert('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    alert('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})