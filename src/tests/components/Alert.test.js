import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../components/alert';
import '@testing-library/jest-dom';

describe('tests alert component', () => {
    test('displays an error message', () => {
        const { getByText } = render(<Alert message="Error!" />);
        expect(getByText(/Error/).textContent).toBe('Error!');
    });
    test('displays success message', () => {
        const { getByText } = render(<Alert messsage="Success!!" success={true} />);
        expect(getByText(/Success/).textContent).toBe('Success!!');
    })
});
