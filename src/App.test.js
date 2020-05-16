
// https://reactjs.org/docs/testing-recipes.html#data-fetching
import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import apiClient from './api.client';
import App from './AppHooks';


describe('<App/>', () => {
  let wrapper, $voucherInput;

  beforeEach(() => {
    jest.spyOn(apiClient, 'checkVoucher').mockImplementation(fakeCheckVoucher);  // Replace the client with a fake implementation.
    wrapper = render(<App />);
    $voucherInput = wrapper.getByPlaceholderText('Código de descuento')
  });

  it('should not have free tickets by default ', async () => {
    expect(wrapper.queryByText('20€')).toBeVisible();
  });

  it('should not have free tickets when the code is invalid', async () => {
    await act(async () => fireEvent.change($voucherInput, { target: { value: 'invalid' } }));
    expect(wrapper.queryByText('20€')).toBeVisible();
  });


  it('should have free tickets when the user insertas a valid voucher code', async () => {
    await act(async () => fireEvent.change($voucherInput, { target: { value: 'valid' } }));
    expect(wrapper.queryByText('0€')).toBeVisible();
  });
});

async function fakeCheckVoucher(code) {
  return code === 'valid';
}
