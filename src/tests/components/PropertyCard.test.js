import React from 'react';
import { render ,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PropertyCard from '../../components/propertyCard';


describe('testing props', () => {

    const props = {
        title: "test title",
        type: "test type",
        city: "test city",
        bedrooms: 1,
        bathrooms: 11,
        price: 111,
        email: "test@test"
        
    }


    test('renders value for title prop', () => {
        const { asFragment } = render(<PropertyCard title={props.title} />);
        expect(screen.getByText(/test title/)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    })
   
    test('renders value for type prop', () => {
        const { asFragment } = render(<PropertyCard type={props.type} />);
        expect(screen.getByText(/test type/)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    })

    test('renders value for city prop', () => {
        const { asFragment } = render(<PropertyCard city={props.city} />);
        expect(screen.getByText(/test city/)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    })

    test('renders value for bedrooms prop', () => {
        const { asFragment } = render(<PropertyCard bedrooms={props.bedrooms} />);
        expect(screen.getByText(/1/)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    })

    test('renders value for bathrooms prop', () => {
        const { asFragment } = render(<PropertyCard bathrooms={props.bathrooms} />);
        expect(screen.getByText(/11/)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    })

    test('renders value for price prop', () => {
        const { asFragment } = render(<PropertyCard price={props.price} />);
        expect(screen.getByText(/111/)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    })

    test('renders value for email prop', () => {
        const { asFragment } = render(<PropertyCard email={props.email} />);
        expect(screen.getByText(/test@test/)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    })
})

