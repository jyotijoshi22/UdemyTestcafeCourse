import { Selector, t } from 'testcafe'
import BasePage from './BasePage'
class LoginPage extends BasePage {
	constructor() {
		//selectors
		this.usernameInput = Selector('#user_login')
		this.passwordInput = Selector('#user_password')
		this.submitButton = Selector('.btn-primary')
		this.errorMessage = Selector('.alert-error')
	}

	async loginToApp(username, password) {
		await t
			.typeText(this.usernameInput, username, {
				paste: true,
				replace: true,
			})
			.typeText(this.passwordInput, password, {
				paste: true,
				replace: true,
			})
			.click(this.submitButton)
	}
}
export default LoginPage
