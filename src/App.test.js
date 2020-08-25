import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './AppHooks'; // This test will pass even when testing the same application written using hooks.


describe('<App/>', () => {

  beforeEach(() => {
    render(<App />);
  });

  describe('when the user is not VIP', () => {
    it('should not have right to free tickets ', () => {
      expect(screen.queryByText('20€')).toBeVisible();
    });
  });

  describe('when the user is VIP', () => {
    beforeEach(() => {
      userEvent.click(screen.queryByLabelText('VIP'));
    });

    it('should have right to free tickets ', () => {
      expect(screen.queryByText('0€')).toBeVisible();
    });
  });
});
