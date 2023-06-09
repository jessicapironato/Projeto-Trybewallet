import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenseRemoveAction } from '../redux/actions';

class Table extends Component {
  buttonDelete = (id) => {
    const { dispatch } = this.props;
    dispatch(expenseRemoveAction(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>

        <tbody>

          {expenses.map((expense) => (
            <tr key={ expense.id }>

              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{parseFloat(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>
                {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>
                {(parseFloat(expense.exchangeRates[expense.currency].ask)
                * parseFloat(expense.value)).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.buttonDelete(expense.id) }

                >
                  Deletar Despesa
                </button>
              </td>

            </tr>

          ))}

        </tbody>
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
