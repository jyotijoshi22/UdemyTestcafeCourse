import { Selector } from 'testcafe'
import FeedbackPage from '../page-objects/pages/FeedbackPage'
const feedbackPage = new FeedbackPage()
//end to end testing
fixture`User forgotten passowrd`.page`http://zero.webappsecurity.com/index.html`

test('User can submit the feedback form', async t => {
	//selectors
	const linktoFeedback = Selector('#feedback')
	// const form_name = Selector('#name')
	// const form_email = Selector('#email')
	// const form_subject = Selector('#subject')
	// const form_comment = Selector('#comment')
	// const form_submit = Selector('input').withAttribute('value', 'Send Message')
	// const message = Selector('div').innerText

	//Actions

	await t.click(linktoFeedback)
	await t.typeText(feedbackPage.formName, 'Name', { paste: true })
	await t.typeText(feedbackPage.formEmail, 'test@email.com', { paste: true })
	await t.typeText(feedbackPage.formSubject, 'Subject', { paste: true })
	await t.typeText(feedbackPage.formComment, 'Your comment goes here', {
		paste: true,
	})

	await t.click(feedbackPage.formSubmitButton)

	//Assertions
	await t
		.expect(feedbackPage.formMessage.innerText)
		.contains('Thank you for your comments')
})
