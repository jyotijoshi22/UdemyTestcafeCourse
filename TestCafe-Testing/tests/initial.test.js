import { Selector } from 'testcafe'
//prettier-ignore

fixture` Getting  started with  Automation Testing:TestCafe`.page
	`https://devexpress.github.io/testcafe/example/`
.before(async t=>{
    //test setup
    // await runDatabaseReset()
    // await seedTestData()
})


.beforeEach(async t=>{
    await t.setTestSpeed(1)
    await t.setPageLoadTimeout(0)
// runs before each test
})


.after(async t=>{
// cleaning test data
// logginf and sending data to monitoring systems
})


.afterEach(async t=>{
    //runs after each test
})

//1.simple easy test
/*test('First test of TestCafe', async t => {
	//  testcafe code
	await t.typeText('#developer-name', 'John')
	await t.click('#submit-button')
})*/

// // 2. modifying: addded expects
// test('First test of TestCafe', async t => {
// 	//await t.setTestSpeed(1)
// 	//  testcafe code
// 	await t.typeText('#developer-name', 'John')
//     // await t.wait(3000) use for debugging purpose
// 	await t.click('#submit-button')
// 	await t.expect(Selector('#article-header').innerText).contains('John')
// })
//"test:Edge:headless": "testCafe Edge:headless  ./tests"  this line in json will not open browser and pass the test
//"test:Edge:mobile": "testCafe Edge:emulation:device=iphone X  ./tests"

//3.Test hooks: before, before each , after and after each
//4.Setting the test speed(0.01-1) slow->fast   await t.setTestSpeed(0.01)   added
// 5. pause the test: use wait
// 6.  Adding selectors

test('First test of TestCafe', async t => {
	const input_name = Selector('#developer-name')
	const submit_button = Selector('#submit-button')
	const article_header = Selector('#article-header')

	// await t.takeScreenshot({ fullPage: true })
	await t.takeElementScreenshot(submit_button)
	await t.typeText(input_name, 'John')
	// await t.wait(3000) use for debugging purpose
	await t.click(submit_button)
	await t.expect(Selector(article_header).innerText).contains('John')
})

test.skip('Second test of TestCafe', async t => {
	const input_name = Selector('#developer-name')
	const submit_button = Selector('#submit-button')
	const article_header = Selector('#article-header')

	// await t.takeScreenshot({ fullPage: true })
	await t.takeElementScreenshot(submit_button)
	await t.typeText(input_name, 'John')
	// await t.wait(3000) use for debugging purpose
	await t.click(submit_button)
	await t.expect(Selector(article_header).innerText).contains('John')
})

test.skip('Third test of TestCafe', async t => {
	const input_name = Selector('#developer-name')
	const submit_button = Selector('#submit-button')
	const article_header = Selector('#article-header')

	// await t.takeScreenshot({ fullPage: true })
	await t.takeElementScreenshot(submit_button)
	await t.typeText(input_name, 'John')
	// await t.wait(3000) use for debugging purpose
	await t.click(submit_button)
	await t.expect(Selector(article_header).innerText).contains('John')

	// api action
	await t.click('selector', { options })
	await t.doubleClick('selector', { options })
	await t.rightClick('selector', { options })
	await t.drag('selector', 200, 0, { options })
	await t.hover('selector', { options })
	await t.selectText('selector')
	await t.typeText('selector', 'text')
	await t.pressKey('yourkey')
	await t.navigateTo('url')
	await t.takeScreenshot()
	await t.takeElementScreenshot()
	await t.resizeWindow(800, 600)

	//assertions:
	//deep equal
	await t.expect('foo').eql('foo', 'message', options)
	//not deep equal
	await t.expect('foo').notEql('foo', 'message', options)
	//ok
	await t.expect(true).ok()
	//not ok
	await t.expect(true).notOk()
	//contains
	await t.expect('foo').contains('o')
	await t.expect('foo').notContains('hey')

	// greater or less than
	await t.expect(10).gt(5) // true
	await t.expect(10).gte(10) // true
	await t.expect(10).lt(5) // false
	await t.expect(10).lte(5) // true

	//within
	await t.expect(10).within(1, 100) // true
	//not within
	await t.expect(10).notWithin(1, 7) // false
})
//7. screenshots : how t o take await t.takeElementScreenshot(submit_button)
//8. screenshot of failed test
// page load timeout setting- added in before each
// skip test  use test.skip
// disbale cache change sin package json
// explore action API:  await t.click('selector', { options })
//assertions
// sections
