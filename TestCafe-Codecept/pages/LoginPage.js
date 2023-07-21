const { I } = inject()

class loginPage {
  constructor() {
    //insert your locators
    // this.button = '#button'
  }
  // insert your methods here
}

// For inheritance
module.exports = {
  goto() {
    I.amOnPage('http://zero.webappsecurity.com/login.html')
  },

  fillForm() {
    I.waitForElement('#login_form')
    I.fullField('#user_login', 'invalid-username')
    I.fullField('#user_password', 'invalid password')
    I.click("input[type = 'submit']")
  },
}
