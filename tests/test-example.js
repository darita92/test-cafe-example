//import SearchPage from '../models/search-page-model';
//import ResultPage from '../models/results-page-model';

import { SearchPage, ResultPage } from '../models';

const searchPage = new SearchPage();
const resultPage = new ResultPage();

fixture `Google Search`
    .page `https://google.com`
    .afterEach(async t => {
        //console.log(t);
        //await t.takeScreenshot( 'screenshot-' + t.name + '.png' );
    });

test('Search for TestCafe', async t => {
    await t
        .typeText(searchPage.searchInput, 'testcafe')
        .click(searchPage.searchBtn)
        .expect(resultPage.firstHeader.innerText).contains('Github');
});