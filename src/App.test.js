
// https://reactjs.org/docs/testing-recipes.html#data-fetching
import { act, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from 'react';
import apiClient from './api.client';
import App from './AppHooks';


describe('<App/>', () => {
  let $voucherInput;

  beforeEach(() => {
    jest.spyOn(apiClient, 'checkVoucher').mockImplementation(fakeCheckVoucher);  // Replace the client with a fake implementation.
    render(<App />);
    $voucherInput = screen.getByPlaceholderText('Código de descuento')
  });

  it('should not have free tickets by default ', async () => {
    expect(screen.queryByText('20€')).toBeVisible();
  });

  it('should not have free tickets when the code is invalid', async () => {
    await act(() => userEvent.type($voucherInput, 'invalid'));
    expect(screen.queryByText('20€')).toBeVisible();
  });


  it('should have free tickets when the user inserts a valid voucher code', async () => {
    await act(() => userEvent.type($voucherInput, 'valid'));
    expect(screen.queryByText('0€')).toBeVisible();
  });
});

/**
 * Prevent false positives due server issues
 */
async function fakeCheckVoucher(code) {
  return code === 'valid';
}
