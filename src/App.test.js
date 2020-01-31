import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react'
import App from './App';

describe('<App />', () => {
    it('should have an h1 header saying "Hello Testing!"', () => {
        const wrapper = render(<App />);
        expect(wrapper.queryByText('Hello Testing!')).toBeVisible();
    });

    it('should have an h2 header saying "Let\'s create better software."', () => {
        const wrapper = render(<App />);
        expect(wrapper.queryByText(`Let's create better software.`)).toBeVisible();
    });

    it('the h2 header should be red', () => {
        const wrapper = render(<App />);
        const h2 = wrapper.queryByText(`Let's create better software.`);
        expect(window.getComputedStyle(h2).color).toEqual('red');
    });
});