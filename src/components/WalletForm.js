import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurrencies } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      expense: 0,
      description: '',
      currency: 'BRL',
      method: 'Dinheiro',
      tagCategory: 'Alimentação',

    };
  }

  // consulta aula Aula - FE 7.4 - Usando o Redux no React - Actions assíncronas para fazer requisito 3
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiCurrencies());
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { expense, description, currency, method, tagCategory } = this.state;
    const { currencies } = this.props;

    return (

      <div>
        <form>

          <label htmlFor="expenses">
            Despesas
            <input
              data-testid="value-input"
              id="expense"
              type="number"
              name="expense"
              value={ expense }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="description">
            Descrição das Despesas
            <input
              data-testid="description-input"
              id="description"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>

          {/* // para fazer o map, consultei https://stackoverflow.com/questions/31413053/how-to-use-an-array-as-option-for-react-select-component */}

          <label htmlFor="currency">
            Moeda
            <select
              data-testid="currency-input"
              id="currency"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies.map(
                (curr) => <option key={ curr } value={ curr }>{curr}</option>,
              )}
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento
            <select
              data-testid="method-input"
              id="method"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>

            </select>
          </label>

          <label htmlFor="tagCategory">
            Tipo de Despesas
            <select
              data-testid="tag-input"
              id="tagCategory"
              name="tagCategory"
              value={ tagCategory }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>

            </select>
          </label>

        </form>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({

  currencies: state.wallet.currencies,

});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
