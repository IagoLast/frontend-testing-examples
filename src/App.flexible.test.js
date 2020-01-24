import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// import App from './AppComponent';
import App from './AppHooks'; // This test will pass even when testing the same application written using hooks.
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe('<App/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
  });

  describe('when the user is not VIP', () => {
    it('should not have right to free tickets ', () => {
      expect(wrapper.queryByText('Congrats, you have free tickets!')).toBeNull();

      fireEvent.click(wrapper.getByTestId('action-btn'), 'click');

      expect(wrapper.queryByText('Congrats, you have free tickets!')).toBeNull();
    });
  });

  describe('when the user is VIP', () => {
    beforeEach(() => {
      fireEvent.click(wrapper.getByTestId('isVip-checkbox'), 'click');
    });

    it('should have right to free tickets ', () => {
      expect(wrapper.queryByText('Congrats, you have free tickets!')).toBeNull();

      fireEvent.click(wrapper.getByTestId('action-btn'), 'click');

      expect(wrapper.queryByText('Congrats, you have free tickets!')).toBeVisible();
    });
  });
});
