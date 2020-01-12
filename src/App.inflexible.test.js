import React from 'react';
import App from './AppComponent';
// import App from './AppHooks'; // This test will fail when testing the same application written using hooks.

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ticketService from './tickets.service';

Enzyme.configure({ adapter: new Adapter() });

describe('<App/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = Enzyme.mount(<App />);
    });

    describe('when the user clicks on the button', () => {
        it('should call the hasFreeTickets function', () => {
            jest.spyOn(ticketService, 'hasFreeTickets').mockReturnValueOnce(true);

            expect(ticketService.hasFreeTickets).not.toHaveBeenCalled();

            wrapper.find('[data-testid="action-btn"]').simulate('click');

            expect(ticketService.hasFreeTickets).toHaveBeenCalledWith({ isVip: undefined });

        });

        it('should give free tickets when the service returns true', () => {
            jest.spyOn(ticketService, 'hasFreeTickets').mockReturnValueOnce(true);
            expect(wrapper.state('hasFreeTickets')).toBeFalsy();

            wrapper.find('[data-testid="action-btn"]').simulate('click');

            expect(wrapper.state('hasFreeTickets')).toBeTruthy();
        });

        it('should not give free tickets when the service returns false', () => {
            jest.spyOn(ticketService, 'hasFreeTickets').mockReturnValueOnce(false);
            expect(wrapper.state('hasFreeTickets')).toBeFalsy();

            wrapper.find('[data-testid="action-btn"]').simulate('click');

            expect(wrapper.state('hasFreeTickets')).toBeFalsy();
        });
    });


    describe('when the user is not VIP', () => {
        beforeEach(() => {
            wrapper.setState({ isVip: false });
        });

        it('should not have right to free tickets ', () => {
            expect(wrapper.state('hasFreeTickets')).toBeFalsy();

            wrapper.find('[data-testid="action-btn"]').simulate('click');

            expect(wrapper.state('hasFreeTickets')).toBeFalsy();
        });
    });

    describe('when the user is VIP', () => {
        beforeEach(() => {
            wrapper.setState({ isVip: true });
        });

        it('should have right to free tickets ', () => {
            expect(wrapper.state('hasFreeTickets')).toBeFalsy();

            wrapper.find('[data-testid="action-btn"]').simulate('click');

            expect(wrapper.state('hasFreeTickets')).toBeTruthy();
        });
    });
});
