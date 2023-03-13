import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    const expenseTotal = expenses.reduce((acc, expense) => {
      const { value, exchangeRates, currency } = expense;

      const multiple = exchangeRates[currency].ask * value;

      return acc + multiple;
    }, 0);

    return (
      <div>

        <p data-testid="email-field">{email}</p>

        <p data-testid="total-field">{expenseTotal.toFixed(2)}</p>

        <p data-testid="header-currency-field">BRL</p>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};
export default connect(mapStateToProps)(Header);
