import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testar componente Login ', () => {
  it('1.Testa funcionalidade de inputs', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByTestId('email-input');
    const senha = screen.getByTestId('password-input');

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
  });

  it('2.Testa a funcionalidade do botão após inserção de informações nos inputs', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByTestId('email-input');
    const senha = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: 'Entrar' });

    userEvent.type(email, 'usuario@teste.com');
    userEvent.type(senha, '123abc!');

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it('2.Se após clicar no botão a página é redirecionada para Wallet', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    // precisa seguir a ordem correta em que o evento ocorre, senão quebra

    const email = screen.getByText('E-mail');
    const senha = screen.getByText('Senha');

    userEvent.type(email, 'usuario@teste.com');
    userEvent.type(senha, '123abc!');

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Entrar' });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    expect(history.location.pathname).toBe('/carteira');
  });
});
