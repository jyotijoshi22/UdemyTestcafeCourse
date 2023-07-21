import { Selector } from 'testcafe'
//end to end testing
fixture`User forgotten passowrd`.page`http://zero.webappsecurity.com/index.html`

test('User can submit the feedback form', async t => {
	//selectors
	const linktoFeedback = Selector('#feedback')
	const form_name = Selector('#name')
	const form_email = Selector('#email')
	const form_subject = Selector('#subject')
	const form_comment = Selector('#comment')
	const form_submit = Selector('input').withAttribute('value', 'Send Message')
	const message = Selector('div').innerText

	//Actions

	await t.click(linktoFeedback)
	await t.typeText(form_name, 'Name', { paste: true })
	await t.typeText(form_email, 'test@email.com', { paste: true })
	await t.typeText(form_subject, 'Subject', { paste: true })
	await t.typeText(form_comment, 'Your comment goes here', { paste: true })

	await t.click(form_submit)

	//Assertions
	await t.expect(message).contains('Thank you for your comments')
})
