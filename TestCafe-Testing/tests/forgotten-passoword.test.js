import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
const navbar = new Navbar()
//end to end testing
fixture`User forgotten passowrd`.page`http://zero.webappsecurity.com/index.html`

test('User can request new passowrd  to send to his email', async t => {
	//get selectors

	// const signInButton = Selector('#signin_button')-->  replacing this by page model

	const linktoForgottenPassword = Selector('a').withText(
		'Forgot your password?'
	)
	const emailInput = Selector('#user_email')
	const message = Selector('div')

	// actions
	await t.click(navbar.signInButton)
	await t.click(linktoForgottenPassword)
	await t.typeText(emailInput, 'email@eandom.com', { paste: true })
	await t.pressKey('enter')
	// Assertions
	await t.expect(message).contains('email@random.com')
	await t.expect(emailInput.exists).notOk()
})
