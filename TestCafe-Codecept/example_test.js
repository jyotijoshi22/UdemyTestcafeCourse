const LoginPage = require('./pages/LoginPage')

Feature('example')

// Scenario('Test 1', ({ I }) => {
//   I.amOnPage('http://www.example.com')
//   I.wait(1) // time in seconds
//   I.waitForElement('h1')

//   I.see('Example')
//   I.dontSeeElement('.login-form')
// })

// Scenario('Test2', ({ I }) => {
//   I.amOnPage('http://www.example.com')
//   I.wait(1) // time in seconds
//   I.waitForElement('h1')

//   I.dontSeeElement('.login-form')
//   I.seeInCurrentUrl('example.com')
// })
// Scenario('test 3', ({ I }) => {
//   I.amOnPage('http://www.example.com')
//   I.wait(1) // time in seconds
//   I.waitForElement('h1')

//   I.see('Example')
//   I.dontSeeElement('.login-form')
//   I.seeInCurrentUrl('example.com')
// })

// Scenario('Full page screen shot', ({ I }) => {
//   I.amOnPage('http://www.example.com')
//   I.wait(1) // time in seconds
//   I.waitForElement('h1')

//   I.saveScreenshot('test.png', true)
// })
// Scenario('single element screen shot', ({ I }) => {
//   I.amOnPage('http://www.example.com')
//   I.wait(1) // time in seconds
//   I.waitForElement('h1')
//   I.saveElementScreenshot('h1', 'Element.png')
// })
// Scenario('Login Test', ({ I }) => {
//   I.amOnPage('http://zero.webappsecurity.com/login.html')
//   I.waitForElement('#login_form')
//   I.fullField('#user_login', 'invalid-username')
//   I.fullField('#user_password', 'invalid password')
//   I.click("input[type = 'submit']")
//   I.waitForText('Login and/or paswword are wrong')
// })
Scenario('Extract test', async ({ I }) => {
  //added async here. because below line returning promise
  I.slowTest(0.2)
  I.amOnPage('http://zero.webappsecurity.com/login.html')
  I.refreshPage() // refreshes  browser
  let text = I.grabTextFrom('h1')
  console.log('Text' + text)
  let value = await I.grabValueFROM('h1')
  console.log(value)
})
scenario('Page Objects', ({ I, LoginPage }) => {
  LoginPage.goto()
  LoginPage.fillForm()
  I.waitForText('Login and/or password are wrong')
})
