import { Selector } from 'testcafe';

export default class SearchPage {
    constructor () {
        this.searchInput           = Selector('#lst-ib');
        this.searchBtn             = Selector('.lsb');
    }
}