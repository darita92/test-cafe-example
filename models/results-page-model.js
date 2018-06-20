import { Selector } from 'testcafe';

export default class ResultsPage {
    constructor () {
        this.firstHeader        = Selector('h3.r:first-child');
    }
}