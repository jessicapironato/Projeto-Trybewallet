import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail
            <input
              data-testid="email-input"
              id="email"
              type="text"
              name="email"
            />
          </label>

          <label htmlFor="password">
            Senha
            <input
              data-testid="password-input"
              id="password"
              type="text"
              name="password"
            />
          </label>

          <button
            type="submit"

          >
            Entrar
          </button>

        </form>
      </div>
    );
  }
}

export default Login;
