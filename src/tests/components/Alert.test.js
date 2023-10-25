import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../../components/alert';
import '@testing-library/jest-dom';

describe('tests alert component', () => {
    test('displays an error message', () => {
        const { getByText, asFragment } = render(<Alert message="Error!" />);
        expect(getByText(/Error/).textContent).toBe('Error!');
        expect(asFragment()).toMatchSnapshot();
    });
    test('displays success message', () => {
        const { getByText, asFragment } = render(<Alert message="Success!!" success={true} />);
        expect(getByText(/Success/).textContent).toBe('Success!!');
        expect(asFragment()).toMatchSnapshot();
    });
    test('doesnt render success message if message props is empty', () => {
        const { asFragment } = render(<Alert message="" />);
        const alert = asFragment();
        expect(alert).toMatchSnapshot();
    });
});


