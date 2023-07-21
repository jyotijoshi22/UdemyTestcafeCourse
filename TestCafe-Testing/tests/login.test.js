import { Selector } from 'testcafe'
//import { login } from '../helper'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import FeedbackPage from '../page-objects/pages/FeedbackPage'
//end to end testing
const navbar = new Navbar()
const loginPage = new LoginPage()

fixture`Login  test case`.page`http://zero.webappsecurity.com/index.html`
test(' Invalid credentials of Users', async t => {
	// const signInButton = Selector('#signin_button')
	// await t.click(signInButton)

	// const loginForm = Selector('#login_form')
	// await t.expect(loginForm.exists).ok()

	// const usernameInput = Selector('#user_login')
	// const passwordInput = Selector('#user_password')
	// await t.typeText(usernameInput, 'invalid username', { paste: true })
	// await t.typeText(passwordInput, 'invalid password', { paste: true })

	// const submit_button = Selector('.btn-primary')
	// await t.click(submit_button)
	//await login('invalid username', 'invalid passowrd')
	await t.click(navbar.signInButton)
	loginPage.loginToApp('invalid username', 'invalid password')
	const errorMessage = Selector('.alert-error').innerText
	await t.expect(errorMessage).contains('Login and/or password are wrong.')
	loginPage.waitFor(4000)
})

test(' User can login into application', async t => {
	const signInButton = Selector('#signin_button')
	// await t.click(signInButton)

	const loginForm = Selector('#login_form')
	await t.expect(loginForm.exists).ok()

	// const usernameInput = Selector('#user_login')
	// const passwordInput = Selector('#user_password')
	// await t.typeText(usernameInput, 'username', { paste: true })
	// await t.typeText(passwordInput, 'password', { paste: true })

	// const submit_button = Selector('.btn-primary')
	// await t.click(submit_button)
	//await login('username', 'passoword')
	await t.click(navbar.signInButton)
	loginPage.loginToApp('username', 'password')
	const accountSummary = Selector('#account_summary_tab')
	await t.expect(accountSummary.exists).ok()
	await t.expect(loginForm.exists).notOk()

	const userIcon = Selector('.icon-user')
	await t.click(userIcon)

	const logoutButton = Selector('#logout_link')
	await t.click(logoutButton)

	await t.expect(logoutButton.exists).notOk()
	await t.expect(signInButton.exists).ok()
})
//parallel execution "test:Edge:5": "testCafe -c 5 Edge ./tests -s takeOnFails=true",   runs test in 5 browsers
//"test:Edge:5": "testCafe -c 5 Edge ./tests -s takeOnFails=true -s takeOnFails=true",  runs test in 5 browers without showing browsers
// runnig test in multiple browsers . check package json,"test:multiple": "testCafe chrome,firefox,Edge ./tests -s takeOnFails=true"
