import {Button} from "../src/button";
import 'mocha';
import {assert, expect} from 'chai';
import * as sinon from 'sinon';

describe('SitesMenuToggle', () => {
    beforeEach(() => {
        // Make a button element
        let el: HTMLElement = document.createElement('button');
        document.body.appendChild(el);
    });

    it('should get click event on button', () => {
        // Instantiate class
        // Pass button and event to spy
        const button = new Button();
        const event = sinon.spy(button, 'clickEvent');

        // Look that the event could be called
        button.clickEvent();

        // Expect that the event is called once
        expect(event.callCount).to.equal(1);
    });
});
