import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonLogin: true,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, this.formValidation);
  };

  // consulta https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  formValidation = () => {
    const { email, password } = this.state;

    const emailValidation = email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
    const minNumber = 5;
    const passwordValidation = password.length > minNumber;

    this.setState({
      buttonLogin: !(emailValidation && passwordValidation),
    });
  };

  render() {
    const { email, password, buttonLogin } = this.state;
    const { dispatch, history } = this.props;
    return (
      <div>
        <form
          onSubmit={ (e) => {
            e.preventDefault();

            dispatch(emailAction(this.state));
            history.push('/carteira');
          } }
        >
          <label htmlFor="email">
            E-mail
            <input
              data-testid="email-input"
              id="email"
              type="text"
              name="email"
              placeholder="E-mail"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="password">
            Senha
            <input
              data-testid="password-input"
              id="password"
              type="password"
              name="password"
              placeholder="Senha"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="submit"
            onClick={ this.formValidation }
            disabled={ buttonLogin }

          >
            Entrar
          </button>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}.isRequired;

export default connect(null)(Login);
