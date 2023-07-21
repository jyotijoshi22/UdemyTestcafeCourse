import { Selector } from 'testcafe'
import { login } from '../helper'
//end to end testing
fixture`New payee test`.page`http://zero.webappsecurity.com/index.html`
test.before(async t => {
	// below code tranferred to  helper.js
	// const signInButton = Selector('#signin_button')
	// await t.click(signInButton)
	// const usernameInput = Selector('#user_login')
	// const passwordInput = Selector('#user_password')
	// await t.typeText(usernameInput, 'username', { paste: true })
	// await t.typeText(passwordInput, 'password', { paste: true })

	// const submit_button = Selector('.btn-primary')
	// await t.click(submit_button)

	await login('username', 'password')
})('User can add new payee to the list', async t => {
	//Selectors
	const payBillsTab = Selector('#pay_bills_tab')
	const addNewPayeeTab = Selector('a').withText('Add New Payee')
	const form_name = Selector('#np_new_payee_name')
	const form_address = Selector('np_new_payee_address')
	const form_account = Selector('#np_new_payee_account')
	const form_details = Selector('#np_new_payee_details')
	const form_submitButton = Selector('#add_new_payee')
	const message = Selector('#alert_content').innerText
	//Actions
	await t.click(payBillsTab)
	await t.click(addNewPayeeTab)
	await t.typeText(form_name, 'name', { paste: true })
	await t.typeText(form_address, 'address', { paste: true })
	await t.typeText(form_account, 'account', { paste: true })
	await t.typeText(form_details, 'details', { paste: true })
	await t.click(form_submitButton)

	//Assertions

	await t
		.expect(message)
		.contains('The new payee dsada was successfully created.')
})
