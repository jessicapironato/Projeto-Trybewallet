import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
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
              // value={  }
              // onChange={  }
            />
          </label>

          <label htmlFor="description">
            Descrição das Despesas
            <input
              data-testid="description-input"
              id="description"
              type="text"
              name="description"
              // value={  }
              // onChange={  }
            />
          </label>

          <label htmlFor="currency">
            Moeda
            <select
              data-testid="currency-input"
              id="currency"
              name="currency"
              // value={  }
              // onChange={  }
            >
              {}
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento
            <select
              data-testid="method-input"
              id="method"
              name="method"
              // value={  }
              // onChange={  }
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
              // value={  }
              // onChange={  }
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

export default WalletForm;
