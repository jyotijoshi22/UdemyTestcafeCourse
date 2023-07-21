import { Selector } from 'testcafe'
import xPathToCss from 'xpath-to-css'
import Navbar from '../page-objects/components/Navbar'
import SearchResultPage from '../page-objects/pages/SearchResultPage'
const navbar = new Navbar()
const searchResultPage = new SearchResultPage()

//end to end testing
fixture`User forgotten passowrd`.page`http://zero.webappsecurity.com/index.html`

test('User can search for  information using searcg box', async t => {
	//selectors
	//const searchBox = Selector('#searchTerm')
	// const resultTitle = Selector('h2')
	// const linkText = Selector('div').innerText

	//xpath to css example
	const xPath = ''

	//Actions
	// await t.typeText(navbar.searchBox, 'online Bank', { paste: true })
	// await t.pressKey('enter') // moved to navbar : functions also passed
	navbar.search('online Bank')

	//Assertions

	await t.expect(searchResultPage.exists).ok()
	await t.expect(navbar.searchBox.exists).ok()
	await t
		.expect(searchResultPage.linkText.innerText)
		.contains('Zero - Free Access to Online Banking')
})
