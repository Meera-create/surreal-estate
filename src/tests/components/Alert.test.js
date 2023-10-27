import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../../components/alert';
import '@testing-library/jest-dom';

describe('tests alert component', () => {
    test('displays an error message', () => {
        const { asFragment } = render(<Alert message="Error!" />);
        expect(screen.getByText(/Error!/)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
    test('displays success message', () => {
        const { asFragment } = render(<Alert message="Success!!" success={true} />);
        expect(screen.getByText(/Success/)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
    test('doesnt render success message if message props is empty', () => {
        const { asFragment } = render(<Alert message="" />);
        const alert = asFragment();
        expect(alert).toMatchSnapshot();
    });
});


