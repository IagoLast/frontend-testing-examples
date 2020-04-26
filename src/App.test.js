import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
// import App from './AppHooks'; // This test will pass even when testing the same application written using hooks.
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './AppComponent';
Enzyme.configure({ adapter: new Adapter() });


describe('<App/>', () => {
  let view;

  beforeEach(() => {
    view = render(<App />);
  });

  describe('when the user is not VIP', () => {
    it('should not have right to free tickets ', () => {
      expect(view.queryByText('20€')).toBeVisible();
    });
  });

  describe('when the user is VIP', () => {
    it('should have right to free tickets ', () => {
      const $isVipCheckbox = view.getByLabelText('VIP');
      
      userEvent.click($isVipCheckbox);

      expect(view.queryByText('0€')).toBeVisible();
    });
  });
});
