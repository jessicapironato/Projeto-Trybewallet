import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testar componente Wallet ', () => {
  it('1.Testa funcionalidade de inputs', () => {
    renderWithRouterAndRedux(<Wallet />);

    const value = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');
    const currency = screen.getByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');

    userEvent.type(value, '1');
    userEvent.type(description, 'sapato');
    userEvent.type(currency, 'USD');
    userEvent.type(method, 'Dinheiro');
    userEvent.type(tag, 'Lazer');

    expect(value).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
  });
});
