const form = document.getElementById( 'form' )
const username = document.getElementById( 'username' )
const email = document.getElementById( 'email' )
const password = document.getElementById( 'password' )
const confirmPassword = document.getElementById( 'confirmPassword' )


// Set error and success classes on the input control
const setClass = ( element, className ) => {
  element.parentElement.classList.add( className )
  element.parentElement.classList.remove( className === 'error' ? 'success' : 'error' )
}

// Validate the input value
const validateInput = ( element, validator, errorMessage ) => {
  if ( !validator( element.value.trim() ) ) {
    setClass( element, 'error' )
    element.parentElement.querySelector( '.error' ).textContent = errorMessage
  } else {
    setClass( element, 'success' )
    element.parentElement.querySelector( '.error' ).textContent = ''
  }
}

// Validate the form
const validateForm = () => {
  // Validate required fields
  validateInput( username, value => value !== '', 'Username is required' )
  validateInput( email, value => value !== '', 'Email is required' )
  validateInput( password, value => value !== '', 'Password is required' )
  validateInput( confirmPassword, value => value !== '', 'Please confirm your password' )

  // Validate email format
  validateInput( email, value => isValidEmail( value ), 'Provide a valid email address' )

  // Validate password length
  validateInput( password, value => value.length >= 8, 'Password must be at least 8 characters' )

  // Validate password match
  validateInput( confirmPassword, value => value === password.value, 'Passwords must match' )
}

// Submit the form if all inputs are valid
form.addEventListener( 'submit', e => {
  e.preventDefault()

  validateForm()

  if ( form.classList.contains( 'success' ) ) {
    form.submit()
  }
} )

// Regular expression for validating email addresses
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test( String( email ).toLowerCase() )
}

const previewIcon1 = document.querySelector( '#password-preview i' )
const previewButton1 = document.querySelector( '#password-preview' )
const previewIcon2 = document.querySelector( '#confirm-password-preview i' )
const previewButton2 = document.querySelector( '#confirm-password-preview' )

const previewToggle1 = () => {
  if ( password.type === 'password' ) {
    password.type = 'text'
    previewIcon1.classList.remove( 'fa-eye' )
    previewIcon1.classList.add( 'fa-eye-slash' )
  } else {
    password.type = 'password'
    previewIcon1.classList.remove( 'fa-eye-slash' )
    previewIcon1.classList.add( 'fa-eye' )
  }
}

previewButton1.addEventListener( 'click', previewToggle1 )

const previewToggle2 = () => {
  if ( confirmPassword.type === 'password' ) {
    confirmPassword.type = 'text'
    previewIcon2.classList.remove( 'fa-eye' )
    previewIcon2.classList.add( 'fa-eye-slash' )
  } else {
    confirmPassword.type = 'password'
    previewIcon2.classList.remove( 'fa-eye-slash' )
    previewIcon2.classList.add( 'fa-eye' )
  }
}

previewButton2.addEventListener( 'click', previewToggle2 )
