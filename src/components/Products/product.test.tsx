import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi, Mock, expect, describe, test } from 'vitest';
import Products from './Products';
import { useFilteredProducts } from '../../hooks/useFilteredProducts';

vi.mock('../../hooks/useFilteredProducts');

describe('Products Component', () => {
    test('renders product list', () => {
        (useFilteredProducts as Mock).mockReturnValue({
            products: [{
                id: 1,
                name: 'Test Product',
                title: 'Test Product',
                price: 29.99,
                image: 'https://via.placeholder.com/150'
            }],
            totalPages: 1,
            isLoading: false,
            isError: false,
            error: null,
        });

        render(<Products />);
        expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    });

    test('shows spinner when loading', () => {
        (useFilteredProducts as Mock).mockReturnValue({
            products: [],
            totalPages: 0,
            isLoading: true,
            isError: false,
            error: null,
        });

        render(<Products />);
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });
    test('shows error message on error', () => {
        (useFilteredProducts as Mock).mockReturnValue({
            products: [],
            totalPages: 0,
            isLoading: false,
            isError: true,
            error: new Error('Something went wrong'),
        });

        render(<Products />);
        expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    });
    test('displays "no results" when product list is empty', () => {
        (useFilteredProducts as Mock).mockReturnValue({
            products: [],
            totalPages: 1,
            isLoading: false,
            isError: false,
            error: null,
        });

        render(<Products />);
        expect(screen.getByText(/we could not find any results/i)).toBeInTheDocument();
    });

    test('renders pagination and allows page change', () => {
        (useFilteredProducts as Mock).mockReturnValue({
            products: [{
                id: 1,
                title: 'Test Product',
                price: 10,
                image: ''
            }],
            totalPages: 2,
            isLoading: false,
            isError: false,
            error: null,
        });

        render(<Products />);
        expect(screen.getByText(/1\s*\/\s*2/)).toBeInTheDocument();
    });

});
