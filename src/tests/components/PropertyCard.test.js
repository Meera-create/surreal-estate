import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PropertyCard from '../../components/propertyCard';


describe('testing props', () => {
    test('has the correct value been asserted for title prop', () => {
        const { asFragment } = render(<PropertyCard title />);
        expect(asFragment()).toMatchSnapshot();
    })
   
})

